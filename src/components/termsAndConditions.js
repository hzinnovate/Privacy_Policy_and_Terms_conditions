import React from 'react'
import { Link } from "react-router-dom";


export const TermsAndConditions = () => {
    return (
        <div>
            <Link to="/privacy-policy">
                <button>
                    Go to privacy policy
            </button>
            </Link>
            <h1>Terms And Conditions</h1>
            <div>
                <p>
                    You agree to these Terms when you start using Services. If you don’t agree with these Terms, kindly refrain from using our Services. You also agree that you are using our Services as per our Privacy Policy.
                </p>
            </div>
        </div>
    )
}
