class clientDB {
  // TODO: Create

  constructor() {
    /**
     * An instance of pouchDB in indexedDB
     */
    this.db = new PouchDB("my_database");
    /** JSON objects from JSON file are saved here as array */
    this.documents = [];
    /** pouchDB documents */
    this.dbDoc = [];
    this.util = new Utils();
  }

  /**
   * Reads the JSON file and sets to documents.
   * @param {JSON} file JSON file to be read.
   */
  async getJSONdata(file) {
    this.documents = await this.util.loadJSON(file);
  }

  // TODO: Read

  /**
   * Returns the specific document by id from pouchDB
   * @param {String} id primary key
   */
  getByID(id) {
    this.db.get(id, function(err, doc) {
      if (err) {
        return console.log(err);
      } else {
        console.log(doc);
      }
    });
  }
  /**
   * Returns all the documents stored in pouchDB
   */
  getAll(cb) {
    let instance = this;
    this.db
      .allDocs({
        include_docs: true,
        attachments: true
      })
      .then(function(result) {
        let docs = result.rows;
        docs.forEach(data => {
          instance.dbDoc.push(data.doc);
        });
        cb(true);
        console.log("pouchDB class doc");
        console.log(instance.dbDoc);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  // TODO: Update

  /**
   * pushes data to pouch database
   * @param {JSON} issue input by user
   */
  pushData(issue) {
    this.db.put(issue, function(err, response) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Document created Successfully");
      }
    });
  }

  /**
   * Updates the document by it's revID given by the database
   * @param {String} revID database document id
   */
  updateData(revID) {
    console.log("Document update success");
  }

  // TODO: Delete

  /**
   * Deletes a document from database using id and revID
   * @param {String} id primary key
   */
  deleteDoc(id) {
    /** @param {String} revID id by pouchDB */
    let revID = this.getRevID(id);
    console.log(revID);
    
    this.db.remove(id, revID, function(err) {
      console.log(err);
      
      if (err) {
        return console.log(err);
      } else {
        console.log("Document deleted successfully");
      }
    });
  }

  // TODO: Helpers

  /**
   * Returns the Documents revID given by pouchDB
   * @param {String} id primary key for finding document
   */
  getRevID(id) {
    this.db.get(id, function(err, doc) {
      console.log(doc);
      if (err) {
        return console.log(err);
      } else {
       return doc._rev;
      }
    });
  }
  checker(){
    
  }
}
