import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'th',

	isColumn: true,

	isSorted: function(){
		return this === this.get('table.sortColumn');
	}.property('table.sortColumn'),

	_registerWithTable: function(){
		var table = this.nearestWithProperty('isTable');
		table.registerColumn(this);
		this.set('table', table);
	}.on('init'),

	_unregister: function(){
		this.get('table').unregisterColumn(this);
	}.on('willDestroyElement'),
});