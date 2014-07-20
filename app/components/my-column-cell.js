import Ember from 'ember';

export default Ember.Component.extend({
	_registerWithColumn: function(){
		var column = this.nearestWithProperty('isColumn');
		column.set('cell', this);
	}.on('init'),

	renderToBuffer: function(){
		// override: do not render
	}
});