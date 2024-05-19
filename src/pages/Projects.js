import React from "react";

const projects = [
  {
    title: "Project One",
    description: "A brief description of project one.",
    imageUrl: "/path-to-your-image1.jpg",
    projectUrl: "https://github.com/yourprofile/project-one",
    technologies: ["React", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    imageUrl: "/path-to-your-image2.jpg",
    projectUrl: "https://github.com/yourprofile/project-two",
    technologies: ["Vue", "Vuetify", "Firebase"],
  },
  {
    title: "Project Three",
    description: "A brief description of project three.",
    imageUrl: "/path-to-your-image3.jpg",
    projectUrl: "https://github.com/yourprofile/project-three",
    technologies: ["Angular", "Bootstrap", "Express"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  className="w-full h-48 object-cover"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
