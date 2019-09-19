class Issues {
  constructor() {
    this.issues = [];
    this.util = new Utils();
  }
  add(issue) {
    this.issues.push(issue);
    this.updateIssuesFile(issue);
  }
  updateIssuesFile(file){
    JSON.save(this.issues, file);
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
  async getIssuesFromFile(file) {
    this.issues = await this.util.loadJSON(file);
  }
}
