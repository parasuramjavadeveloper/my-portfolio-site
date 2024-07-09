import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeMenu, setActiveMenu] = useState('about');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <a 
            href="#writing" 
            className={activeMenu === 'writing' ? 'active' : ''} 
            onClick={() => handleMenuClick('writing')}
          >
            Writing
          </a>
          <a 
            href="#about" 
            className={activeMenu === 'about' ? 'active' : ''} 
            onClick={() => handleMenuClick('about')}
          >
            About
          </a>
        </nav>
        <div className="content">
          {activeMenu === 'about' ? (
            <>
              <h1>Hi, I’m PAARASURHAAM</h1>
              <p>I write about front-end development and back-end development</p>
            </>
          ) : (
            <>
              <h1>Hi, I’m PAARASURHAAM</h1>
              <p>Father, husband & full stack java developer</p>
            </>
          )}
        </div>
      </header>
      <div className="additional-content">
        <h3>Nothing is more satisfying than creating something from scratch and putting it into the hands of thousands of users.
            That’s why I work as a front-end developer – primarily on web applications projects. 
            I love pushing pixels and really sweat the details, but
            I also love looking at the bigger picture to create architectures that hold up over time.</h3>
      </div>
    </div>
  );
}

export default App;
