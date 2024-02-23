// ProjectCard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlaceholderImage from './PlaceholderImage';
import '../css/style-skills.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useTranslation } from 'react-i18next';

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

const ProjectCard = ({ imageUrl, title, description, startDate, finishDate, highlightedIcons, linkurl }) => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {storeIcons[props.icon].name}
        </Tooltip>
    );

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
            setIsLoading(false);
        };
    }, [imageUrl]);

    const { t, i18n } = useTranslation("global");

    const formatDate = (startDate, finishDate) => {
        const options = { month: 'short', year: 'numeric' };
        const formattedStartDate = new Date(startDate).toLocaleDateString(i18n.language, options);
        const formattedFinishDate = new Date(finishDate).toLocaleDateString(i18n.language, options);

        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        const formattedStartDateManual = capitalize(formattedStartDate.replace('.', ''));
        const formattedFinishDateManual = capitalize(formattedFinishDate.replace('.', ''));

        return `${formattedStartDateManual} - ${formattedFinishDateManual}`;
    };

    return (
        <Link to={"/projects/" + linkurl} className="card mt-4 project">
            {isLoading ? (
                <PlaceholderImage alt="Project" />
            ) : (
                <img src={imageUrl} className="card-img-top p-3" alt="Project" />
            )}
            <div className="card-body">
                <h5 className="card-title text-primary">{title}</h5>
                <p className="card-text date">{formatDate(startDate, finishDate)}</p>
                <p className="card-text description text-justify">{t(description)}</p>
                <div className="highlighted-icons">
                    {highlightedIcons.map((icon, index) => (
                        <OverlayTrigger
                            key={index}
                            placement="top"
                            delay={{ show: 100, hide: 50 }}
                            overlay={renderTooltip({ icon })}
                        >
                            <i key={index} className={`store-icon ${storeIcons[icon].tag}`} />
                        </OverlayTrigger>
                    ))}
                </div>
            </div>
        </Link>
    );
}


export default ProjectCard;
