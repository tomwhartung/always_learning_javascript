/*
 * This code uses the optional React.js JSX syntax to create our views, which we
 * shall use throughout the rest of this workshop.
 */

//
// Example code: used previously in ../01-hello_react
//
// export default class TodoBox extends React.Component{
//    render() {
//       return <div className="todoBox">
//           Hello, world!
//         </div>
//    }
// }

import React from 'react';

export default class TodoBox extends React.Component {
   render() {
      return (
         <div className="todoBox">
            <h1>Todos</h1>
            <TodoList />
            <TodoForm />
         </div>
      );
   }
}

class TodoList extends React.Component {
   render() {
      return (
         <div className="todoList">
            I am a TodoList.
         </div>
      );
   }
}

class TodoForm extends React.Component {
   render() {
      return (
         <div className="todoForm">
            I am a TodoForm.
         </div>
      );
   }
}

