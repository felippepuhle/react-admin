import React from "react";
import { Route, Redirect } from "react-router";

// Import layouts
import BaseLayout from "./layouts/Base";
import AdminLayout from "./layouts/Admin";

// Import pages
import AdminIndexPage from "./pages/index/Index";

export default (
  <Route name="admin" path="/admin" component={AdminLayout}>
    <Route name="admin.index" path="/" component={AdminIndexPage} />
  </Route>
)
