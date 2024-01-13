import React from 'react';
import ProgressBar from '../includes/ProgressBar';
import '../css/style-skills.css';
import Disclaimer from '../includes/Disclaimer';
import { useTranslation } from 'react-i18next';

function Skills() {
    const { t } = useTranslation("global");

    const skillsData = [
        { skill: 'C# (Unity)', value: 90 },
        { skill: 'Unity', value: 90 },
        { skill: 'Blender (3D Modeling)', value: 80 },
        { skill: 'Git', value: 90 },
        { skill: 'Python', value: 50 },
        { skill: 'Unreal Engine', value: 5 },
        { skill: 'C++ (Unreal Engine', value: 5 },
        { skill: 'Scrum', value: 30 },
        { skill: 'React', value: 10 },
    ];

    return (
        <div>
            <div className="content">
                <div className="container">
                    <h1>{t("skills.title")}</h1>
                </div>
                <Disclaimer description={t("skills.disclaimer.description")} />
            </div>
            <div className="container content">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-level">
                        <div className="title">{skill.skill}</div>
                        <ProgressBar fillValue={skill.value} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
