import { About } from "component/About";
import { Contact } from "component/Contact";
import { SkillList } from "component/SkillList";
import Header from "../Header";
import "./App.scss";
import { Projects } from "component/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <SkillList />
      <Contact />
    </div>
  );
}

export default App;
