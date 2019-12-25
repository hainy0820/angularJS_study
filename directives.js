//app.directive('todoTitle', function() {
    angular.module('todo').directive('todoTitle', function() {
        return {
          template: '<h1>Todo List</h1>'
        }
      });
      
      //app.directive('todoItem', function() {
      angular.module('todo').directive('todoItem', function() {
        return {
          templateUrl: 'todoItem.tpl.html'
          /*template:
              '<div class="col-lg-6">' +
                  '<div class="input-group">' +
                    '<span class="input-group-addon">' +
                      '<input type="checkbox" ng-model="todo.completed">' +
                    '</span>' +
                    '<input type="text" class="form-control" ng-model="todo.title">' +
                    '<span class="input-group-btn">' +
                      '<button class="btn btn-danger" type="button" ng-click="remove(todo)">삭제</button>' +
                    '</span>' +
                  '</div>'
                  '<date>{{todo.createdAt | date: 'yyyy-MM-dd HH:mm:ss'}}</date>'*/
        };
      });
      
      angular.module('todo').directive('todoFilters', function() {
        return {
          templateUrl: 'todoFilters.tpl.html'
        }
      });
      
      angular.module('todo').directive('todoForm', function() {
        return {
          templateUrl: 'todoForm.tpl.html'
        }
      });