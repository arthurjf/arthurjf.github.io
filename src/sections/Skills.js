import React from 'react';
import ProgressBar from '../includes/ProgressBar';
import '../css/style-skills.css';
import Disclaimer from '../includes/Disclaimer';
import { useTranslation } from 'react-i18next';

function getSkillLevel(value, t) {
    if (value >= 80) {
        return t("skills.level.advanced");
    } else if (value >= 50) {
        return t("skills.level.intermediate");
    } else {
        return t("skills.level.beginner");
    }
}

function Skills() {
    const { t } = useTranslation("global");

    const skillsData = [
        { skill: 'C# (Unity)', value: 82 },
        { skill: 'Unity', value: 80 },
        { skill: 'Blender (3D Modeling)', value: 70 },
        { skill: 'Git', value: 85 },
        { skill: 'Python', value: 40 },
        { skill: 'Unreal Engine', value: 4 },
        { skill: 'C++ (Unreal Engine)', value: 4 },
        { skill: 'Scrum', value: 20 },
        { skill: 'React', value: 15 },
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
                        <div className="title"><strong>{skill.skill}</strong> • {getSkillLevel(skill.value, t)}</div>
                        <ProgressBar fillValue={skill.value} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
