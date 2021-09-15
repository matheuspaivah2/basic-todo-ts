import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
};
