import React from "react";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import ProjectItem from "./ProjectItem";

export default function ProjectSection() {
  return (
    <section className="py-28" id="projects">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Projects</SectionTitle>
        <SectionSubtitle>Beberapa proyek bikinan saya.</SectionSubtitle>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-6/12 w-full px-4 pb-8">
            <ProjectItem
              name="Hasten"
              description="Explorasi landing page"
              image="/hasten.png"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8">
            <ProjectItem
              name="Resources"
              description="Explorasi resources page"
              image="/resources.png"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
            <ProjectItem
              name="Resources"
              description="Explorasi resources page"
              image="/resources.png"
            />
          </div>
          <div className="md:w-6/12 w-full px-4">
            <ProjectItem
              name="Hasten"
              description="Explorasi landing page"
              image="/hasten.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
