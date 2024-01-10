import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style-skills.css';

const storeIcons = {
    googleplay: 'bi bi-google-play',
    android: 'bi bi-android2',
    steam: 'bi bi-steam',
    windows: 'bi bi-windows',
};

const ProjectCard = ({ imageUrl, title, description, skills, date, highlightedIcons, linkurl }) => {
    return (
        <Link to={"/projects/" + linkurl} className="card mt-4 project">
            <img src={imageUrl} className="card-img-top" alt="Project" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text date">{date}</p>
                <ul className="skills">
                    {skills.map((skill, index) => (
                        <li key={index}>
                            {skill}
                        </li>
                    ))}
                </ul>
                <p className="card-text description">{description}</p>
                <div className="highlighted-icons">
                    {highlightedIcons.map((icon, index) => (
                        <i key={index} className={`store-icon ${storeIcons[icon]}`} />
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;