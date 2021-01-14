import React from 'react';
import { Link } from "react-router-dom";

export const SelectRoute = () => {
    return (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginTop: 50 }}>
            <Link to="/Privacy_Policy_Statement">
                <button>
                    Go to privacy policy
            </button>
            </Link>
            <br />
            <Link to="/Terms_And_Conditions">
                <button>
                    Go to terms and conditions
            </button>
            </Link>
        </div>
    )
}
