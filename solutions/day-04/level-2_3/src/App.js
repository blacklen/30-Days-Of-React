import reactLogo from './images/react_logo.png';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import jsLogo from './images/js-logo.png';
import avatar from './images/ava.jpg';
import './css/app.css';
import { Footer, TechnologyList, Profile, RandomColor } from './components';

const logos = [htmlLogo, cssLogo, jsLogo, reactLogo];
const skills = ['JS', 'Python', 'React', 'Vue', 'NodeJs', 'Django', 'HTML', 'CSS', 'Git'];

function App() {
  return (
    <div className="app">
      <h1> Level 2 </h1>
      <TechnologyList list={logos} />
      <Footer />
      <RandomColor length={5} />
      <h1> Level 3</h1>
      <Profile avatar={avatar} skills={skills} />
    </div>
  );
}

export default App;
