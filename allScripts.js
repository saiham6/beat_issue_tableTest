async function init() {
  let issues = new Issues();
  await issues.getIssuesFromFile()
  let data = issues.getAll()
  data.forEach(data => {      
    document.getElementById('tbody').innerHTML +=
      '<tr>' +
      '<td>' + data.id + '</td><td>' + data.name + '</td><td>' + data.type +
      '</td><td>' + data.description + '</td><td>' + data.location +
      '</td><td>' + data.comments + '</td><td>' + data.status +
      '</td><td>' + '<div class="btn-group" role="group" aria-label="edit/delete button">' +
      '<button type="button" class="btn btn-secondary" onclick="myEd()" data-toggle="modal" data-target="#editModal">Edit</button>' +
      '<button type="button" class="btn btn-danger" onclick="myDelete()" data-toggle="modal" data-target="#editModal">Delete</button>' +
      '</div>' +
      '</td>' +
      '</tr>';
  });
}
init();
// class issueOld {
//   constructor() {
//     document.getElementById("modalInfo").innerHTML =
//       '<form>' +
//       '<div class="form-group">' + '<label for="issueId">' + 'Issue ID' + '</label>' +
//       '<input type="number" class="form-control" id="issueIdInput" placeholder="ID number">' +
//       '</div>' +
//       '<div class="form-group">' + '<label for="issueName">' + 'Name the Issue' + '</label>' +
//       '<input type="text" class="form-control" id="issueNameInput" placeholder="Name">' +
//       '</div>' +
//       '<div class="form-group">' + '<label for="issueType">' + 'Type of Issue' + '</label>' +
//       '<input type="text" class="form-control" id="issueTypeInput" placeholder="Issue Type">' +
//       '</div>' +
//       '<div class="form-group">' + '<label for="issueDes">' + 'Describe the Issue' + '</label>' +
//       '<input type="text" class="form-control" id="issueDesInput" placeholder="Description">' +
//       '</div>' +
//       '<div class="form-group">' + '<label for="issueLoc">' + 'Where did you find the issue?' + '</label>' +
//       '<input type="text" class="form-control" id="issueLocInput" placeholder="Location">' +
//       '</div>' +
//       '<div class="form-group">' + '<label for="issueCom">' + 'Any Comments?' + '</label>' +
//       '<input type="text" class="form-control" id="issueComInput" placeholder="Comments">' +
//       '</div>' +
//       '<div class="form-group">' + '<label for="issueStat">' + 'Status of the issue?' + '</label>' +
//       '<input type="text" class="form-control" id="issueStatInput" placeholder="Status">' +
//       '</div>' +
//       '</form>';
//     var del = document.getElementById("submitBtn");
//     del.className = "btn btn-primary";
//     del.innerHTML = "Save";
//   }
//   add() {
//     document.getElementById("editModalTitle").innerHTML = "Please input what you want to ADD";
//   }
// }
// class editIss extends issue {
//   constructor() {
//     document.getElementById("editModalTitle").innerHTML = "Please input what you want to EDIT";
//     super();
//   }
// }
// class addIss extends issue {
//   constructor() {

//   }
// }
// function myEd() {
//   console.log("Issue Edited");
//   edit = new editIss();
// }
// function addIssue() {
//   console.log("Issue Added");
//   add = new addIss();
// }
// function myDelete() {
//   console.log("deleted");
//   document.getElementById("editModalTitle").innerHTML = "Warning";
//   var id = 12;
//   document.getElementById("modalInfo").innerHTML = "Are you sure you want to delete the Issue with ID " + id + "?";
//   var del = document.getElementById("submitBtn");
//   del.className = "btn btn-danger";
//   del.innerHTML = "Delete";
//   // del.onclick = 
// }
// //function to get the specific table row info in modal
// function filterById(jsonObject, id) {
//   return jsonObject.filter(function (jsonObject) {
//     return (jsonObject['id'] == id);
//   })[0];
// }

// actual_JSON.forEach(data => {
//   document.getElementById('tbody').innerHTML +=
//     '<tr>' +
//     '<td>' + data.id + '</td><td>' + data.name + '</td><td>' + data.type +
//     '</td><td>' + data.description + '</td><td>' + data.location +
//     '</td><td>' + data.comments + '</td><td>' + data.status +
//     '</td><td>' + '<div class="btn-group" role="group" aria-label="edit/delete button">' +
//     '<button type="button" class="btn btn-secondary" onclick="myEd()" data-toggle="modal" data-target="#editModal">Edit</button>' +
//     '<button type="button" class="btn btn-danger" onclick="myDelete()" data-toggle="modal" data-target="#editModal">Delete</button>' +
//     '</div>' +
//     '</td>' +
//     '</tr>';
// });