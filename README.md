Ember-composable-components-example
====================

# Step2: Get the proper context.

If you just used whatever we've made so far in step1, you'll notice that it doesn't know anything about the current scope it's in. It's unable to see the actions on your controller inside of the header or cell templates. Likewise it doesn't know what other variables are in scope. This is because we didn't set the controller on the views we're using to the proper controller.

We'll need to:

1. Create a computed property on `my-table` that aliases `templateData.view.controller`.
2. Assign that parent controller to our view with the `controller` attribute: `{{view Ember.View controller=parentController}}`.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://iamstef.net/ember-cli/](http://iamstef.net/ember-cli/).
