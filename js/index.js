
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

const messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", function(event){
    event.preventDefault();
    let userName = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;
    console.log(userName + " | " + email + " | " + message);
    const messageSection = document.querySelector("#messages")
    const messageList = messageSection.querySelector("ul")
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${userName}</a> <span>: ${message}</span>`;
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button"; 
    removeButton.addEventListener("click", function(event){
        const entry = event.target.parentNode;
        entry.remove();
    }); 
    newMessage.appendChild(removeButton); 
    messageList.appendChild(newMessage);
    messageForm.reset();
});