# Questions

# 1. What are PropTypes used for? Please describe why it's important to type check our data in Javascript.

`prop-types` are used to 'declare' to the `Javascript` compiler the type of a particular `prop` in a component.

Because `Javascript` is _loosely typed_, its compiler does not check if a variable is supposed to be a number or a string, or some other data type. This can cause confusion on what the appropriate data types for `props` are, and assigning the wrong data type to a `prop` can break applications. For example, accidentally assigning a `String` to a numerical `timer` variable can eventually break a function like `.setTimeout`.

`prop-types` thus helps in **debugging code more efficiently**. An added bonus is that **thanks to its syntax, collaborators can more easily discern how individual `props` are used** based on the assigned `prop-types`.

# 2. Describe a life cycle event in React?

The idea of **life cycle events** refers to how _components in react undergo various phases as they are used_. These 'events' are:

## Mounting ('birth')
* The start of the component's usage for a particular instance
• `componentDidMount` is invoked - this is different from its `constructor` in that as opposed to being invoked once, it is invoked every time the component is in use
* Its `render` function (or return value, for functional components) is returned for the first time in the current life cycle

## Updating ('growth')
* This is when the component's contents (or internal values) are updated.
* This is most commonly observable as the result of calling the bound method `this.setState`
* The `render` function is called again.
* `shouldComponentUpdate`, if desired, is also called upon updating - this can be used to modify the usage of the `render` function (or even stop it from being called altogether)

## Unmounting ('death')
* This when the component is no longer used (for the current life cycle) - if visible, the component will noticeably  be removed from the screen.
* `componentWillUnmount` is invoked at this point

# 3. Explain the details of a Higher Order Component

A Higher Order Component **(HOC)** is basically **a component that has other components passed into it**.

HOC's have various uses depending on how a React application is structured. The _key idea here is that using HOC's allows for reusing component logic_. This means that developers will repeat themselves less often ('DRY'-er code).

Bundling components together in a HOC also allows for **sharing of information** and **combined functionalities**. To name a few uses, developers can use them for _added logic in conditional rendering_ and _making alterations to the usual behaviors of components_. There is also the bonus of _adding clarity (and arguably, traceability) to code_ by virtue of the more defined component structure.

# 4. What are three different ways to style components in React? Explain some of the benefits of each.

## Plain ('vanilla') `CSS`
* This simply involves using CSS stylesheets that will be imported into Javascript files
* The simplest method, which does not rely on any additional syntax or functionalities. 'Plug-and-play' upon importing
* No need to install any modules
* Ideally, there will be a stylesheet for each group of related components
* Preprocessors can optionally be utilized for more efficiency (and arguably better readability)

## `ReactStrap`
* A convenient library based off of `Bootstrap` that is optimized to work with `React`.
* Easy for developers to hone existing knowledge of Bootstrap in the `React` environment
* There are predefined classes for quick templates (that look good nonetheless)

## `Styled Components`
* A library for adding syntactically-optimized styling code into `Javascript`
* Eliminates the need for any CSS files for the application (unless these are still desired for whatever purpose one may have for combining `Styled Components` with plain `CSS`)
* Conveniently placed inside the same `Javascript` files where `React` components are used.
* Takes the form of components, working well with other sections of `React` code
* Easier to apply logic into styling, especially with how prop values can be combined with conditional logic