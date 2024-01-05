import React from 'react';
import Header from '../../../includes/Header';
import { Link } from 'react-router-dom';

function TransitCourse() {
    return (
        <div>
            <Header />
            <div className="container content d-flex flex-column justify-content-center align-items-center p-5">
                <h1 className="text-center">🔨 Area under development 🔨</h1>
                <p className="text-center p-5">But you can check other things like</p>
                <div className="d-flex justify-content-center">
                    <Link className="btn btn-primary m-2" to="/about">About Me</Link>
                    <Link className="btn btn-primary m-2" to="/skills">Skills</Link>
                </div>
            </div>
        </div>
    );
};

export default TransitCourse;
