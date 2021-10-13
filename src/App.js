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
        <Route exact path="/">
          <Content />
        </Route>
        <Route path="/skill">
          <Skill />
        {/* <div style={{paddingTop:100}}>skill</div> */}
        </Route>
        <Route path="/education">
          <Education />
          {/* <div style={{paddingTop:100}}>education</div> */}
        </Route>
        <Route path="/stories">
          <Stories />
          {/* <div style={{paddingTop:100}}>stories</div> */}
        </Route>
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
