import React from "react";
// import {CircularProgress} from "@nextui-org/progress";
import './Experience.css'
import SkillLeft from "./SkillLeft";
import SkillRight from "./SkillRight";

const Skill = () => {
  return (
    <div className="flex w-[90%] mt-28 h-screen">
            <SkillLeft />
            <SkillRight />
    </div>
  )
}

export default Skill
