<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# About

You can see the project <a href="https://kiwasthal.github.io/task-app/">here</a>.

This project is part of the Odinn Project React-Series. The intent behind it is improving familiarity with React's main concepts(props,state) as well as component composition. As an extra it makes use of <a href="https://styled-components.com/">Styled components</a> for styling.

# Approach

The build can be broken down in two pieces: Task - Manager, and Overview. Everything is handled in state. The user is able to submit a value (submit a form) and for each submit made an HTML list-element, is rendered in the Overview. The list elements are generated with a unique id , making use of <a href="https://www.npmjs.com/package/uniqid">uniqid</a>.

Later in development we are rendering also rendering two buttons . One for deleting the corresponding element and one for editing said element. Since everything is managed by state, we are making heavy use of React's built-in methods for setting State and rendering along with array filter and map methods.

# Notes

Albeit this being as simple project it's a works great as an introduction to React , fusing together basic concepts as Class components, props and state, destructuring of props, conditional rendering, methods as props, lists , keys and basic form handling as well setState methods.
