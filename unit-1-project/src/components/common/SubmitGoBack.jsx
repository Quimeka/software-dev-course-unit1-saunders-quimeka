import React from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router'

export default function SubmitGoBack() {

    const navigate = useNavigate();

    return (
        <div className="form-nav-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
};