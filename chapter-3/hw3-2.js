db.grades.find().skip(6).limit(2).sort({'grade',1})
//{ "_id" : 14, "student" : "Seamus", "grade" : 33, "assignment" : "exam" }
//{ "_id" : 13, "student" : "Bob", "grade" : 37, "assignment" : "exam" }
