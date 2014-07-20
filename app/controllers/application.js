import Ember from 'ember';

export default Ember.ObjectController.extend({
	myData: function(){
		var data = [];

		var i;

		for(i = 0; i < 20; i++) {
			data.push({
				id: i + 1,
				name: 'Item ' + i,
				number: Math.round((Math.random() * 200) - 100)
			});
		}

		return data;
	}.property(),

	actions: {
		incrementNumber: function(row) {
			var current = Ember.get(row, 'number');
			Ember.set(row, 'number', current + 1);
		},
	},
});