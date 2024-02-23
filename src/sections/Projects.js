import React, { useState } from 'react';
import ProjectCard from '../includes/ProjectCard';
import '../css/projects.css';
import '../css/search.css';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation("global");

    const projectData = [
        {
            imageUrl: './res/img/projects/transitcourse.png',
            title: 'Transit Course!',
            description: t("project.transitCourse.card.description"),
            date: t("project.transitCourse.card.date"),
            highlightedIcons: ['unity', 'android', 'googleplay'],
            linkurl: 'transitcourse',
        },
        {
            imageUrl: './res/img/projects/desafiodaforca.png',
            title: 'Desafio da Forca',
            description: t("project.desafioDaForca.card.description"),
            date: t("project.desafioDaForca.card.date"),
            highlightedIcons: ['unity', 'android', 'googleplay'],
            linkurl: 'desafiodaforca',
        },
        {
            imageUrl: './res/img/projects/encaixandomatematica.png',
            title: 'Encaixando Matemática',
            description: t("project.encaixandoMatematica.card.description"),
            date: t("project.encaixandoMatematica.card.date"),
            highlightedIcons: ['unity', 'android', 'googleplay'],
            linkurl: 'encaixandomatematica',
        },
        {
            imageUrl: './res/img/placeholder.png',
            title: 'Don\'t Pop It',
            description: "No description available yet.",
            date: 'jan 2024 - the moment',
            highlightedIcons: ['unity', 'android', 'googleplay'],
            linkurl: 'dontpopit',
        },
        {
            imageUrl: './res/img/placeholder.png',
            title: 'Hop Bricks',
            description: "No description available yet.",
            date: 'not initialized',
            highlightedIcons: ['unity', 'android', 'googleplay'],
            linkurl: 'hopbricks',
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filterProjectsByName = (projects) => {
        return projects.filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()));
    };

    const publishedProjects = [projectData[0], projectData[1], projectData[2]];
    const ongoingProjects = [projectData[3], projectData[4]];

    const renderProjects = (projects) => (
        <div className="row">
            {filterProjectsByName(projects).map((project, index) => (
                <div key={index} className="col-lg-4 mb-4">
                    <ProjectCard {...project} />
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <div className="container content">
                <h1>{t("projects.title")}</h1>
                <p>{t("projects.subtitle")}</p>
                <div class="mb-3 search">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon3"><bi className="bi bi-search"></bi></span>
                        <input
                            type="text"
                            class="form-control"
                            id="basic-url"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            aria-describedby="basic-addon3 basic-addon4"
                            placeholder={t("projects.search.placeholder")}></input>
                    </div>
                </div>
                <hr className="mb-5" />
                <section>
                    <h2>{t("projects.published.title")}</h2>
                    {renderProjects(publishedProjects)}
                </section>
                <hr className="mt-5 mb-5" />
                <section>
                    <h2>{t("projects.ongoing.title")}</h2>
                    {renderProjects(ongoingProjects)}
                </section>
            </div>
        </div>
    );
};

export default Projects;
