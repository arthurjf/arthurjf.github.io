import React, { useState } from 'react';
import ProjectCard from '../includes/ProjectCard';
import { useTranslation } from 'react-i18next';
import projectsData from '../datas/projectsData.json';

import '../css/projects.css';
import '../css/search.css';

const Projects = () => {
    const { t } = useTranslation("global");
    const projectData = projectsData.projects;

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filterProjectsByName = (projects) => {
        return projects.filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()));
    };

    const sortProjectsByStartDateDescending = (projects) => {
        return projects.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    };

    const publishedProjects = sortProjectsByStartDateDescending([projectData[0], projectData[1], projectData[2]]);
    const ongoingProjects = sortProjectsByStartDateDescending([projectData[3], projectData[4]]);

    const renderProjects = (projects) => {
        const filteredProjects = filterProjectsByName(projects);

        if (filteredProjects.length === 0) {
            return (
                <div>
                    <p className="fst-italic">
                        <i className="bi bi-search"></i>{t("projects.search.noResults")}
                    </p>
                </div>
            );
        }

        return (
            <div className="row">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="col-lg-4 mb-4">
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="container content">
            <h1>{t("projects.title")}</h1>
            <p>{t("projects.subtitle")}</p>
            <div className="mb-3 search">
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">
                        <i className="bi bi-search"></i>
                    </span>
                    <input
                        type="search"
                        className="form-control"
                        id="basic-url"
                        value={searchTerm}
                        autoComplete="on"
                        onChange={handleSearchChange}
                        aria-describedby="basic-addon3 basic-addon4"
                        placeholder={t("projects.search.placeholder")}
                    ></input>
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
    );
};

export default Projects;
