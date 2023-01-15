import "./App.css";
import Tasks from "./components/Tasks";
import UserView from "./components/UserView";

function App() {
  return (
    <>
      <main className="App">
        <Tasks />
        <UserView />
      </main>
    </>
  );
}

export default App;
