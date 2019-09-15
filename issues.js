class Issues {
  constructor() {
    this.issues = [];
    this.util = new Utils();
  }
  add(issue) {
    document.getElementById("editModalTitle").innerHTML = "Please input what you want to ADD";
    this.generateForm();
  }
  edit(issue) {
    
  }
  delete(id) {
    // console.log("deleted");
    // document.getElementById("editModalTitle").innerHTML = "Warning";
    // document.getElementById("modalInfo").innerHTML = "Are you sure you want to delete the Issue with ID " + id + "?";
    // var del = document.getElementById("submitBtn");
    // del.className = "btn btn-danger";
    // del.innerHTML = "Delete";
  }
  get(id) {

  }
  getAll() {
    return this.issues;
  }
  async getIssuesFromFile() {
    this.issues = await this.util.loadJSON('data.json');
  }
}
