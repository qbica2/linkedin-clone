import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <Posts />
        <Rightbar/>
        </div>
    </div>
  );
}

export default App;
