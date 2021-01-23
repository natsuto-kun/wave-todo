import { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Progress from "./Progress";
import { countContext } from "./contexts/countContext";
import { IListItem, listContext } from "./contexts/listContext";

const Root = () => {
  const [count, setCount] = useState<number>(0);
  const [list, setList] = useState<IListItem[]>([]);
  return (
    <countContext.Provider value={{ count: count, setCount: setCount }}>
      <listContext.Provider value={{ list: list, setList: setList }}>
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/progress" component={Progress} />
          </Switch>
        </Router>
      </listContext.Provider>
    </countContext.Provider>
  );
};

export default Root;
