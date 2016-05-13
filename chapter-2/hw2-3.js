use video

db.movieDetails.find({'countries.1': 'Sweden'}, {_id:0, countries:1})
//{ "countries" : [ "USA", "Sweden", "Norway" ] }
//{ "countries" : [ "USA", "Sweden" ] }
//{ "countries" : [ "Romania", "Sweden", "Germany" ] }
//{ "countries" : [ "Denmark", "Sweden", "Norway", "UK", "USA", "Germany", "Netherlands", "Israel", "Spain", "Belgium", "Canada" ] }
//{ "countries" : [ "Iceland", "Sweden" ] }
//{ "countries" : [ "France", "Sweden" ] }

db.movieDetails.find({'countries.1': 'Sweden'}).count()
//6