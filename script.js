// ===========================
// DARK MODE TOGGLE
// ===========================
const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// ===========================
// EDIT JOB TITLE FEATURE
// ===========================
const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.querySelector(".job-title");

if (localStorage.getItem("jobTitle")) {
    jobTitle.textContent = localStorage.getItem("jobTitle");
}

editJobBtn.addEventListener("click", () => {
    const newTitle = prompt("Enter your new job title:", jobTitle.textContent);
    if (newTitle !== null && newTitle.trim() !== "") {
        jobTitle.textContent = newTitle.trim();
        localStorage.setItem("jobTitle", newTitle.trim());
        alert("Job title updated!");
    }
});

// ===========================
// SHOW/HIDE SKILLS FEATURE
// ===========================
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.textContent = skillsSection.classList.contains("hidden") ? "Show Skills" : "Hide Skills";

toggleSkillsBtn.addEventListener("click", () => {
    skillsSection.classList.toggle("hidden");
    toggleSkillsBtn.textContent = skillsSection.classList.contains("hidden") ? "Show Skills" : "Hide Skills";
});

// ===========================
// LIVE CHARACTER COUNTER
// ===========================
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.addEventListener("input", () => {
    const remaining = msgBox.maxLength - msgBox.value.length;
    counter.textContent = remaining;

    if (remaining <= 20) {
        counter.classList.add("highlight");
    } else {
        counter.classList.remove("highlight");
    }
});

// ===========================
// DISPLAY TODAY'S DATE IN FOOTER
// ===========================
const currentDateSpan = document.getElementById("currentDate");

const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
currentDateSpan.textContent = today.toLocaleDateString(undefined, options);

// ===========================
// MOTIVATIONAL QUOTE GENERATOR
// ===========================
const quotes = [
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Dream big and dare to fail.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones."
];

const quoteDisplay = document.getElementById("quoteDisplay");
const quoteBtn = document.getElementById("quoteBtn");

quoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
});

// ===========================
// FORM VALIDATION BEFORE SUBMIT
// ===========================
const messageForm = document.querySelector(".message-form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");

messageForm.addEventListener("submit", (e) => {
    const name = nameField.value.trim();
    const email = emailField.value.trim();

    if (name === "" || email === "") {
        alert("Please fill in both Name and Email before sending.");
        e.preventDefault(); // stop form submission
        return false;
    }
});
