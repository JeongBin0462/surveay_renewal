import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Test from "./Pages/Test";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
