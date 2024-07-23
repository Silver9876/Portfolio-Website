import React from 'react'
import { Progress } from "@material-tailwind/react";
import './Skillsstyle.css'

const SkillLeft = () => {
  return (
    <div className="lg:flex w-full justify-center">
        <div className="left lg:w-[45%]">
        <div class="container2 w-full flex flex-col my-20">
        <div class="skill-box ">
            <span class="title">HTML</span>
            <div class="skill-bar">
                <span class="skill-per html">
                    <span class="tooltip">90%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">CSS</span>
            <div class="skill-bar">
                <span class="skill-per css ">
                    <span class="tooltip">70%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">JavaScript</span>
            <div class="skill-bar">
                <span class="skill-per javascript">
                    <span class="tooltip">60%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">React</span>
            <div class="skill-bar">
                <span class="skill-per">
                    <span class="tooltip">90%</span>
                </span>
            </div>
        </div>
    </div>
        </div>

        <div className="right lg:w-[45%]">
        <div class="container2 w-full flex flex-col lg:my-20">
        <div class="skill-box ">
            <span class="title">Python</span>
            <div class="skill-bar">
                <span class="skill-per html">
                    <span class="tooltip">90%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">Django</span>
            <div class="skill-bar">
                <span class="skill-per css ">
                    <span class="tooltip">70%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">Tailwind css</span>
            <div class="skill-bar">
                <span class="skill-per javascript">
                    <span class="tooltip">60%</span>
                </span>
            </div>
        </div>
    </div>
        </div>
    </div>
        )
}

export default SkillLeft
 