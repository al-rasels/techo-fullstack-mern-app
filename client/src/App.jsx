import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
