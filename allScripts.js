async function init() {
  let issues = new Issues();
  await issues.getIssuesFromFile('data.JSON');
  let data = issues.getAll();
  console.log(data);
  window.idata = data;
  
  localStorage.setItem('issues', JSON.stringify(data));
  data.forEach(data => {
    document.getElementById('tbody').innerHTML +=
      '<tr>' +
      '<td>' + data.id + '</td><td>' + data.name + '</td><td>' + data.type +
      '</td><td>' + data.description + '</td><td>' + data.location +
      '</td><td>' + data.comments + '</td><td>' + data.status +
      '</td><td>' + '<div class="btn-group" role="group" aria-label="edit/delete button">' +
      '<button type="button" class="btn btn-secondary" onclick="editIssue()" data-toggle="modal" data-target="#editModal">Edit</button>' +
      '<button type="button" class="btn btn-danger" onclick="deleteIssue()" data-toggle="modal" data-target="#editModal">Delete</button>' +
      '</div>' +
      '</td>' +
      '</tr>';
  });
}
init();
async function addIssue2() {
  document.getElementById("editModalTitle").innerHTML = "Please input what you want to ADD";
  generateForm();
  
  document.getElementById('submitBtn').onclick = function() { 
    let issue = {
      _id: document.getElementById('issueIdInput').value,
      name: document.getElementById('issueNameInput').value,
      type: document.getElementById('issueTypeInput').value,
      description: document.getElementById('issuesDesInput').value,
      location: document.getElementById('issuesLocInput').value,
      comments: document.getElementById('issuesComInput').value,
      status: document.getElementById('issueStatInput').value
    };
    pushData(issue);
  };
}
async function addIssue() {
  document.getElementById("editModalTitle").innerHTML = "Please input what you want to ADD";
  generateForm();
  let data = localStorage.getItem('issues');
  data = JSON.parse(data);
  window.idata = data;
  
  document.getElementById('submitBtn').onclick = function() { 
    let issue = {
      id: document.getElementById('issueIdInput').value,
      name: document.getElementById('issueNameInput').value,
      type: document.getElementById('issueTypeInput').value,
      description: document.getElementById('issuesDesInput').value,
      location: document.getElementById('issuesLocInput').value,
      comments: document.getElementById('issuesComInput').value,
      status: document.getElementById('issueStatInput').value
    };
    data.push(issue);
    console.log(data);
    localStorage.setItem('issues', JSON.stringify(data));
    init2();
  };
}

function init2(){
  newData = JSON.parse(localStorage.getItem('issues'));
  data.forEach(data => {
    document.getElementById('tbody').innerHTML +=
      '<tr>' +
      '<td>' + data.id + '</td><td>' + data.name + '</td><td>' + data.type +
      '</td><td>' + data.description + '</td><td>' + data.location +
      '</td><td>' + data.comments + '</td><td>' + data.status +
      '</td><td>' + '<div class="btn-group" role="group" aria-label="edit/delete button">' +
      '<button type="button" class="btn btn-secondary" onclick="editIssue()" data-toggle="modal" data-target="#editModal">Edit</button>' +
      '<button type="button" class="btn btn-danger" onclick="deleteIssue()" data-toggle="modal" data-target="#editModal">Delete</button>' +
      '</div>' +
      '</td>' +
      '</tr>';
  });
};  
  // var fs = require('fs');
  // fs.writeFile('myjsonfile.json', json, 'utf8', callback);






//  var json = JSON.stringify(obj);
 
async function editIssue() {
  document.getElementById("editModalTitle").innerHTML = "Please input what you want to EDIT";
  generateForm();
  let issues = new Issues();
  await issues.getIssuesFromFile();
  editedIssue = issues.get(/*Id to be sent here*/);
  issues.edit(editedIssue); //will pass the new issue to the edit method
}
async function deleteIssue() {
    console.log("deleted");
    document.getElementById("editModalTitle").innerHTML = "Warning";
    document.getElementById("modalInfo").innerHTML = "Are you sure you want to delete the Issue with ID?";
    var del = document.getElementById("submitBtn");
    del.className = "btn btn-danger";
    del.innerHTML = "Delete";
} 

















/** 
  ** function to get the specific table row info in modal 
  * @param {Object} jsonObject    Sends the JSON file
  * @param {Integer} id               Finds the the specific object by ID
  * @return {Object}                  Returns the found object
*/
function filterById(jsonObject, id) {
  return jsonObject.filter(function (jsonObject) {
    return (jsonObject['id'] == id);
  })[0];
}
/**
 ** A handler function to prevent default submission and run our custom script.
 * @param  {Event} event  the submit event triggered by the user
 * @return {void}
 */
const handleFormSubmit = event => {

  // Stop the form from submitting since we’re handling that with AJAX.
  event.preventDefault();

  // TODO: Call our function to get the form data.
  const data = {};

  // Demo only: print the form data onscreen as a formatted JSON object.
  const dataContainer = document.getElementsByClassName('results__display')[0];

  // Use `JSON.stringify()` to make the output valid, human-readable JSON.
  dataContainer.textContent = JSON.stringify(data, null, "  ");

  // ...this is where we’d actually do something with the form data...
};
const form = document.getElementsByClassName('customForm')[0];
form.addEventListener('submit', handleFormSubmit);
/**
 ** Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON = elements => [].reduce.call(elements, (data, element) => {

  data[element.name] = element.value;
  return data;

}, {});