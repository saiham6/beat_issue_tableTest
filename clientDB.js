class clientDB {
  // TODO: Create

  constructor() {
    /**
     * An instance of pouchDB in indexedDB
     */
    this.db = new PouchDB("my_database");
    /** JSON objects are saved here as array */
    this.documents = [];
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
  getAll() {
    this.db.allDocs(function(err, docs) {
      if (err) {
        return console.log(err);
      } else {
        console.log(docs.rows);
        // return docs.rows;
      }
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
   * @param {String} revID id by pouchDB
   */
  deleteDoc(id, revID) {
    this.db.remove(id, revID, function(err) {
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
      if (err) {
        return console.log(err);
      } else {
        console.log(doc._rev);
      }
    });
  }
}
