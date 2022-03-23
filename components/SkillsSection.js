import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SectionSkills() {
  return (
    <div className="py-28 bg-primarygray">
      <div className="container mx-auto">
        <SectionTitle>Skills</SectionTitle>
        <SectionSubtitle>Beberapa Kemampuan Saya</SectionSubtitle>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="/javascript.svg"
               imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="React JS" level="Lanjutan" image="/react.svg" imageClassName="h-16" />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="NodeJs" level="Lanjutan" image="/nodejs.svg" imageClassName="h-16" />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="NodeJs" level="Lanjutan" image="/nodejs.svg" imageClassName="h-16" />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="/javascript.svg"
               imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="React JS" level="Lanjutan" image="/react.svg" imageClassName="h-16" />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="React JS" level="Lanjutan" image="/react.svg" imageClassName="h-16" />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="NodeJs" level="Lanjutan" image="/nodejs.svg" imageClassName="h-16" />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="/javascript.svg"
               imageClassName="h-16 rounded-full"
            />
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
