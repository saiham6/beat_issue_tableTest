var db = new PouchDB("my_database");

var newIssue = [
  {
    _id: "",
    name: "",
    type: "",
    description: "",
    location: "",
    comments: "",
    status: ""
  }
];

// !Fetch all

/*
db.allDocs(function(err, docs) {
  if (err) {
     return console.log(err);
  } else {
     console.log (docs.rows);
  }
});
*/

// !Fetch via _id

/*
db.get('001', function(err, doc) {
  if (err) {
     return console.log(err);
  } else {
     console.log(doc);
  }
});
*/

// !Fetch _rev via _id

/*
db.get('001', function(err, doc) {
  if (err) {
     return console.log(err);
  } else {
     console.log(doc._rev);
  }
});
*/

// !delete an entry

/*
db.remove('001', '3-552920d1ca372986fad7b996ce365f5d', function(err) {
   if (err) {
      return console.log(err);
   } else {
      console.log("Document deleted successfully");
   }
});
*/

/**
 *? Create Read Update Delete via pouchDB
 */

// TODO: Create

/**
 * An instance of pouchDB in indexedDB
 */
var db = new PouchDB("my_database");

/**
 * Batch inserts from JSON file to local pouchDB
 * @param {JSON} file array of JSON objects
 */
function insertToDB(file) {
  //Inserting Documents
  db.bulkDocs(file, function(err, response) {
    if (err) {
      return console.log(err);
    } else {
      console.log("Documents created Successfully");
    }
  });
}

// TODO: Read

/**
 * Returns the specific document by id from pouchDB
 * @param {String} id primary key
 */
function getByID(id) {
  db.get(id, function(err, doc) {
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
function getAll() {
  db.allDocs(function(err, docs) {
    if (err) {
      return console.log(err);
    } else {
      console.log(docs.rows);
    }
  });
}

// TODO: Update

/**
 * pushes data to pouch database
 * @param {JSON} issue input by user
 */
function pushData(issue) {
  db.put(issue, function(err, response) {
    if (err) {
      return console.log(err);
    } else {
      console.log("Document created Successfully");
    }
  });
}

function updateData(issue){
  
}

// TODO: Delete

/**
 * Deletes a document from database using id and revID
 * @param {String} id primary key
 * @param {String} revID id by pouchDB
 */
function deleteDoc(id, revID) {
  db.remove(id, revID, function(err) {
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
function getRevID(id) {
  db.get(id, function(err, doc) {
    if (err) {
      return console.log(err);
    } else {
      console.log(doc._rev);
    }
  });
}