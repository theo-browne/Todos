import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root'


document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root")
  const todos = {
    // 1: {
    //   id: 1,
    //   title: 'wash car',
    //   body: 'with soap',
    //   done: false
    // },
    // 2: {
    //   id: 2,
    //   title: 'wash dog',
    //   body: 'with shampoo',
    //   done: false
    // },
    // 3: {
    //   id: 3,
    //   title: 'wash Jason',
    //   body: 'withOut shampoo',
    //   done: false
    // }
  }
  const store = configureStore( {todos} );
  window.store = store
  ReactDom.render(<Root store={store} />, root)
})