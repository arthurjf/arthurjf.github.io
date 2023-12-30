import React from 'react';
import Header from '../includes/Header';
import '../css/disclaimer.css';

function Skills() {
    return (
        <div>
            <Header />
            <div className="content">
                <div className="container">
                    <h1>Self-assessed Skills</h1>
                </div>
                <div className="disclaimer">
                    <div className="container">
                        <h3 className="title">Disclaimer</h3>
                        <p className="text">The self-assessed skill ratings provided on this site are based on my personal evaluation and understanding of each skill. They are intended to reflect my perceived proficiency and may vary in interpretation.</p>
                    </div>
                </div>
            </div>
            <div className="container content">
            </div>
        </div>
    );
};

export default Skills;