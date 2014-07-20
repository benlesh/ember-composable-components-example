import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'th',

	isColumn: true,

	_registerWithTable: function(){
		var table = this.nearestWithProperty('isTable');
		table.registerColumn(this);
		this.set('table', table);
	}.on('init'),

	_unregister: function(){
		this.get('table').unregisterColumn(this);
	}.on('willDestroyElement'),
});