class Issues {
  constructor() {
    this.issues = [];
    this.util = new Utils();
  }
  /**
   * *This will be used for adding the issue to the Local VM Storage.
   * @param {Object} issue Will pass the created Object
   */
  add(issue) {
    this.issues.push(issue);
    this.updateIssuesFile(issue);
    this.writeToFile(issue);
  }
  /**
   * *This method will write the updated JSON file in session VM to the local file.
   * @param {Object} jsonObj The updated JSON file.
   * @param {JSON} file      The file to be written to.
   */
  writeToFile(jsonObj,file){
    
  }
  /**
   ** Will update the current json file with the new values
   * @param {Object} file The JSON file to be sent
   * @return {void}
   */
  updateIssuesFile(file){
     this.issues
  }

  edit(issue) {
    
  }
  delete(id) {
    
  }
  get(id) {

  }
  /**
   ** Will return all the objects in the JSON file
   * @return {Object} The whole JSON file as an Object file.
   */
  getAll() {
    return this.issues;
  }
  /**
   * *This will read the JSON file
   * @param {JSON} file The file to be read
   */
  async getIssuesFromFile(file) {
    this.issues = await this.util.loadJSON(file);
  }
}
