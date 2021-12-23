import React from "react";
import UserList from "./components/UserList";
import "./components/Style.css";


class App extends React.Component {
  render() {
    return (
      <div className="App">
          <UserList />
          
      </div>
    );
  }
}
export default App;