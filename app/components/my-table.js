import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'table',

	isTable: true,

  hasRendered: false,

  columns: function(){
  	return [];
  }.property(),

  sortedRows: function() {
  	var rows = this.get('rows');
  	var sortField = this.get('sortColumn.sortField');

  	var copy = rows.slice();
  	copy.sort(function(a, b) {
  		var ax = a[sortField];
  		var bx = b[sortField];
  		return (ax === bx) ? 0 : (ax > bx ? 1 : -1);
  	});
  	return copy;
  }.property('rows.@each', 'sortColumn.sortField'),

	registerColumn: function(column) {
		this.get('columns').pushObject(column);
	},

	unregisterColumn: function(column) {
		this.get('columns').removeObject(column);
	},

	_notifyRendered: function(){
		this.set('hasRendered', true);
	}.on('didInsertElement'),

	parentController: Ember.computed.alias('templateData.view.controller'),

	actions: {
		sortBy: function(column) {
			this.set('sortColumn', column);
		}
	},
});