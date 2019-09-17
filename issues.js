class Issues {
  constructor() {
    this.issues = [];
    this.util = new Utils();
  }
  add(issue) {
    this.issues.push(issue);
    this.updateIssuesFile(issue);
  }
  updateIssuesFile(){
    JSON.save(this.issues, 'data.json');
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
