/************ Show / Hide Sections ************/
function showSection(id) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display = "none"); // Hide all
    document.getElementById(id).style.display = "block"; // Show selected
}

/************ Resume Checker ************/
function checkResume() {
    let items = document.querySelectorAll(".r");
    let total = items.length;
    let done = 0;
    items.forEach(i => { if(i.checked) done++; });
    let percent = Math.round((done / total) * 100);
    document.getElementById("out").innerText = "Resume Ready: " + percent + "%";
}

/************ CGPA Calculator ************/
function addCourse() {
    let container = document.getElementById("courses");
    let div = document.createElement("div");
    div.className = "course";
    div.innerHTML = `
        <input type="text" placeholder="Course Name">
        <input type="number" placeholder="Credit" min="1">
        <input type="number" placeholder="Grade (0-4)" step="0.01" min="0" max="4">
    `;
    container.appendChild(div);
}

function calcCGPA() {
    let courseDivs = document.querySelectorAll("#courses .course");
    let totalCredits = 0;
    let totalPoints = 0;

    courseDivs.forEach(div => {
        let credit = parseFloat(div.children[1].value);
        let grade = parseFloat(div.children[2].value);
        if (!isNaN(credit) && !isNaN(grade)) {
            totalCredits += credit;
            totalPoints += grade * credit;
        }
    });

    if(totalCredits === 0) {
        document.getElementById("cgpaResult").innerText = "Enter at least one valid course";
        return;
    }

    let gpa = totalPoints / totalCredits;
    document.getElementById("cgpaResult").innerText = "Your GPA: " + gpa.toFixed(2);
}

/************ Skill Tracker ************/
const careerSkills = {
    software: ["C / C++", "OOP", "Data Structures", "Git & GitHub"],
    data: ["Python", "SQL", "Statistics", "Machine Learning"],
    web: ["HTML/CSS", "JavaScript", "React", "Git & GitHub"]
};

function loadSkills() {
    let goal = document.getElementById("careerGoal").value;
    let container = document.getElementById("skillOptions");
    container.innerHTML = ""; // clear previous skills
    if(!goal) return;

    careerSkills[goal].forEach(skill => {
        let label = document.createElement("label");
        label.innerHTML = `<input type="checkbox" class="s"> ${skill}`;
        container.appendChild(label);
        container.appendChild(document.createElement("br"));
    });
}

function checkSkills() {
    let items = document.querySelectorAll("#skillOptions .s");
    let total = items.length;
    let done = 0;
    items.forEach(i => { if(i.checked) done++; });
    let percent = total ? Math.round((done / total) * 100) : 0;
    document.getElementById("skillResult").innerText = "Skills Completed: " + percent + "%";
}

/************ Internship Tracker ************/
let internships = [];
function addInternship() {
    let company = document.getElementById("company").value;
    let position = document.getElementById("position").value;
    if(company && position) {
        internships.push(company + " - " + position);
        document.getElementById("internshipList").innerHTML = internships.join("<br>");
        document.getElementById("company").value = "";
        document.getElementById("position").value = "";
    } else {
        alert("Enter both Company and Position");
    }
}

/************ Deadline & Stress Manager ************/
let tasks = [];
function addDeadline() {
    let task = document.getElementById("task").value;
    if(task) {
        tasks.push(task);
        document.getElementById("deadlineList").innerHTML = tasks.join("<br>");
        document.getElementById("task").value = "";
    } else {
        alert("Enter a task");
    }
}