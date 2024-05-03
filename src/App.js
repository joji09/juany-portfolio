import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import routePaths from "./routes/routePaths";
import content from "./content";
import ProjectInfo from "./views/ProjectInfo";


function App() {
  return (
    <Router>
      <Routes>
        {content.projects.map((project) => (
          <Route key={project.path} path={"/" + project.path} element={<ProjectInfo ProjectInfoObject={project} />} />
        ))}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
