import React from 'react';
import ProjectCard from '../includes/ProjectCard';
import '../css/projects.css';
import '../css/navbar-projects.css';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation("global");

    const projectData = [
        {
            imageUrl: './res/img/projects/transitcourse.png',
            title: 'Transit Course!',
            description: t("project.transitCourse.card.description"),
            skills: ['Unity', '3D', 'C# (Unity)', '3ds Max (3D Modeling)'],
            date: t("project.transitCourse.card.date"),
            highlightedIcons: ['googleplay', 'android'],
            linkurl: 'transitcourse',
        },
        {
            imageUrl: './res/img/projects/desafiodaforca.png',
            title: 'Desafio da Forca',
            description: t("project.desafioDaForca.card.description"),
            skills: ['Unity', '2D', 'C# (Unity)'],
            date: t("project.desafioDaForca.card.date"),
            highlightedIcons: ['googleplay', 'android'],
            linkurl: 'desafiodaforca',
        },
        {
            imageUrl: './res/img/projects/encaixandomatematica.png',
            title: 'Encaixando Matemática',
            description: t("project.encaixandoMatematica.card.description"),
            skills: ['Unity', '2D', 'C# (Unity)'],
            date: t("project.encaixandoMatematica.card.date"),
            highlightedIcons: ['googleplay', 'android'],
            linkurl: 'encaixandomatematica',
        },
        {
            imageUrl: './res/img/projects/dreamrooms.png',
            title: 'Dreamrooms',
            description: "No description available yet.",
            skills: ['Unity', '3D', 'C# (Unity)', 'Blender'],
            date: 'jan 2024 - the moment',
            highlightedIcons: ['steam', 'windows'],
            linkurl: 'dreamrooms',
        },
    ];

    const publishedProjects = [projectData[0], projectData[1], projectData[2]];
    const ongoingProjects = [projectData[3]];

    const renderProjects = (projects) => (
        <div className="row">
            {projects.map((project, index) => (
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
