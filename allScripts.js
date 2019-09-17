async function init() {
  let issues = new Issues();
  await issues.getIssuesFromFile();
  let data = issues.getAll();
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
function generateForm() {
  document.getElementById("modalInfo").innerHTML =
    '<div class="customForm">' +
    '<div class="form-group">' + '<label for="issueId">' + 'Issue ID' + '</label>' +
    '<input type="text" class="form-control" id="issueIdInput" placeholder="ID number">' +
    '</div>' +
    '<div class="form-group">' + '<label for="issueName">' + 'Name the Issue' + '</label>' +
    '<input type="text" class="form-control" id="issueNameInput" placeholder="Name">' +
    '</div>' +
    '<div class="form-group">' + '<label for="issueType">' + 'Type of Issue' + '</label>' +
    '<input type="text" class="form-control" id="issueTypeInput" placeholder="Issue Type">' +
    '</div>' +
    `<div class="form-group">
    <label for="issuesDes">Describe the Issue</label>
    <textarea class="form-control" placeholder="Please describe the issue" id="issuesDesInput" rows="3"></textarea>
    </div>` +
    '</div>' +
    '<div class="form-group">' + '<label for="issuesLoc">' + 'Where did you find the issue?' + '</label>' +
    '<input type="text" class="form-control" id="issuesLocInput" placeholder="Location">' +
    '</div>' +
    `<div class="form-group">
    <label for="issuesCom">Comments</label>
    <textarea class="form-control" placeholder="Any Comments?" id="issuesComInput" rows="3"></textarea>
    </div>` +
    '<div class="form-group">' + '<label for="issueStat">' + 'Status of the issue?' + '</label>' +
    '<input type="text" class="form-control" id="issueStatInput" placeholder="Status">' +
    '</div>' +
    '</div>';
  var btn = document.getElementById("submitBtn");
  btn.className = "btn btn-primary";
  btn.innerHTML = "Save";
}
async function addIssue() {
  document.getElementById("editModalTitle").innerHTML = "Please input what you want to ADD";
  generateForm();
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
    console.log(
    (JSON.stringify(issue)));
  };
  // newIssue = "some data";
  issues.add(/*new issue*/); //will pass the new issue to the JSON file
}
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
  * @param {jsonObject} jsonObject    Sends the JSON file
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