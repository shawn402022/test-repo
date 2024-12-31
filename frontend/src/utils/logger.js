export const logMessage = (message) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message);
  } else {
    // Production logging
    console.log(`[PRODUCTION] ${message}`);
    // You can also implement error tracking services here
  }
};
