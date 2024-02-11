import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlaceholderImage from './PlaceholderImage'; // Importe o componente de placeholder
import '../css/style-skills.css';

const storeIcons = {
    googleplay: 'bi bi-google-play',
    android: 'bi bi-android2',
    steam: 'bi bi-steam',
    windows: 'bi bi-windows',
    unity: 'bi bi-unity',
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
                        <i key={index} className={`store-icon ${storeIcons[icon]}`} title={icon} />
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
