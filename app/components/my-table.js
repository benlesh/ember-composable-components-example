import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'table',

	isTable: true,

  hasRendered: false,

  columns: function(){
  	return [];
  }.property(),

	registerColumn: function(column) {
		this.get('columns').pushObject(column);
	},

	unregisterColumn: function(column) {
		this.get('columns').removeObject(column);
	},

	_notifyRendered: function(){
		this.set('hasRendered', true);
	}.on('didInsertElement'),
});