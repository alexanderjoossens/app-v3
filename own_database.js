import { getData } from "./server.js";

// e.g. db = [[code1, [1.4543, 1.532, 1.324], [1.231, 1.324, 1.342]], [code2, [1.4543, 1.532, 1.324], [1.231, 1.324, 1.342]]
var db = []
// should be able to GET and PUT things in database.
export async function db_function(type, code, value) {

  var todo = true;

  console.log("\ncurrent db: ", db)
  // console.log("current db length: ", db.length)
  // console.log("Access database with Type: ", type, " Code: ", code, " Value: ", value)

  if (type == "put") {
    // console.log('db.length: ', db.length) 
    for(let i = 0; i<db.length; i++) {
      // console.log('in for loop. i=',i)
      // console.log('db[i][0]', db[i][0])
      if (db[i][0] == code) {
        // console.log('code already present in db. db[i][2]=',db[i][2])
        // if not yet second value: add it
        if (db[i][2] == 'empty') {
          var vector1 = db[i][1]
          db[i][2] == value
          console.log('db[i] nu: ', db[i])
          todo = false
        }
        // if already second value: continue
        else {
          todo = false
          continue // of break?
        }
      }
    }
    console.log('first time this code. db=',db,'. pushing new entry into db.')
    if (todo) {
      console.log('todo=true')
      console.log('pushing this: ', [code, value, 'empty'])
      db.push([code, value, 'empty'])
      todo = false
    }
    console.log("current db: ", db,"\n")
    return db
  }

  else if (type == "get") {
    for(let i = 0; i<db.length< i++;) {
      if (db[i].includes(code)) {
        todo = false;
        return db
      }
    }
    if (todo) {
      console.log("\ncurrent db: ", db,"\n")
      return db
    }
  }

  else {
    console.log("\ncurrent db: ", db,"\n")
    return ["Given type is wrong. Options: put, get"]
  }

}