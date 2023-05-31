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

//
// Example code: used previously in ../02-components
//
// class TodoList extends React.Component {
//    render() {
//       return (
//          <div className="todoList">
//             I am a TodoList.
//          </div>
//       );
//    }
// }

class TodoList extends React.Component {
   render() {
      return (
         <div className="todoList">
            <table style={{border: "2px solid black"}}>
               <tbody>
                  <Todo title="Shopping">Milk</Todo>
                  <Todo title="Hair cut">13:00</Todo>
               </tbody>
            </table>
         </div>
      );
   }
}

class Todo extends React.Component {
   render() {
      return (
         <tr>
            <td style={{border: "1px solid black"}}>{this.props.title}</td>
            <td style={{border: "1px solid black"}}>{this.props.children}</td>
         </tr>
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

