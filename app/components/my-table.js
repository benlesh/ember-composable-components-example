import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'table',

	isTable: true,

  hasRendered: false,

  sortColumn: null,

  columns: function(){
  	return [];
  }.property(),

  _updateSortRows: function() {
  	var rows = this.get('rows');
  	var sortField = this.get('sortColumn.sortField');

  	var copy = rows.slice();
  	copy.sort(function(a, b) {
  		var ax = a[sortField];
  		var bx = b[sortField];
  		return (ax === bx) ? 0 : (ax > bx ? 1 : -1);
  	});
  	this.set('sortedRows', copy);
  },

  _sortFieldChanging: function(){
  	var sortField = this.get('sortColumn.sortField');
  	Ember.removeObserver(this, 'rows.@each.' + sortField, this._updateSortRows);
  }.observesBefore('sortColumn.sortField'),

  _sortFieldChanged: function(){
  	var sortField = this.get('sortColumn.sortField');
  	this._updateSortRows();
	  Ember.addObserver(this, 'rows.@each.' + sortField, this._updateSortRows);
  }.observes('sortColumn.sortField'),

	registerColumn: function(column) {
		this.get('columns').pushObject(column);
		if(!this.get('sortColumn')) {
			this.set('sortColumn', column);
		}
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