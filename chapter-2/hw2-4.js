use video
db.movieDetails.find({'genres': { $eq : ['Comedy', 'Crime']}}).count()
//20