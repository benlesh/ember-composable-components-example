Ember-composable-components-example
========

# Step 3: Adding sorting

So now some shared functionality. I'm going to add a (very simplistic) sort.

To add sorting we'll need to do a few things:

1. Add a sortField attribute to the `my-column` component.
2. Add a computed property of `sortedRows` to the `my-table` component.
3. Add an action to the `my-table` component to trigger the sort when a column header is clicked.
4. Add a property to the `my-column` component to display whether or not it's the sorted column.


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
