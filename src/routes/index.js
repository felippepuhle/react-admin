import React from 'react'
import { Route, Redirect } from 'react-router'

// Admin - Base
import AdminBaseTemplate from '../admin/templates/base'
import AdminIndexPage from '../admin/views/index'
import AdminProfilePage from '../admin/views/profile'
import AdminGroupsPage from '../admin/views/group'
import AdminUsersPage from '../admin/views/user'

// Admin - Login
import AdminLoginTemplate from '../admin/templates/login'
import AdminLoginPage from '../admin/views/login'

// Admin - Authentication
import Authenticated from '../admin/security/Authenticated'

// Not Found
import NotFoundPage from '../views/NotFound'

export default (
  <Route>
    <Redirect from="/" to="/admin" />

    <Route name="admin">
      <Route component={Authenticated(AdminBaseTemplate)}>
        <Route name="admin.index" path="/admin" component={AdminIndexPage} />
        <Route name="admin.profile" path="/admin/profile" component={AdminProfilePage} />
        <Route name="admin.groups" path="/admin/groups" component={AdminGroupsPage} />
        <Route name="admin.users" path="/admin/users" component={AdminUsersPage} />
      </Route>

      <Route component={AdminLoginTemplate}>
        <Route name="admin.login" path="/admin/login" component={AdminLoginPage} />
      </Route>
    </Route>

    <Route path="*" component={NotFoundPage}/>
  </Route>
)
