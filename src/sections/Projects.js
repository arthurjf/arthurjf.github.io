import React from 'react';
import Header from '../includes/Header';
import '../css/style-skills.css';
import '../css/projects.css';
import { Link } from 'react-router-dom';

const skillsData = [
    { name: 'Unity' },
    { name: 'C# (Unity)' },
    { name: 'Blender (3D Modeling)' },
    { name: 'Git' },
    { name: 'Python' },
    { name: 'Unreal Engine' },
    { name: 'C++ (Unreal Engine)' },
    { name: 'Scrum' },
    { name: '3ds Max (3D Modeling)' },
];

const ProjectCard = ({ imageUrl, title, description, skills, date }) => {
    return (
        <Link to="/projects/transitcourse" className="card card-button mt-4 project">
            <img src={imageUrl} className="card-img-top" alt="Project" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text date">{date}</p>
                <ul className="skills">
                    {skills.map((skill, index) => (
                        <li key={index}>
                            {skill.name}
                        </li>
                    ))}
                </ul>
                <p className="card-text description">{description}</p>
            </div>
        </Link>
    );
};

const Projects = () => {
    const projectData = [
        {
            imageUrl: './res/img/projects/transitcourse.png',
            title: 'Transit Course',
            description: 'I crafted a game using Unity and 3ds Max, acquiring skills in project structuring, best organizational practices, and flexibility.',
            skills: [skillsData[0], skillsData[1], skillsData[3], skillsData[8]],
            date: 'out 2021 - jan 2022',
        },
        {
            imageUrl: './res/img/projects/desafiodaforca.png',
            title: 'Desafio da Forca',
            description: 'Developed a hangman game for Android apps, featuring preset word categories and the thrilling option to create custom games.',
            skills: [skillsData[0], skillsData[1], skillsData[3]],
            date: 'jul 2023 - jul 2023',
        },
        {
            imageUrl: './res/img/projects/encaixandomatematica.png',
            title: 'Encaixando Matemática',
            description: 'Developed an educational game as part of my Thesis focused on math learning.',
            skills: [skillsData[0], skillsData[1], skillsData[3]],
            date: 'jul 2023 - dez 2023',
        },
    ];

    return (
        <div>
            <Header />
            <div className="container content">
                <h1>Projects</h1>

                <p>These are the projects I have worked on or am currently working on.</p>

                <hr></hr>

                <h2>Published Projects</h2>
                <div className="row">
                    {projectData.map((project, index) => (
                        <div key={index} className="col-lg-4 mb-4">
                            <ProjectCard
                                imageUrl={project.imageUrl}
                                title={project.title}
                                description={project.description}
                                skills={project.skills}
                                date={project.date}
                            />
                        </div>
                    ))}
                </div>

                {/*<hr></hr>
                
                <h2>Abandoned Projects</h2>*/}
            </div>
        </div>
    );
};

export default Projects;
