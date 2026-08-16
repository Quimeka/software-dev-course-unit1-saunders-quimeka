import React from 'react';
import { Link, useNavigate } from 'react-router'

export default function SubmitGoBack() {

    const navigate = useNavigate();

    return (
        <div className="NavigationButtons">
            <button className="submitButton" type="submit">Submit</button>
            <button className="backButton" type="button" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
}