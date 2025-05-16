
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
skillsList.style.gap = '50px'; 

//message
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

//Projects
fetch('https://api.github.com/users/Shen40/repos')
    .then(response => {
        return response.text(); 
  })
    .then(text => {
    const repo = JSON.parse(text);
    console.log(repo);
    const projectSection = document.querySelector("#Projects");
    const projectList = projectSection.querySelector("ul");
    for(let i=0;i<repo.length;i++){
    let project = document.createElement("li"); 
    project.innerText = repo[i].name; 
    projectList.appendChild(project); 
  }
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
  });

