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
