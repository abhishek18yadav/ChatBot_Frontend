import { useEffect, useState } from "react";
import { useSignup } from "@/hooks/AuthApi/useSignup.js";
import { useNavigate } from "react-router-dom";
import {SignupCard} from "./SignupCard.jsx";

export const SignupCardContainer = () => {
    const navigate = useNavigate();
    const [ValidationError, setValidationError] = useState();
    const [signupForm, setSignupForm] = useState({
        name: '',
        email: '',
        password: ''
    });
    const {isPending, isSuccess, error, signupMutation } = useSignup();
    async function signupFormSubmit(e) {
        e.preventDefault();
        if(!signupForm.email || !signupForm.password || !signupForm.name) {
            console.log("all fields are mandatoruy");
            setValidationError({ message: 'all fields are mandatory' });
            return;
        }
        setValidationError(null);
        await signupMutation({
            name: signupForm.name,
            email: signupForm.email,
            password: signupForm.password
        })
        
    }
    useEffect(() => {
        if (isSuccess) {
            navigate("/home");
        }
    }, [isSuccess, navigate]);
    return (
        <SignupCard
            signupForm={signupForm}
            setSignupForm={setSignupForm}
            signupFormSubmit={signupFormSubmit}
            isPending={isPending}
            error={error}
            ValidationError={ValidationError}
        />
    )
}