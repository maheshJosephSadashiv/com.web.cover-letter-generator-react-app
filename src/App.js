import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./views/navbar";
import JobSubmissionDetails from "./views/jobSubmissionDetails";
import Home from "./views/home";


function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobSubmissionDetails" element={<JobSubmissionDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
