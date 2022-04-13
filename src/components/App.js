import React from 'react'
import img1 from '../images/willamreads.png'
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Routes } from 'react-router-dom';
import Projects from '../pages/Projects'

function App(){
  return(
    <div>
        <Nav />
        <Main />
    </div>
  )
}
    

function Nav(){
  return(
        <header>
            <nav className='nav'>
                <img src={img1} className="nav-logo" alt="logo" />
                <Headers />
                <ul className="nav-items">
                    <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/projects'>Projects</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/blog'>Blog Page</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
                </ul>
            </nav>
        </header>
  );
}

function Main(){
  return(
    <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/projects' element={< Projects />}></Route>
      <Route exact path='/blog' element={< Blog />}></Route>
      <Route exact path='/about' element={< About />}></Route>
    </Routes>
  );
}

function Headers(){
  return(
  <Routes>
      <Route exact path='/' element={<h1>Home</h1>}></Route>
      <Route exact path='/projects' element={<h1>Projects</h1>}></Route>
      <Route exact path='/blog' element={<h1>Blog</h1>}></Route>
      <Route exact path='/about' element={<h1>About</h1>}></Route>
    </Routes>
  );
}

function Home(){
  return(
    <div className='home'>
      <h1>Welcome to my portfolio website</h1>
      <p> Feel free to browse around and learn more about me.</p>
    </div>
  );
}

function Blog(){
  return(
    <div className='blog'>
      <h1>Contact Me</h1>
      <p>You can reach me via email: <strong>hello@example.com</strong></p>
    </div>
  );
  }

  function About(){
  return(
    <div className='about'>
      <h1>About Me</h1>
      <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
      <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    </div>
  ); 
  }
  
export default App;