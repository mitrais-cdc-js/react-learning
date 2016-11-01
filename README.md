### **React Learning** 

This react learning is based on Mitrais CDC JS experience and idea on [Pete Hunt react-howto](https://github.com/petehunt/react-howto)
and [Dont-make-learning-react-more-difficult-than-it-is] (https://www.triplet.fi/blog/dont-make-learning-react-more-difficult-than-it-is)

React itself has a quite small API surface to learn, and in theory, it should be easy to grasp. Unfortunately, the learning resources are making things look far more complex than it actually is and if you’re new to React (or frontend in general) you may find the ecosystem confusing. There are a few reasons for this.

- React has historically been targeted at early-adopters and experts
- Facebook only open-sources what it actually uses, so it doesn’t focus on tooling for smaller-than-Facebook projects
- There’s a lot of bad marketing masquerading as React guides

### How to tackle the React ecosystem

All software is built on a stack of technologies, and you need to understand enough of that stack to build your app. The reason why the React ecosystem of tooling seems overwhelming is because it’s always explained in the wrong order.

You should learn, in this order, without skipping ahead or learning concurrently:

1. React itself
2. JavaScript “bundlers” (e.g. Webpack) and Debugging Tools
3. ES6
4. Redux

You don't need to learn all of these to be productive with React. Only move to the next step if you have a problem that needs to be solved.

---
### React itself
> JavaScript Library for building User Interfaces

#### React General Resources

* **_Recommended_** [React: The Definitive Beginner's Guide](https://mva.microsoft.com/en-us/training-courses/react-the-definitive-beginner-s-guide-16547)
  Introduction tutorial about how to build simple Pizza Bot application.

* **_Recommended_** [Hacking with React](http://www.hackingwithreact.com/)
 A hands-on tutorial to making a web app using React, React Router, ES6, Jest, and more.
At the end of the forty-some tasks, hacking with React provides a great combination:
  + a progression of straightforward, short lessons toward a working example program,
  + an interesting application (not another To-Do app, thank FSM!),
  + a Howto for setting up some of the confusing Node.js tooling (webpack, ESLint),
  + introduction to testing with Jest,
  + advice about best Node/Javascript/coding practices,
  + a decent understanding of how all these tools work together, and of course,
  + a great walkthrough of the concepts behind React.

* [Start Using React to Build Web Applications](https://egghead.io/courses/react-fundamentals)

#### React Lifecycle
![React Lifecycle](http://image.slidesharecdn.com/7reduxchallenges-160128205435/95/7-redux-challenges-6-638.jpg?cb=1454014493 "React Lifecycle")


---
### Webpack
> Webpack is module bundler for Javascript. Although there are a lot of similar task runner and bundler, React community usually use Webpack instead of the others (browserify, gulp, grunt)

* **_Recommended_** [Beginner’s guide to Webpack](https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.gy4alqs9i)

---
### Debugging

* **_Recommended for Debugging_** [React Developer Tools] 
* **_Recommended for Debugging_** [Redux Dev Tools](https://github.com/gaearon/redux-devtools)

---
### ES6
> ES6 / ECMAScript 6 / ECMAScript 2015 is an ECMAScript standard that was ratified in June 2015 with significant update to the Javascript language

Outside of JSX (which you learned in the React tutorial), you may see some funny syntax in React examples. This is called ES6, and it’s the latest version of JavaScript so you may not have learned it yet. Since it’s so new, it’s not supported in browsers yet, but your bundler can translate it for you with the proper configuration.

If you just want to get things done with React, you can skip learning ES6, or try to pick it up along the way.

You may see some talk about ES6 classes being the preferred way to create React components. This is untrue. Most people (including Facebook) are using React.createClass().


#### ES6 General Resources
* **_Recommended_** [ECMAScript 6 — New Features: Overview & Comparison ](http://es6-features.org/)
  Side by Side comparison between ECMAScript 6 vs ECMAScript 5.
* [Top 10 ES6 Features Every Busy JavaScript Developer Must Know](https://webapplog.com/es6/)
* [Convert ES6 to ES5 code in real time](https://babeljs.io/repl/)
  You can use the Babel tool to convert your ES6 code to its equivalent plain ES5 Javascript.


---
### Redux
> Redux is a predictable state container for JavaScript apps

* **_Recommended_** [Getting started with redux](www.learnredux.com)
	**Amazing step by step tutorial for learning Redux by developing simple Reduxtagram**
[Companion full source code](https://github.com/wesbos/Learn-Redux-Starter-Files)

* **_Recommended_** [Complex State Management with redux](http://www.pro-react.com/materials/ch06-alt-redux.pdf)
 For learning Redux, we can jump directly to Chapter 6 on amazing Pro React book. (Actually the official book cover Flux, but this link cover alternative version using Redux)
 [Companion full source code](https://github.com/pro-react/kanban-app)

* [Getting started with redux - Part 1](https://egghead.io/courses/getting-started-with-redux)
 Get companion notes and source code [here](https://github.com/tayiorbeii/egghead.io_redux_course_notes)
Once you are finished with this course from the creator of Redux, Dan Abramov, be sure to check out part 2 below

* [Building React Applications with Idiomatic Redux - Part 2](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
Get companion notes and source code [here](https://github.com/tayiorbeii/egghead.io_idiomatic_redux_course_notes)

* [Getting started with redux](http://redux.js.org/)
  The official and the only guide for Redux. Cover from basic until advance topic. Be sure to check the Recipes and FAQ section.


#### Redux Explained with Image

![Redux](http://i.imgur.com/WZGxoj7.jpg "Redux")

![Redux2](https://github.com/springload/react-redux-exercise/raw/master/readme/redux1.jpg "Redux2")

![Redux Explained](https://github.com/springload/react-redux-exercise/raw/master/readme/redux3.png "Redux Explained")
#### References
---
### Cheatsheet
* [React Cheatsheet](https://github.com/mitrais-cdc-js/react-learning/raw/master/Cheatsheet/egghead-react-cheat-sheet-0-14-7.pdf)
* [Redux Cheatsheet](https://github.com/mitrais-cdc-js/react-learning/raw/master/Cheatsheet/egghead-redux-cheat-sheet-3-2-1.pdf)

---
### Books
* [Hacking with React](http://www.hackingwithreact.com/)
* [SurviveJS - Webpack and React](http://survivejs.com/) Build simple Kanban application. In those site, you not only learn ReactJs, but you also can learn other latest web technologies.
* [Pro React: Cassio de Sousa Antonio](http://www.pro-react.com/)
Get companion source code [here](https://github.com/pro-react/kanban-app)

---
### Contribution
Your contributions and suggestions are heartily♡ welcome. (✿◠‿◠)

---
### License
[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)
