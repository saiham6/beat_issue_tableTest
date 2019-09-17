class Utils {
  constructor() {
  }
  /**
   * 
   * @param {Promise} file 
   */
  async loadJSON(file) {
      const resp = await fetch(file);
      const jsonData = await resp.json();
      return jsonData;
  }
}