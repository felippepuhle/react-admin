import React from 'react';
import { Route, Redirect } from 'react-router';

// Admin - Base
import AdminBaseTemplate from '../admin/components/templates/base'
import AdminIndexPage from '../admin/components/index'
import AdminGroupsPage from '../admin/components/group'
import AdminUsersPage from '../admin/components/user'

// Admin - Login
import AdminLoginTemplate from '../admin/components/templates/login'
import AdminLoginPage from '../admin/components/login'

// Admin - Authentication
import Authenticated from '../admin/security/Authenticated'

export default (
  <Route>
    <Redirect from="/" to="/admin" />

    <Route name="admin">
      <Route component={Authenticated(AdminBaseTemplate)}>
        <Route name="admin.index" path="/admin" component={AdminIndexPage} />
        <Route name="admin.groups" path="/admin/groups" component={AdminGroupsPage} />
        <Route name="admin.users" path="/admin/users" component={AdminUsersPage} />
      </Route>

      <Route component={AdminLoginTemplate}>
        <Route name="admin.login" path="/admin/login" component={AdminLoginPage} />
      </Route>
    </Route>
  </Route>
)
