import reactLogo from './images/react_logo.png';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import jsLogo from './images/js-logo.png';
import avatar from './images/ava.jpg';
import './css/app.css';

const logos = [htmlLogo, cssLogo, jsLogo, reactLogo];
const skills = ['JS', 'Python', 'React', 'Vue', 'NodeJs', 'Django', 'HTML', 'CSS', 'Git'];

const level2 = (
  <div className="level2">
    <strong> Front End Technologies </strong>
    <div className="logos">
      {
        logos.map((logo, index) => (
          <img src={logo} alt="logo" key={index} />
        ))
      }
    </div>
    <footer>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <div className="fields">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="Email" />
      </div>
      <button className="submit">Subscribe</button>
    </footer>
  </div>
);

const level3 = (
  <div className="level3">
    <div className="info">
      <img className="avatar" src={avatar} alt="avatar" />
      <h3> JANE </h3>
      <i> Software Engineer, Vietnam</i>
    </div>
    <h3> SKILLS </h3>
    <div className="skills">
      {
        skills.map((skill, index) => (
          <div className="skill" key={index}> {skill} </div>
        ))
      }
    </div>
    <div className="timeline">Joined on Aug 1, 2013</div>
  </div>
);

function App() {
  return (
    <div className="app">
      <h1> Level 2 </h1>
      {level2}
      <h1> Level 3</h1>
      {level3}
    </div>
  );
}

export default App;
