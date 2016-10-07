import React from "react";
import { Route } from "react-router";

// Admin
import AdminTemplate from "./components/admin/template";
import AdminIndexPage from "./components/admin/index";
import AdminGroupsPage from "./components/admin/group";
import AdminUsersPage from "./components/admin/user";

export default (
  <Route name="admin" path="/admin" component={AdminTemplate}>
    <Route name="admin.index" path="/" component={AdminIndexPage} />
    <Route name="admin.groups" path="/groups" component={AdminGroupsPage} />
    <Route name="admin.users" path="/users" component={AdminUsersPage} />
  </Route>
)
