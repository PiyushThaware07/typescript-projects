import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroductionClass from "./components/class/IntroductionClass";
import RevisionClass from "./components/class/RevisionClass";
import ApiCall from "./components/function/ApiCall";
import Introduction from "./components/function/Introduction";
import Revision from "./components/function/Revision";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="">
      <Router>
      <Navbar/>
        <Routes>
          <Route
            path="/"
            element={
              <div className="functional-components w-full p-10">
                <Introduction name="James Smith" email="James.smith@gmail.com" password={12345} />
                <Revision />
                <ApiCall />
              </div>
            } />
          <Route
            path="/class"
            element={
              <div className="class-components w-full mt-10 p-10">
                <IntroductionClass
                  studentName={"Emily Smith"}
                  studentEmail={"Emily.smith@gmail.com"}
                  studentRollNo={255}
                  studentScore={79}
                  studentAge={18} />
                <RevisionClass />
              </div>} />
        </Routes>
      </Router>
    </main>
  );
}
