import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlaceholderImage from './PlaceholderImage'; // Importe o componente de placeholder
import '../css/style-skills.css';

const storeIcons = {
    googleplay: {
        name: 'Google Play',
        tag: 'bi bi-google-play',
    },
    android: {
        name: 'Android',
        tag: 'bi bi-android2',
    },
    steam: {
        name: 'Steam',
        tag: 'bi bi-steam',
    },
    windows: {
        name: 'Windows',
        tag: 'bi bi-windows',
    },
    unity: {
        name: 'Unity',
        tag: 'bi bi-unity',
    },
};

const ProjectCard = ({ imageUrl, title, description, date, highlightedIcons, linkurl }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
            setIsLoading(false);
        };
    }, [imageUrl]);

    return (
        <Link to={"/projects/" + linkurl} className="card mt-4 project">
            {isLoading ? (
                <PlaceholderImage alt="Project" />
            ) : (
                <img src={imageUrl} className="card-img-top p-3" alt="Project" />
            )}
            <div className="card-body">
                <h5 className="card-title text-primary">{title}</h5>
                <p className="card-text date">{date}</p>
                <p className="card-text description text-justify">{description}</p>
                <div className="highlighted-icons">
                    {highlightedIcons.map((icon, index) => (
                        <i key={index} className={`store-icon ${storeIcons[icon].tag}`} title={storeIcons[icon].name} />
                    ))}
                </div>
            </div>
        </Link>
    );    
};

export default ProjectCard;
