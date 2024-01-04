import React from 'react';
import Header from '../includes/Header';
import ProgressBar from '../includes/ProgressBar';
import '../css/disclaimer.css';
import '../css/style-skills.css';

function Skills() {
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
            <Header />
            <div className="content">
                <div className="container">
                    <h1>Self-assessed Skills</h1>
                </div>
                <div className="disclaimer">
                    <div className="container">
                        <h3 className="title">Disclaimer</h3>
                        <p className="text">
                            The self-assessed skill ratings provided on this site are based on
                            my personal evaluation and understanding of each skill. They are
                            intended to reflect my perceived proficiency and may vary in
                            interpretation.
                        </p>
                    </div>
                </div>
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
