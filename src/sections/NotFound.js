import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../includes/Header';
import '../css/notfound.css';

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="container content not-found">
                <h1 className="text-center title">404</h1>
                <h2 className="text-center subtitle">Not Found :(</h2>
                <p className="text-center">Sorry, we couldn't find this page. But don't worry, you can find plenty of other things on our <Link className="text-link" to="/">homepage</Link>.</p>
            </div>
        </div>
    );
}

export default NotFound;