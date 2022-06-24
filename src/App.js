import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import Home from './containers/Home/Home';
// import About from './containers/About/About';
import routes from './App/routes';
import { Suspense, useState } from 'react';
//NotFoundPage
import './App.css';

const components = {
  home: <Home />,
  // about: <About />,
};

function App() {
  const [showNav, setShowNav] = useState(null);
  const handleToggleNav = () => setShowNav(!showNav);

  return (
    <Suspense>
      <Router>
        <div className='md:flex md:w-full'>
          <SideBar handleToggleNav={handleToggleNav} showNav={showNav} />
          <div onClick={() => setShowNav(false)} className='md:flex-1'>
            <Routes>
              {routes.map(({ path, exact, label }, i) => (
                <Route
                  key={i}
                  path={path}
                  exact={exact}
                  element={components[label]}
                />
              ))}
              {/* <Route element={NotFoundPage} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
