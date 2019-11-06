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
      loadView(data);
      console.log(data);
    });
  });
  console.log("allscripts");

  console.log(cdb.dbDoc);
}
init();

function addIssue() {
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

async function editIssue(param) {
  document.getElementById("editModalTitle").innerHTML =
    "Please input what you want to EDIT";
  generateForm();
  param = param.toString();
  let obj = await cdb.getByID(param);
  document.getElementById("issueIdInput").value = obj._id;
  document.getElementById("issueNameInput").value = obj.name;
  document.getElementById("issueTypeInput").value = obj.type;
  document.getElementById("issuesDesInput").value = obj.description;
  document.getElementById("issuesLocInput").value = obj.location;
  document.getElementById("issuesComInput").value = obj.comments;
  document.getElementById("issueStatInput").value = obj.status;
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
    // location.reload();
    // init();
  };
}
function deleteIssue(param) {
  document.getElementById("editModalTitle").innerHTML = "Warning";
  document.getElementById(
    "modalInfo"
  ).innerHTML = `Are you sure you want to delete the Issue with ID ${param}`;
  let del = document.getElementById("submitBtn");
  del.className = "btn btn-danger";
  del.innerHTML = "Delete";
  del.onclick = function() {
    let param2 = param.toString();
    console.log(param2);
    cdb.deleteDoc(param2);
    location.reload();
  };
}
