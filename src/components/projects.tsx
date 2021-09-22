// eslint-disable-next-line
import { useState } from "react";
import ProjectCard from "./projectCard";

const getProjects = () => {
  let projects: any = [];
  for (let i = 0; i < 3; i++) {
    let project: any = {
      id: `${i}`,
      link: "",
      name: `Project ${i}`,
      thumbnail: "",
    };

    if (project.id !== "no id found...") projects.push(project);
  }
  return projects;
};

function Projects() {
  const [listProjects, setlistProjects] = useState(getProjects);

  console.log(listProjects);

  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="#Python">Python</a>
          </li>
          <li>
            <a href="#Javascipt">Javascipt</a>
          </li>
          <li>
            <a href="#CSharp">C#</a>
          </li>
          <li>
            <a href="#Django">Django</a>
          </li>
          <li>
            <a href="#React">React</a>
          </li>
          <li>
            <a href="#DotNet">.Net</a>
          </li>
        </ul>
      </div>
      <br />
      <div>
        {listProjects.length > 0 ? (
          listProjects.map((e: any) => {
            return <ProjectCard key={e.id} project={e} />;
          })
        ) : (
          <div className="my-24">
            <h1 className="text-3xl text-white bg-red-500 text-center">
              Error loading events
            </h1>
          </div>
        )}
      </div>
      <div>{/* Vertical Menu */}</div>
      <div>{/* Horizontal Menu */}</div>
    </div>
  );
}

export default Projects;
