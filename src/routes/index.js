import React from 'react'
import { Route, Redirect } from 'react-router'

// Admin - Base
import AdminBaseTemplate from '../admin/templates/base'
import AdminHomePage from '../admin/home'
import AdminProfilePage from '../admin/authentication/Profile'
import AdminGroupsListPage from '../admin/group/List'
import AdminUsersListPage from '../admin/user/List'

// Admin - Login
import AdminLoginTemplate from '../admin/templates/login'
import AdminLoginPage from '../admin/authentication/Login'

// Admin - Authentication Middleware
import Authenticated from '../admin/authentication/Authenticated'

// Not Found
import NotFoundPage from '../components/NotFound'

export default (
  <Route>
    <Redirect from="/" to="/admin" />

    <Route name="admin">
      <Route component={Authenticated(AdminBaseTemplate)}>
        <Route name="admin.index" path="/admin" component={AdminHomePage} />
        <Route name="admin.profile" path="/admin/profile" component={AdminProfilePage} />
        <Route name="admin.groups" path="/admin/groups" component={AdminGroupsListPage} />
        <Route name="admin.users" path="/admin/users" component={AdminUsersListPage} />
      </Route>

      <Route component={AdminLoginTemplate}>
        <Route name="admin.login" path="/admin/login" component={AdminLoginPage} />
      </Route>
    </Route>

    <Route path="*" component={NotFoundPage}/>
  </Route>
)
