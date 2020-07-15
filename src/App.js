import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import "./styles.css";

const Accordion = lazy(() => import("./components/Accordion"));
const Search = lazy(() => import("./components/Search"));
const Dropdown = lazy(() => import("./components/Dropdown"));
const Translate = lazy(() => import("./components/Translate"));

// for Search component

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a faviorite js library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by using React ",
  },
];

const options = [
  {
    label: "the color Red",
    value: "red",
  },
  {
    label: "the color Green",
    value: "green",
  },
  {
    label: "the color blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<div>Loading...Coding Split</div>}>
          <Header />
          <Route
            exact
            path="/"
            render={(props) => <Accordion {...props} items={items} />}
          />
          <Route
            exact
            path="/dropdown"
            render={(props) => (
              <Dropdown
                {...props}
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
              />
            )}
          />
          <Route
            exact
            path="/translate"
            render={(props) => <Translate {...props} />}
          />
          <Route exact path="/list" render={(props) => <Search {...props} />} />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
