import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import WordList from "./components/WordList/WordList";
import AddWord from "./components/AddWord/AddWord";
import WordSearch from "./components/WordSearch";

function App() {
  return (
    <BrowserRouter>
      <div id="main-wrapper" className="main-wrapper">
        <Routes>
          <Route path="/" element={<WordSearch />}></Route>
          <Route path="/list" element={<WordList />}></Route>
          <Route path="/add-word" element={<AddWord />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
