import './css/app.css';

function App() {
  const handleMouseEnter = (e) => {
    const el = e.target;
    el.style.top = `${Math.random() * window.innerHeight}px`;
    el.style.left = `${Math.random() * window.innerWidth}px`;
  }

  return (
    <div className="app">
      <div className="el" onMouseEnter={handleMouseEnter}> 30 Days of React</div>
    </div>
  );
}

export default App;
