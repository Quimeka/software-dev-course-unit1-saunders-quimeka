import { useNavigate } from 'react-router'

export default function SubmitGoBack({resetInput}) {

    const navigate = useNavigate();
    //gonext and/or go back to previous page
    return (
        <div className="NavigationButtons">
            <button className="submitButton" type="submit">Submit</button>
            <button className="backButton" type="button" onClick={() => {
                resetInput && resetInput();
                navigate(-1)}
                }>
                Go Back
            </button>
        </div>
    );
}