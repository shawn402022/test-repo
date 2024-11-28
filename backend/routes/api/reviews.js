//IMPORTS AND REQUIREMENTS

//imports the Express.js framework, which is used to create web applications and APIs in Node.js
const express = require('express');
//importing Operator object - used for complex queries.
const { Op } = require('sequelize');
//Used for hashing passwords
const bcrypt = require('bcryptjs');
//imported from utils/auth.js. setTokenCookie creates JWT token, restoreUsers verifies the token sent in the request
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
//Import the user model
const {  Review,  ReviewImages, Users, Spot } = require('../../db/models');
//creates a new router for this route
const router = express.Router();

const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');

//add Image to Review based on Reviews id
router.post('/:reviewId/images', requireAuth,  async (req,res) => {
    const userReview = await Review.findByPk(req.params.reviewId);
    const { url } = req.body;
    //const urlImage = '../images/m5.jpg'

    if(!userReview) {
        return res.status(404).json({message: "Review couldn't be found"});
    }

    if(userReview.userId !== req.user.id) {
        return res.status(403).json({message: "Forbidden"});
    }

    // Count existing images fpr this particular review
    const imageCount = await ReviewImages.count({
        where :{ reviewId: req.params.reviewId}
    })

    //check if the maximum number of images is reached
    if(imageCount>= 10 ){
        return res.status(403).json({
            message: "Maximum number of images for this resource was reached"
        })
    }

    const newImage = await ReviewImages.create({
        reviewId: req.params.reviewId,
        url: url
    });

    const response = {
        id: newImage.id,
        url: newImage.url
    };
    res.status(201).json(response);


});

//Edit Review MiddleWare
const validateReviewUpdate = [
    check('review')
        .optional()
        .exists({ checkFalsy: true })
        .withMessage("Review text is required"),
    check('stars')
        .optional()
        .isFloat({min: 0, max:5})
        .withMessage("Stars must be an integer from 1 to 5"),
    handleValidationErrors
];

//Edit a Review
router.patch('/:reviewId', requireAuth, validateReviewUpdate, async (req,res) => {
    //get reviewId from url
    const reviewId = req.params.reviewId;

    //find the review
    const foundReview = await Review.findByPk(reviewId);
    if(!foundReview) res.status(404).json({message: "Review couldn't be found"});

    //check autherization
    if(foundReview.userId !== req.user.id) res.status(401).json({unautherized:'Review must belong to the current user'});

    //grab data from req
    const {review, stars} =req.body;
    //update the review
    await foundReview.update({review, stars});

    //get the spot
    const spot = await Spot.findByPk(foundReview.spotId);
    //find all that spots reviews
    const allReviews = await spot.getReviews();
    //calculate total stars from all reviews
    const total = allReviews.reduce((sum, review) => sum + review.stars, 0);
    //calculate new Avg
    const avgRating = Number((total / allReviews.length).toFixed(1));

    // Only update if avgRating has changed
    if (spot.avgRating !== avgRating) {
        spot.avgRating = avgRating; // Update average rating
        await spot.save(); // Save changes made to DB
    }

    res.status(200).json(foundReview);
});

//Delete a Review
router.delete('/:reviewId', requireAuth, async (req,res) => {
    //get reviewId from url
    const reviewId = req.params.reviewId;

    //find the review
    const foundReview = await Review.findByPk(reviewId);
    if(!foundReview) res.status(404).json({message: "Review couldn't be found"});

    //check autherization
    if(foundReview.userId !== req.user.id) return res.status(401).json({unautherized:'Review must belong to the current user'});

    //delete the review
    await foundReview.destroy()

    //get the spot
    const spot = await Spot.findByPk(foundReview.spotId);
    //find all that spots reviews
    const allReviews = await spot.getReviews();
    //calculate total stars from all reviews
    const total = allReviews.reduce((sum, review) => sum + review.stars, 0);
    //calculate new Avg
    const avgRating = Number((total / allReviews.length).toFixed(1));

    // Only update if avgRating has changed
    if (spot.avgRating !== avgRating) {
        spot.avgRating = avgRating; // Update average rating
        await spot.save(); // Save changes made to DB
    }

    return res.status(200).json({message: "Successfully deleted"})
});

//Delete a Review Image
router.delete('/:reviewId/image/:imageId', requireAuth, async (req,res) =>{
    const reviewImageId = req.params.imageId;

    const reviewImageToDelete = await ReviewImages.findByPk(reviewImageId, {
        include: {
            model:Review,
            as: "Review",
            attributes:["userId"]
        }
    })

    if(!reviewImageToDelete) {
        return res.status(404).json({message:"Review Image couldn't be found"})
    }

    if(reviewImageToDelete.Review.userId !== req.user.id) {
        return res.status(401).json('Unauthorized')
    }

    await reviewImageToDelete.destroy();

    return res.status(200).json({message:"Successfully deleted"})
})

module.exports = router;
