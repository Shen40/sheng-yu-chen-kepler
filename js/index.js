
//footer
const body = document.body;
const footer = document.createElement("footer");
document.body.appendChild(footer);

let today = new Date(); 
let thisYear = today.getFullYear();

const copyRights = document.createElement("p")
copyRights.innerHTML="&copy; Sheng-Yu Chen "+thisYear; 
footer.appendChild(copyRights); 

//skills
const skills = ["JavaScript", "HTML", "CSS", "Java", "GitHub"];
const skillSections = document.getElementById("Skills");
const skillsList = skillSections.querySelector("ul");

for(let i=0;i<skills.length;i++){
    let skill = document.createElement("li")
    skill.textContent=skills[i];
    skillsList.appendChild(skill);
}

skillsList.style.display = "flex"; 
skillsList.style.gap = '20px'; 
