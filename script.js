function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*
  Content for the Experience, Skills, Projects, and Interests sections lives
  here as plain data. To add a new entry (a new job, a new project, a new
  skill, a new photo), add an object to the matching array below — no need
  to touch the HTML or copy/paste markup.
*/

const experienceData = [
  {
    icon: "data-engineer.png",
    title: "Michigan Center for Youth Justice (MCYJ)",
    meta: "Data Analyst | September 2025 - Present | Ann Arbor, MI",
    bullets: [
      "Developed NLP-based parsing pipelines to extract structured features from juvenile justice case reports.",
      "Processed and cleaned longitudinal and text-based juvenile justice data for analysis.",
      "Analyzed patterns in incidents and case outcomes to identify key trends over time.",
    ],
  },
  {
    icon: "manufacture.png",
    title: "Process Reasoning & Interpretable System for Manufacturing (PRISM)",
    meta: "Graduate Student Researcher (Data Scientist) | January 2026 - Present | Ann Arbor, MI",
    bullets: [
      "Develop interpretable neural network surrogate models for manufacturing systems using real-world data.",
      "Perform data preprocessing, exploratory analysis, and feature engineering to support AI modeling.",
      "Collaborate with the team to validate model behavior and interpret results.",
    ],
  },
  {
    icon: "research.png",
    title: "Intelligent Thought and Action Lab (THINC)",
    meta: "Undergraduate Student Researcher | February 2024 - September 2024 | Athens, GA",
    bullets: [
      "Curated a 6,000+ image dataset, enabling a YOLO model to achieve 99% object detection accuracy.",
      "Automated data workflows with 10+ Python scripts for camera calibration and data extraction.",
      "Integrated and fine-tuned YOLOv8 into the PrecisionSort software to drive continuous performance gains.",
    ],
  },
  {
    icon: "teach.png",
    title: "Office for Student Success and Achievement (OSSA)",
    meta: "Peer Tutor (Statistics / Computer Science / Mathematics) | January 2024 - May 2025 | Athens, GA",
    bullets: [
      "Provided constructive feedback and guided problem-solving in one-on-one and group Study Pod sessions.",
      "Mentored over 50 students in academic strategies, improving critical thinking and analytical skills.",
    ],
  },
  {
    icon: "datasci.png",
    title: "Data Science & Artificial Intelligence Camp (Statistics Department)",
    meta: "Student Assistant | July 2024 | Athens, GA",
    bullets: [
      "Guided 30 students through hands-on data science and coding activities, providing troubleshooting and mentorship.",
      "Assisted instructors with classroom management and fostered collaboration.",
    ],
  },
  {
    icon: "golf.png",
    title: "U.S. Kids Golf",
    meta: "Volunteer | May 2021 - July 2025 | Little Rock, AR",
    bullets: [
      "Streamlined tournaments for 80+ players by managing registration, awards, and score tracking.",
      "Coordinated daily logistics to support staff and enhance the experience for attendees.",
    ],
  },
];

const skillsData = [
  {
    category: "Programming",
    items: [
      { name: "Python", years: "4 yrs" },
      { name: "R", years: "4 yrs" },
      { name: "SQL", years: "3 yrs" },
      { name: "Java", years: "4 yrs" },
    ],
  },
  {
    category: "Tools & Libraries",
    items: [
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Git/GitHub" },
      { name: "Excel & Power BI" },
    ],
  },
  {
    category: "Data Science & ML",
    items: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Computer Vision" },
      { name: "Data Visualization" },
      { name: "Predictive Modeling" },
    ],
  },
  {
    category: "Relevant Coursework",
    items: [
      { name: "Data Science I & II" },
      { name: "Data Mining" },
      { name: "Statistical Inference & Regression" },
      { name: "Artificial Intelligence & NLP" },
    ],
  },
];

const projectsData = [
  {
    img: "project-1.png",
    alt: "Addressing Data Imbalance Project",
    title: "Addressing Data Imbalance: Upsampling vs. Downsampling on Sport Images",
    github: "https://www.github.com",
    demo: "https://www.youtube.com",
  },
  {
    img: "project-2.png",
    alt: "Urban Heat Island Prediction Project",
    title: "Urban Heat Island (UHI) Prediction Project",
    github: "https://www.github.com",
    demo: "https://www.youtube.com",
  },
  {
    img: "project-3.png",
    alt: "Stock Market Time Series Forecasting Project",
    title: "Stock Market Time Series Forecasting",
    github: "https://www.github.com",
    demo: "https://www.youtube.com",
  },
  {
    img: "project-4.png",
    alt: "F-1 Racing Project",
    title: "F-1 Racing",
    github: "https://www.github.com",
    demo: "https://www.youtube.com",
  },
];

const interestsData = [
  { img: "zz_interest1.jpg", alt: "Interest 1" },
  { img: "zz_interest2.jpg", alt: "Interest 2" },
  { img: "zz_interest3.jpg", alt: "Interest 3" },
  { img: "zz_interest4.jpg", alt: "Interest 4" },
  { img: "zz_interest5.jpg", alt: "Interest 5" },
  { img: "zz_interest6.jpg", alt: "Interest 6" },
  { img: "zz_interest7.jpg", alt: "Interest 7" },
  { img: "zz_interest8.jpg", alt: "Interest 8" },
];

function renderExperience() {
  const container = document.getElementById("experience-list");
  if (!container) return;
  container.innerHTML = experienceData
    .map(
      (job) => `
      <div class="experience-card reveal">
        <img src="./assets/${job.icon}" alt="Experience icon" class="icon" />
        <div class="experience-content">
          <h3>${job.title}</h3>
          <span>${job.meta}</span>
          <ul>
            ${job.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      </div>`
    )
    .join("");
}

function renderSkills() {
  const container = document.getElementById("skills-list");
  if (!container) return;
  container.innerHTML = skillsData
    .map(
      (group) => `
      <div class="skills-container reveal">
        <h2>${group.category}</h2>
        <div class="article-container">
          ${group.items
            .map(
              (item) => `
            <article>
              <img src="./assets/checkmark.png" class="icon" alt="" />
              <div><h3>${item.name}</h3>${item.years ? `<p>${item.years}</p>` : ""}</div>
            </article>`
            )
            .join("")}
        </div>
      </div>`
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("project-list");
  if (!container) return;
  container.innerHTML = projectsData
    .map(
      (project) => `
      <div class="project-card reveal">
        <img src="./assets/${project.img}" alt="${project.alt}" class="project-img" loading="lazy" />
        <h2 class="project-title">${project.title}</h2>
        <div class="btn-container">
          <button class="btn btn-color-2" onclick="window.open('${project.github}')">GitHub</button>
          <button class="btn btn-color-2" onclick="window.open('${project.demo}')">Live Demo</button>
        </div>
      </div>`
    )
    .join("");
}

function renderInterests() {
  const container = document.getElementById("interests-list");
  if (!container) return;
  container.innerHTML = interestsData
    .map(
      (interest) => `
      <img
        src="./assets/${interest.img}"
        alt="${interest.alt}"
        class="interest-img reveal"
        loading="lazy"
      />`
    )
    .join("");
}

function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderExperience();
  renderSkills();
  renderProjects();
  renderInterests();
  initScrollReveal();
});
