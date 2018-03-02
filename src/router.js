import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
// import MainLayout from './components/layouts/main-layout';
// import SearchLayoutContainer from './components/containers/search-layout-container';
//
// // Pages
// import Home from './components/home';
// import UserListContainer from './components/containers/user-list-container';
// import UserProfileContainer from './components/containers/user-profile-container';
// import WidgetListContainer from './components/containers/widget-list-container';
import App from './components/App';
import Todo from './components/Todo/todo';
import EditTodoController from './components/EditTodo/editTodoController';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Todo}/>
      <Route path="edit/:todoId" component={EditTodoController} />
    </Route>
  </Router>
);
