use video

print('db.movieDetails.find({}, {title})')
db.movieDetails.find({}, {title});

print('db.movieDetails.find({year: 1964}, {title: 1, _id: 0})')
db.movieDetails.find({year: 1964}, {title: 1, _id: 0});

print('db.movieDetails.find({title: "Muppets from Space"}, {title: 1})')
db.movieDetails.find({title: "Muppets from Space"}, {title: 1});

print('db.movieDetails.find({title: ""}, {title: 1})')
db.movieDetails.find({title: ""}, {title: 1});

print('db.movieDetails.find({}, {title: 1})')
db.movieDetails.find({}, {title: 1});

print('db.movieDetails.find({}, {title: 1, _id: 0})')
db.movieDetails.find({}, {title: 1, _id: 0});