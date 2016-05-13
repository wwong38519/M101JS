use video

db.movieDetails.find({'genres': { $all : ['Comedy', 'Crime']}}, {_id: 0, genres: 1})
//{ "genres" : [ "Biography", "Comedy", "Crime" ] }
//{ "genres" : [ "Comedy", "Crime", "Mystery" ] }
//{ "genres" : [ "Comedy", "Crime" ] }
//{ "genres" : [ "Comedy", "Crime" ] }
//{ "genres" : [ "Comedy", "Crime" ] }
//{ "genres" : [ "Comedy", "Crime", "Romance" ] }
//{ "genres" : [ "Comedy", "Crime", "Drama" ] }
//{ "genres" : [ "Comedy", "Crime", "Mystery" ] }
//{ "genres" : [ "Comedy", "Crime", "Thriller" ] }
//{ "genres" : [ "Comedy", "Crime" ] }
//{ "genres" : [ "Action", "Comedy", "Crime" ] }
//{ "genres" : [ "Comedy", "Crime", "Romance" ] }
//{ "genres" : [ "Comedy", "Action", "Crime" ] }
//{ "genres" : [ "Action", "Comedy", "Crime" ] }
//{ "genres" : [ "Action", "Comedy", "Crime" ] }
//{ "genres" : [ "Comedy", "Crime" ] }
//{ "genres" : [ "Adventure", "Comedy", "Crime" ] }
//{ "genres" : [ "Comedy", "Crime" ] }
//{ "genres" : [ "Comedy", "Crime", "Mystery" ] }
//{ "genres" : [ "Action", "Comedy", "Crime" ] }

db.movieDetails.find({'genres': { $all : ['Comedy', 'Crime']}}).count()
//56