import React from 'react';
import '../css/disclaimer.css';

function Header({ description, additionalContainerTags }) {
    return (
        <div className="disclaimer">
            <div className="container">
                <div className={additionalContainerTags}>
                    <h3 className="title">Disclaimer</h3>
                    <p className="text">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;
