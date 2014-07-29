Ember-composable-components-example
======================

# Step 4: Dynamically observing sort changes

This is a bit more advanced, and unrelated to the idea of "composable components". If we want the sorted
rows to update when we update the individual sorted fields on data items in the array, we'll need to do some Ember magic to 
dynamically set up observers to watch the sorted property for changes.

1. Change the `sortedRows` property to a simple function that sets `sortedRows`.
2. Create an `observes` that watches changes to the sorted field and sets up new observers pointing at our function.
3. Create an `observesBefore` that tears down old observers.


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
