import React from 'react'
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
    return (
        <div>
            <Link to="/Terms_And_Conditions">
                <button>
                    Go to terms and conditions
            </button>
            </Link>
            <h1>Privacy Policy</h1>
            <div>
                <p>
                Data We Collect
                1. Personal Provided Information
                Personal information includes details like your name and email address which we collect to personalize your experience as well as to communicate with you. You can always opt-out of electronic communications from us at any time. We collect other personal details that you input for your sleep management, like your gender and age. These details help us implement our sleep solution, and also research what works best for our users.

                When you sign up for our service we collect

                Name
                Display Name
                Email
                Age
                Gender
                How long you’ve had sleep problems
                </p>
            </div>
        </div>
    )
}
