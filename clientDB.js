// create an instance of a db object for us to store the IDB data in
var db;
// create a blank instance of the object that is used to transfer data into the IDB. This is mainly for reference
var newItem = [
    { taskTitle: "", hours: 0, minutes: 0, day: 0, month: "", year: 0, notified: "no" }
  ];
