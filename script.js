import { htmlProjects, cssProjects, showcaseProjects } from "./assets/data.js";

const htmlProjectsContainer = document.querySelector("#html .container");
const loadMoreHtmlProjectsBtn = document.querySelector("#html button");
const cssProjectsContainer = document.querySelector("#css .container");
const loadMoreCssProjectsBtn = document.querySelector("#css button");
const showcaseProjectsContainer = document.querySelector(
  "#showcase .container",
);
const loadMoreShowcaseProjectsBtn = document.querySelector("#showcase button");

let numberOfCards = 5;

// responsive card count
const setNumberOfCards = () => {
  if (window.innerWidth < 550) {
    numberOfCards = 3;
  } else if (window.innerWidth < 800) {
    numberOfCards = 4;
  } else {
    numberOfCards = 5;
  }
};
setNumberOfCards();
window.addEventListener("resize", setNumberOfCards);

// render cards
const showCards = (projectList, element, start, end) => {
  projectList.slice(start, end).forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${project.name}</h3>
      <iframe src="${project.src}" width="100%" height="200"></iframe>
      <p>${project.description}</p>
      <a target="_blank" href="${project.src}">View Project</a>
    `;
    element.appendChild(card);
  });
};

// hide button when all projects are shown
const updateButtonVisibility = (projectList, count, button) => {
  if (count >= projectList.length) {
    button.style.display = "none";
  }
};

// reusable setup function
const setupCategory = (projects, container, button) => {
  let initialCount = 0;
  let finalCount = numberOfCards;

  showCards(projects, container, initialCount, finalCount);
  updateButtonVisibility(projects, finalCount, button);

  button.addEventListener("click", () => {
    [initialCount, finalCount] = [finalCount, finalCount + numberOfCards];
    showCards(projects, container, initialCount, finalCount);
    updateButtonVisibility(projects, finalCount, button);
  });
};

// initialize all categories
setupCategory(htmlProjects, htmlProjectsContainer, loadMoreHtmlProjectsBtn);
setupCategory(cssProjects, cssProjectsContainer, loadMoreCssProjectsBtn);
setupCategory(
  showcaseProjects,
  showcaseProjectsContainer,
  loadMoreShowcaseProjectsBtn,
);
