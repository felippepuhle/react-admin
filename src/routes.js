import React from "react";
import { Route } from "react-router";

// Admin
import AdminTemplate from "./components/admin/template";
import AdminIndexPage from "./components/admin/index";

export default (
  <Route name="admin" path="/admin" component={AdminTemplate}>
    <Route name="admin.index" path="/" component={AdminIndexPage} />
  </Route>
)
