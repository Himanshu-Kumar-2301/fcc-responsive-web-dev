const htmlProjects = [
  {
    name: "Fcc Curriculum Outline",
    description: "Description...",
    src: "./html-projects/basic-html/curriculum-outline.html",
  },
  {
    name: "Cat Photo App",
    description: "Description...",
    src: "./html-projects/basic-html/cat-photo-app.html",
  },
];
const cssProjects = [];
const showcaseProjects = [];

const htmlProjectsContainer = document.querySelector("#html .container");
const cssProjectsContainer = document.querySelector("#css .container");
const showcaseProjectsContainer = document.querySelector("#shocase .container");

let numberOfCards = 3;

if (window.innerWidth >= 550 && window.innerWidth <= 800) {
  numberOfCards = 4;
}

const showCards = (projectList, element) => {
  element.innerHTML = "";
  projectList.forEach((project) => {
    element.innerHTML += `<div class="card">
        <h3>${project.name}</h3>
        <iframe src="${project.src}" width="100%" height="200"></iframe>
        <p>${project.description}</p>
        <a target="_blank" href="${project.src}">View Project</a>
    </div>`;
  });
};

showCards(htmlProjects, htmlProjectsContainer);
