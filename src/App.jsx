import React, { useState } from 'react';


function App() {
  const [activeMenu, setActiveMenu] = useState('about');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="font-oswald text-lg">
      <header className="bg-white p-4 text-center">
        <nav className="flex justify-center mb-5">
          <a 
            href="#writing" 
            className={`mx-4 p-2 ${activeMenu === 'writing' ? 'text-pink-600' : 'text-black'}`} 
            onClick={() => handleMenuClick('writing')}
          >
            Writing
          </a>
          <a 
            href="#about" 
            className={`mx-4 p-2 ${activeMenu === 'about' ? 'text-pink-600' : 'text-black'}`} 
            onClick={() => handleMenuClick('about')}
          >
            About
          </a>
        </nav>
        <div className="w-[490.67px] h-[168px] mx-auto flex flex-col justify-center items-center text-center border border-gray-300">
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
      <div className="additional-content p-5 text-center">
        <h3 className="font-normal">Nothing is more satisfying than creating something from scratch and putting it into the hands of thousands of users.
            That’s why I work as a front-end developer – primarily on web applications projects. 
            I love pushing pixels and really sweat the details, but
            I also love looking at the bigger picture to create architectures that hold up over time.</h3>
      </div>
    </div>
  );
}

export default App;
