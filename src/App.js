import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import Rightbar from "./components/Rightbar";
import Login from "./components/Login";

import { useSelector } from "react-redux";

function App() {

  const user = useSelector(state => state.user.user);


  return (
    <>
      
      {
        !user ? (<Login />) : (
          <div className="app">
            <Header />
            <div className="main">
              <Sidebar />
              <Posts />
              <Rightbar />
            </div>
          </div>
        )
      }

    </>
  );
}

export default App;
