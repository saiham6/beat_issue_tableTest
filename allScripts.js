let cdb = new clientDB();
async function init() {
  await cdb.getJSONdata("data.JSON");
  fileData = cdb.documents;
  console.log("======filedata=====");
  console.log(fileData);
  console.log("=========");

  // if (fileData !== dbData) {
  //   fileData.forEach(data => {
  //     cdb.pushData(data);
  //   });
  // }
  cdb.getAll(data => {
    cdb.dbDoc.forEach(data => {
      console.log("foreach");

      console.log(data);

      document.getElementById("tbody").innerHTML +=
        "<tr>" +
        "<td>" +
        data._id +
        "</td><td>" +
        data.name +
        "</td><td>" +
        data.type +
        "</td><td>" +
        data.description +
        "</td><td>" +
        data.location +
        "</td><td>" +
        data.comments +
        "</td><td>" +
        data.status +
        "</td>" +
        `<td>
            <div id="data-id-${data._id}" class="btn-group" role="group" aria-label="edit/delete button">
            <button type="button" class="btn btn-secondary" onclick="editIssue(${data._id})" data-toggle="modal" data-target="#editModal">Edit</button>
          <button type="button" class="btn btn-danger" onclick="deleteIssue(${data._id})" data-toggle="modal" data-target="#editModal">Delete</button>
          </td>
          </div>
          </tr>`;
    });
  });
  console.log("allscripts");

  console.log(cdb.dbDoc);
}
init();

async function addIssue() {
  document.getElementById("editModalTitle").innerHTML =
    "Please input what you want to ADD";
  generateForm();

  document.getElementById("submitBtn").onclick = function() {
    let issue = {
      _id: document.getElementById("issueIdInput").value,
      name: document.getElementById("issueNameInput").value,
      type: document.getElementById("issueTypeInput").value,
      description: document.getElementById("issuesDesInput").value,
      location: document.getElementById("issuesLocInput").value,
      comments: document.getElementById("issuesComInput").value,
      status: document.getElementById("issueStatInput").value
    };
    cdb.pushData(issue);
    location.reload();
    init();
  };
}

async function editIssue() {
  document.getElementById("editModalTitle").innerHTML =
    "Please input what you want to EDIT";
  generateForm();
  let issues = new Issues();
  await issues.getIssuesFromFile();
  editedIssue = issues.get(/*Id to be sent here*/);
  issues.edit(editedIssue); //will pass the new issue to the edit method
}
async function deleteIssue(param) {
  console.log("deleted");
  document.getElementById("editModalTitle").innerHTML = "Warning";
  document.getElementById(
    "modalInfo"
  ).innerHTML = `Are you sure you want to delete the Issue with ID ${param}`;
  let del = document.getElementById("submitBtn");
  del.className = "btn btn-danger";
  del.innerHTML = "Delete";
  del.onclick = function() {
    console.log(`"${param}"`);
    cdb.deleteDoc(`"${param}"`);
    // location.reload();
  };
}
