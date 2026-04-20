import { useEffect, useState } from "react";
import { useSignin } from "@/hooks/AuthApi/useSignin.js";
import { useNavigate } from "react-router-dom";
import { SigninCard } from "./SigninCard.jsx";

export const SigninCardContainer = () => {
    const navigate = useNavigate();
    const [ValidationError, setValidationError] = useState();
    const [signinForm, setSigninForm] = useState({
        email: '',
        password: ''
    });
    const { isPending, isSuccess, error, signinMutation } = useSignin();

    async function signinFormSubmit(e) {
        e.preventDefault();
        if (!signinForm.email || !signinForm.password) {
            setValidationError({ message: 'All fields are mandatory' });
            return;
        }
        setValidationError(null);
        await signinMutation({
            email: signinForm.email,
            password: signinForm.password
        });
    }

    useEffect(() => {
        if (isSuccess) {
            navigate("/home");
        }
    }, [isSuccess, navigate]);

    return (
        <SigninCard
            signinForm={signinForm}
            setSigninForm={setSigninForm}
            signinFormSubmit={signinFormSubmit}
            isPending={isPending}
            error={error}
            ValidationError={ValidationError}
        />
    );
};
