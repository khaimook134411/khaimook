import Content from './component/content/content'
import Navbar from './component/navbar/navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Skill from './component/skill/skill';
import Education from './component/education/education';
import Stories from './component/stories/stories'

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
        <Route exact path="/khaimook">
          <Content />
        </Route>
        <Route path="/khaimook/skill">
          <Skill />
        </Route>
        <Route path="/khaimook/education">
          <Education />
        </Route>
        <Route path="/khaimook/stories">
          <Stories />
        </Route>
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
