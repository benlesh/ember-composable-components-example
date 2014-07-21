Ember-composable-components-example
========================

# Step1: The basic table, and communicating between components

### We'll need to create 4 components:

#### `my-table`

- Container component, responsible for rendering the table HTML.
- Has an `isTable` property for identification purposes.
- Has `registerColumn` and `unregisterColumn` methods for keeping track of child `my-column` components.
- Must have a `{{yield}}` in its template so all child components are processed.
- Must check to see if child components are finished registering before rendering itself. Updates a `hasRendered` property
 when `didInsertElement` fires. This is checked in the template.

#### `my-column`

- Child of `my-table`.
- Will find the parent table with `nearestWithProperty` and register itself on `init`.
- Will unregister itself on `willDestroyElement`.

#### 'my-column-header' and `my-column-cell`

- Used to capture templates.
- registers itself with it's parent `my-column` on init.
- Is rendered by `my-table` programmatically, so we'll need to disable it's rendering by overriding `renderToBuffer`.


### Using Ember.View to render captured templates

Every component has a `template` property from which you can get it's template, which is whatever has been passed into the "inner html" of the component use in your main template. You can set any view or components template with the same property. So `{{view Ember.View template=column.cell.template}}` will set the template of a dynamically created Ember.View to whatever template resides in `column.cell.template`, which in our case will be the template captured from `{{#my-column-cell}} here {{/my-column-cell}}`


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
