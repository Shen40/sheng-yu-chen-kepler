const body = document.body;
const footer = document.createElement("footer");
document.body.appendChild(footer);

let today = new Date(); 
let thisYear = today.getFullYear();

const copyRights = document.createElement("p")
copyRights.innnerHTML="&copy; Sheng-Yu Chen "+thisYear; 
document.footer.appendChild(copyRights); 
