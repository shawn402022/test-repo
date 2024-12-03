import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './LoginForm.css';

function LoginFormModal() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const { closeModal } = useModal();

    //const credentialWarning = () => {
    //    return 'the provided credentials were invalid'
    //}


    const isFormValid = credential.length >= 4 && password.length >= 6;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        return dispatch(sessionActions.login({ credential, password }))
            .then(closeModal)
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    setErrors({ credential: "The provided credentials were invalid." });

                }
            });
    };

    const handleDemoLogin = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({
            credential: 'demo@user.io',
            password: 'password'
        }))
        .then(closeModal)
    }


    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username or Email
                    <input
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required

                    />
                </label>
                {errors.credential && (
                    <p>{errors.credential}</p>
                )}
                <button
                    type="submit"
                    disabled={!isFormValid}
                >Log In</button>
                <button
                    type="button"
                    onClick={handleDemoLogin}

                >Log in as demo user
                </button>
            </form>
        </div>
    );
}

export default LoginFormModal;
