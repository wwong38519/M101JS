use crunchbase

db.companies.aggregate([
	{$project: {
		_id: 0,
		name: 1,
		permalink: 1,
		founded_year: 1,
		funding_rounds: 1,
		funding_round_count: {$size: '$funding_rounds'}
	}},
	{$match: {
		founded_year: 2004,
		funding_round_count: {$gte: 5}
	}},
	{$unwind: '$funding_rounds'},
	{$group: {
		_id: {
			name: '$name',
			permalink: '$permalink'
		},
		raised_amount: {$sum: '$funding_rounds.raised_amount'},
		rounds: {$sum: 1}
	}},
	{$project: {
		_id: 1,
		raised_amount: 1,
		rounds: 1,
		average_amount: {$divide: [
			'$raised_amount',
			'$rounds'
		]}
	}},
	{$sort: {average_amount: -1}},
	{$limit: 5}
])
//{ "_id" : { "name" : "Facebook", "permalink" : "facebook" }, "raised_amount" : NumberLong("2425700000"), "rounds" : 11, "average_amount" : 220518181.8181818 }
//{ "_id" : { "name" : "BrightSource Energy", "permalink" : "brightsource-energy" }, "raised_amount" : 845000000, "rounds" : 9, "average_amount" : 93888888.8888889 }
//{ "_id" : { "name" : "Trulia", "permalink" : "trulia" }, "raised_amount" : 255100000, "rounds" : 5, "average_amount" : 51020000 }
//{ "_id" : { "name" : "KAYAK", "permalink" : "kayak" }, "raised_amount" : 235024070, "rounds" : 6, "average_amount" : 39170678.333333336 }
//{ "_id" : { "name" : "Evernote", "permalink" : "evernote" }, "raised_amount" : 250500000, "rounds" : 9, "average_amount" : 27833333.333333332 }

db.companies.aggregate([
	{$project: {
		_id: 0,
		name: 1,
		permalink: 1,
		founded_year: 1,
		funding_rounds: 1,
		funding_round_count: {$size: '$funding_rounds'}
	}},
	{$match: {
		founded_year: 2004,
		funding_round_count: {$gte: 5}
	}},
	{$unwind: '$funding_rounds'},
	{$group: {
		_id: {
			name: '$name',
			permalink: '$permalink'
		},
		raised_amount: {$sum: '$funding_rounds.raised_amount'},
		rounds: {$sum: 1}
	}},
	{$project: {
		_id: 1,
		raised_amount: 1,
		rounds: 1,
		average_amount: {$divide: [
			'$raised_amount',
			'$rounds'
		]}
	}},
	{$sort: {average_amount: 1}},
	{$limit: 5}
])
//{ "_id" : { "name" : "Nimbit", "permalink" : "nimbit" }, "raised_amount" : 5425636, "rounds" : 5, "average_amount" : 1085127.2 }
//{ "_id" : { "name" : "SparkBase", "permalink" : "sparkbase" }, "raised_amount" : 10525040, "rounds" : 7, "average_amount" : 1503577.142857143 }
//{ "_id" : { "name" : "Mobidia Technology", "permalink" : "mobidia-technology" }, "raised_amount" : 16050233, "rounds" : 5, "average_amount" : 3210046.6 }
//{ "_id" : { "name" : "Balihoo", "permalink" : "balihoo" }, "raised_amount" : 24500100, "rounds" : 7, "average_amount" : 3500014.285714286 }
//{ "_id" : { "name" : "LimeLife", "permalink" : "limelife" }, "raised_amount" : 20900000, "rounds" : 5, "average_amount" : 4180000 }

