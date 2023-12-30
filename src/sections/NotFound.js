import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../includes/Header';

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="container content">
                <h2>Sorry =(</h2>
                <p>That page cannot be found.</p>
                <Link className="btn btn-primary" to="/">Back to the homepage...</Link>
            </div>
        </div>
    );
}

export default NotFound;