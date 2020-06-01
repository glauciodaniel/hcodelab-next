'use strict'


const Route = use('Route')
Route.post('/users', 'UserController.store')
Route.get('/users', 'UserController.index')

Route.group(()=>{
  Route.resource('users','UserController').apiOnly()
  // only, except.
}).prefix('admin')
.middleware(['auth'])

// Route.get('/admin/users', 'UserController.index')
// Route.post('/admin/users', 'UserController.store')
// Route.get('/admin/users/:id', 'UserController.show')
// Route.put('/admin/users/:id', 'UserController.update')
// Route.delete('/admin/users/:id', 'UserController.destroy')

Route.post('/auth', 'AuthController.store')

Route.post('/contacts', 'ContactController.store')
Route.get('/admin/contacts', 'ContactController.index')
Route.get('/admin/contacts/:id', 'ContactController.show')
