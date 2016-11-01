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

- React itself
- JavaScript “bundlers” (e.g. Webpack)
- ES6
- Redux

You don't need to learn all of these to be productive with React. Only move to the next step if you have a problem that needs to be solved.

### React Index

- [React](#react)
  - [React General Resources](#react-general-resources)
  - [React Community](#react-community)
  - [React Online Playground](#react-online-playground)
  - [React Tutorials](#react-tutorials)
    - [React General Tutorials](#react-general-tutorials)
    - [React styling](#react-styling)
    - [React Charts Tutorials](#react-charts-tutorials)
- [Flux](#flux)
  - [Flux General Resources](#flux-general-resources)
  - [Flux Implementations](#flux-implementations)
  - [Flux Tutorials](#flux-tutorials)
- [Redux](#redux)
  - [Redux General Resources](#redux-general-resources)
  - [Redux Tools](#redux-tools)
  - [Redux Tutorials](#redux-tutorials)
- [Videos](#videos)
  - [Video from Confs](#video-from-confs)
  - [React.js Conf 2015 Playlist](#reactjs-conf-2015-playlist)
  - [ReactEurope Conf 2015 Day 1 Playlist](#reacteurope-conf-2015-day-1-playlist)
  - [ReactEurope Conf 2015 Day 2 Playlist](#reacteurope-conf-2015-day-2-playlist)
  - [ReactRally Conf 2015 Playlist](#reactrally-conf-2015-playlist)
  - [React.js Conf 2016 Playlist](#reactjs-conf-2016-playlist)
  - [ReactRally Conf 2016 Playlist](#reactrally-conf-2016-playlist)
  - [Video Tutorials](#video-tutorials)
- [Books](#books)
- [Demos](#demos)
- [Example Apps](#example-apps)
- [Real Apps](#real-apps)
- [Contribution](#contribution)


---
### React itself
> JavaScript Library for building User Interfaces

#### React General Resources
* [React: The Definitive Beginner's Guide](https://mva.microsoft.com/en-us/training-courses/react-the-definitive-beginner-s-guide-16547)
  Introduction tutorial about how to build simple Pizza Bot application. Very recommended before continue digging to other links/tutorials.
* [Start Using React to Build Web Applications](https://egghead.io/courses/react-fundamentals)

* [React Community GitHub](https://github.com/reactjs)


ReactJs 
Hacking with React.pdf
Pro React.pdf (https://github.com/pro-react/kanban-app


![React Lifecycle](http://image.slidesharecdn.com/7reduxchallenges-160128205435/95/7-redux-challenges-6-638.jpg?cb=1454014493 "React Lifecycle")

---
### ES6
> ES6 / ECMAScript 6 / ECMAScript 2015 is an ECMAScript standard that was ratified in June 2015 with significant update to the Javascript language

Outside of JSX (which you learned in the React tutorial), you may see some funny syntax in React examples. This is called ES6, and it’s the latest version of JavaScript so you may not have learned it yet. Since it’s so new, it’s not supported in browsers yet, but your bundler can translate it for you with the proper configuration.

If you just want to get things done with React, you can skip learning ES6, or try to pick it up along the way.

You may see some talk about ES6 classes being the preferred way to create React components. This is untrue. Most people (including Facebook) are using React.createClass().


#### ES6 General Resources
* [ECMAScript 6 — New Features: Overview & Comparison ](http://es6-features.org/)
  Side by Side comparison between ECMAScript 6 vs ECMAScript 5.
* [Top 10 ES6 Features Every Busy JavaScript Developer Must Know](https://webapplog.com/es6/)
* [Convert ES6 to ES5 code in real time](https://babeljs.io/repl/)
  You can use the Babel tool to convert your ES6 code to its equivalent plain ES5 Javascript.


#### React Redux

![Redux](http://prnt.sc/d1jafu "Redux")

* [Getting started with redux](www.learnredux.com)
[Companion full source code](https://github.com/wesbos/Learn-Redux-Starter-Files)

* [Getting started with redux](https://egghead.io/courses/getting-started-with-redux) Once you are finished with this course be sure to check out part 2 below
[Companion notes and source code](https://github.com/tayiorbeii/egghead.io_redux_course_notes)

* [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
[Companion notes and source code](https://github.com/tayiorbeii/egghead.io_idiomatic_redux_course_notes)

* [Getting started with redux](http://redux.js.org/)

#### Webpack
* [Beginner’s guide to Webpack](https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.gy4alqs9i)


* Learn Webpack and React http://survivejs.com/  
Good tutorial about how to build simple Kanban application. In those site, you not only learn ReactJs, but you also can learn other latest web technologies.


#### React Tutorials

##### React General Tutorials
* [React Tutorial](https://facebook.github.io/react/docs/tutorial.html)
* [React.js Fundamentals](http://courses.reactjsprogram.com/courses/reactjsfundamentals)
* [React Primer](https://github.com/mikechau/react-primer-draft)
* [ReactJS: Keep Simple. Everything can be a component!](https://speakerdeck.com/pedronauck/reactjs-keep-simple-everything-can-be-a-component)
* [React.js Koans: Practical exercises that will help you learn React.js from square one](https://github.com/arkency/reactjs_koans)
* [React.js Introduction For People Who Know Just Enough jQuery To Get By](http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/)
* [LearnCode React Tutorials](https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)
* [Thinkster React topics](https://thinkster.io/topics/react)
* [React tutorial - Cloning Yelp](https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp/)
* [Learn React by building the Hacker News front page](https://github.com/mking/react-hn)
* [React.js in patterns](http://krasimirtsonev.com/blog/article/react-js-in-design-patterns)

---
### Books
* [SurviveJS - Webpack and React](http://survivejs.com/)

---
### Example Apps
* [isomorphic500 - Isomorphic JS app built with React and Fluxible](https://github.com/gpbl/isomorphic500)
* [fil -  A playground for in-browser interpreters (Redux)](https://github.com/fatiherikli/fil)
* [sound-redux - A Soundcloud client built with React / Redux](https://github.com/andrewngu/sound-redux)
* [react-pomodoro - A Pomodoro timer for developers](https://github.com/afonsopacifer/react-pomodoro)
* [Do - Notes management application built with React and Redux](https://github.com/1ven/do)

---
### Real Apps
* [reddit/reddit-mobile](https://github.com/reddit/reddit-mobile)
* [khan/perseus](https://github.com/khan/perseus)
* [mozilla/payments-ui](https://github.com/mozilla/payments-ui)
* [webbylab/itsquiz-wall](https://github.com/webbylab/itsquiz-wall)
* [brainfock/brainfock](https://github.com/brainfock/brainfock)

---
### Contribution
Your contributions and suggestions are heartily♡ welcome. (✿◠‿◠)


---
### License
[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)
