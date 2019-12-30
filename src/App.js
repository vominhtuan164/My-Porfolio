import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './components/main'
function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color nav-link" title="Minh Tuan VO" scroll>
          <Navigation>
            <Link to="/resume" className="nav-link">Resume</Link>
            <Link to="/about" className="nav-link">About Me</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/resume" className="nav-link">Resume</Link>
            <Link to="/about" className="nav-link">About Me</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
