import React from "react";
import { Route } from "react-router";

// Admin - Base
import AdminBaseTemplate from "./components/admin/templates/base";
import AdminIndexPage from "./components/admin/index";
import AdminGroupsPage from "./components/admin/group";
import AdminUsersPage from "./components/admin/user";
// Admin - Login
import AdminLoginTemplate from "./components/admin/templates/login";
import AdminLoginPage from "./components/admin/login";

export default (
  <Route name="admin" path="/admin">
    <Route component={AdminBaseTemplate}>
      <Route name="admin.index" path="/" component={AdminIndexPage} />
      <Route name="admin.groups" path="/groups" component={AdminGroupsPage} />
      <Route name="admin.users" path="/users" component={AdminUsersPage} />
    </Route>
    <Route component={AdminLoginTemplate}>
      <Route name="admin.login" path="/login" component={AdminLoginPage} />
    </Route>
  </Route>
)
