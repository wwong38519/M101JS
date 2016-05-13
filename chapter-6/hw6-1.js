use crunchbase
db.companies.aggregate([
	{$unwind: '$relationships'},
	{$group: {
		_id: {
			person: '$relationships.person',
			company: '$permalink'
		}
	}},
	{$unwind: '$_id'},
	{$group: {
		_id: '$_id.person',
		count: {$sum: 1}
	}},
	{$match: {
		'_id.permalink': {$in: [
			'eric-di-benedetto',
			'roger-ehrenberg',
			'josh-stein',
			'tim-hanlon'
		]}
	}}
])
//{ "_id" : { "first_name" : "Josh", "last_name" : "Stein", "permalink" : "josh-stein" }, "count" : 14 }
//{ "_id" : { "first_name" : "Roger", "last_name" : "Ehrenberg", "permalink" : "roger-ehrenberg" }, "count" : 16 }
//{ "_id" : { "first_name" : "Tim", "last_name" : "Hanlon", "permalink" : "tim-hanlon" }, "count" : 28 }
//{ "_id" : { "first_name" : "Eric", "last_name" : "Di Benedetto", "permalink" : "eric-di-benedetto" }, "count" : 15 }
