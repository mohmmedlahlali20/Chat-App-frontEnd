// src/pages/NotFound.tsx
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
            <h1 className="text-9xl font-bold text-blue-500">404</h1>
            <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
            <p className="mt-2 text-lg text-gray-600">
                Sorry, the page you’re looking for doesn’t exist.
            </p>
            <Button
                variant="contained"
                color="primary"
                className="mt-6"
                onClick={handleGoBack}
            >
                Go to Home
            </Button>
        </div>
    );
};

export default NotFound;
