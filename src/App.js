import React, { useState } from "react";
import Counter from "./Counter.js";
import CounterHooks from "./CounterHooks.js";

export const ThemeContext = React.createContext();

/*Context has two attributes.  A provider and a consumer.  A
 */

function App() {
  const [theme, setTheme] = useState("red");
  console.log("Render App");
  // Functions expect you to return one  thing and nothing more!
  // This why all the html tags are nested within eachother
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <h1>Class Counter</h1>
      <Counter initialCount={0} />
      <p></p>
      <h1>Hook Counter</h1>
      <CounterHooks />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >Change Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
