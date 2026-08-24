import { skills } from "../src/data/skills";
import { experience } from "../src/data/experience";
import { projects } from "../src/data/projects";

(function () {
  "use strict";

  if (
    !navigator.modelContext ||
    typeof navigator.modelContext.provideContext !== "function"
  ) {
    console.warn("WebMCP API not available.");
    return;
  }

  const PORTFOLIO_DATA = {
    about: {
      name: "Alberto Mateo",
      title: "Frontend Developer",
      specialization: "JavaScript, TypeScript, performance, and clean UI",
      bio: "Frontend Developer with over 8 years of experience specializing in JavaScript, TypeScript, and modern frameworks like Vue.js and React.",
    },
    contact: {
      email: "amateo1982@yahoo.es",
      github: "https://github.com/amateo82",
      linkedin: "https://linkedin.com/in/amateo82",
    },
  };

  function getPortfolioInfo(section) {
    if (section && PORTFOLIO_DATA[section]) {
      return PORTFOLIO_DATA[section];
    }
    return {
      name: PORTFOLIO_DATA.about.name,
      title: PORTFOLIO_DATA.about.title,
      specialization: PORTFOLIO_DATA.about.specialization,
      skills: skills.slice(0, 10),
      experience: experience.length,
      projects: projects.length,
    };
  }

  function searchProjects(filters) {
    let results = projects;

    if (filters.tech) {
      const techLower = filters.tech.toLowerCase();
      results = results.filter(function (project) {
        return project.technologies.some(function (tech) {
          return tech.toLowerCase().includes(techLower);
        });
      });
    }

    if (filters.category) {
      results = results.filter(function (project) {
        return (
          project.category.toLowerCase() === filters.category.toLowerCase()
        );
      });
    }

    if (filters.keyword) {
      const keywordLower = filters.keyword.toLowerCase();
      results = results.filter(function (project) {
        return (
          project.name.toLowerCase().includes(keywordLower) ||
          project.description.toLowerCase().includes(keywordLower)
        );
      });
    }

    return results;
  }

  function getContactInfo(type) {
    if (type === "email") {
      return { email: PORTFOLIO_DATA.contact.email };
    }
    if (type === "social") {
      return {
        github: PORTFOLIO_DATA.contact.github,
        linkedin: PORTFOLIO_DATA.contact.linkedin,
      };
    }
    return PORTFOLIO_DATA.contact;
  }

  const tools = [
    {
      name: "get_portfolio_info",
      description:
        "Retrieve information about the developer, including biography, skills, work experience, and projects.",
      inputSchema: {
        type: "object",
        properties: {
          section: {
            type: "string",
            enum: ["about", "skills", "experience", "projects", "contact"],
            description:
              "Specific section of the portfolio to retrieve. If omitted, returns a summary.",
          },
        },
        required: [],
      },
      execute: function (input) {
        try {
          const section = input && input.section;
          const data = getPortfolioInfo(section);
          return Promise.resolve({
            success: true,
            data: data,
            section: section || "summary",
          });
        } catch (error) {
          return Promise.resolve({
            success: false,
            error: error.message,
          });
        }
      },
    },
    {
      name: "search_projects",
      description:
        "Search portfolio projects by technology, category, or keyword.",
      inputSchema: {
        type: "object",
        properties: {
          tech: {
            type: "string",
            description: "Technology to filter by (e.g., React, Vue, Rust)",
          },
          category: {
            type: "string",
            enum: ["web", "mobile", "desktop", "tools"],
            description: "Project category to filter by",
          },
          keyword: {
            type: "string",
            description: "Keyword to search in project names and descriptions",
          },
        },
        required: [],
      },
      execute: function (input) {
        try {
          const results = searchProjects(input || {});
          return Promise.resolve({
            success: true,
            results: results,
            count: results.length,
            query: input || {},
          });
        } catch (error) {
          return Promise.resolve({
            success: false,
            error: error.message,
          });
        }
      },
    },
    {
      name: "get_contact_info",
      description:
        "Retrieve the developer's contact information including email and social media links.",
      inputSchema: {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["email", "social", "all"],
            description:
              "Type of contact information to retrieve. Defaults to 'all'.",
          },
        },
        required: [],
      },
      execute: function (input) {
        try {
          const type = (input && input.type) || "all";
          const data = getContactInfo(type);
          return Promise.resolve({
            success: true,
            data: data,
            type: type,
          });
        } catch (error) {
          return Promise.resolve({
            success: false,
            error: error.message,
          });
        }
      },
    },
  ];

  navigator.modelContext
    .provideContext(tools)
    .then(function () {
      console.log("WebMCP: 3 tools registered successfully on amateo82.es");
    })
    .catch(function (error) {
      console.error("WebMCP: Error registering tools:", error);
    });
})();
