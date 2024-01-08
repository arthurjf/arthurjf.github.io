import React from 'react';
import Header from '../includes/Header';
import ProjectCard from '../includes/ProjectCard';
import '../css/projects.css';
import '../css/navbar-projects.css';

const Projects = () => {
    const projectData = [
        {
            imageUrl: './res/img/projects/transitcourse.png',
            title: 'Transit Course!',
            description: 'I crafted a game using Unity and 3ds Max, acquiring skills in project structuring, best organizational practices, and flexibility.',
            skills: ['Unity', 'C# (Unity)', 'Git', '3ds Max (3D Modeling)'],
            date: 'out 2021 - jan 2022',
            highlightedIcons: ['googleplay', 'android'],
            linkurl: 'transitcourse',
        },
        {
            imageUrl: './res/img/projects/desafiodaforca.png',
            title: 'Desafio da Forca',
            description: 'Developed a hangman game for Android apps, featuring preset word categories and the thrilling option to create custom games.',
            skills: ['Unity', 'C# (Unity)', 'Git'],
            date: 'jul 2023 - jul 2023',
            highlightedIcons: ['googleplay', 'android'],
            linkurl: 'desafiodaforca',
        },
        {
            imageUrl: './res/img/projects/encaixandomatematica.png',
            title: 'Encaixando Matemática',
            description: 'Developed an educational game as part of my Thesis focused on math learning.',
            skills: ['Unity', 'C# (Unity)', 'Git'],
            date: 'jul 2023 - dez 2023',
            highlightedIcons: ['googleplay', 'android'],
            linkurl: 'encaixandomatematica',
        },
        {
            imageUrl: './res/img/projects/dreamrooms.png',
            title: 'Dreamrooms',
            description: "No description available yet.",
            skills: ['Unity', 'C# (Unity)', 'Git', 'Blender'],
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
            <Header />
            <div className="container content">
                <h1>Projects</h1>
                <p>These are the projects I have worked on or am currently working on.</p>
                <hr className="mb-5" />
                <section>
                    <h2>Published Projects</h2>
                    {renderProjects(publishedProjects)}
                </section>
                <hr className="mt-5 mb-5" />
                <section>
                    <h2>Ongoing Projects 🔨</h2>
                    {renderProjects(ongoingProjects)}
                </section>
            </div>
        </div>
    );
};

export default Projects;
