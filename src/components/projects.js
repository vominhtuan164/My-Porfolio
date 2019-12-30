import React, { useState } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import TodoList from './../images/TodoList.png';
import ShoppingCart from './../images/ShoppingCart.jpg';
import MyPorfolio from './../images/MyPorfolio.png';
function Projects(props) {
  const [activeTab, setActiveTab] = useState({
    value: 0
  });

  const toggleCategories = () => {
    if (activeTab.value === 0) {
      return (
        <div className="projects-grid">
          {/* Projet 1: Liste des tâches */}
          <Card shadow={0} style={{ minWidth: '450px', margin: 'auto' }}>
            <CardTitle style={{ color: '#c92a2a', height: '567px', background: `url(${TodoList}) center / cover` }}>Liste des tâches</CardTitle>
            <CardText>
              Une todo list (anglicisme), ou liste de tâches, est un procédé qui se veut simple et efficace pour gérer les tâches d'un projet.
              J'ai fait ce projet uniquement avec ReactJS.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: 'black' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Projet 2: Panier d'achat */}
          <Card shadow={0} style={{ minWidth: '450px', margin: 'auto' }}>
            <CardTitle style={{ color: '#c92a2a', height: '567px', background: `url(${ShoppingCart}) center / cover` }}>Panier d'achat</CardTitle>
            <CardText>
              Un panier d'achat est un logiciel de commerce électronique qui permet aux visiteurs d'un site Internet de sélectionner des articles à acheter éventuellement.
              J'ai fait ce projet en utilisant ReactJS et Redux.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: 'black' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Projet 3: Ma portefeuille */}
          <Card shadow={0} style={{ minWidth: '450px', margin: 'auto' }}>
            <CardTitle style={{ color: '#c92a2a', height: '567px', background: `url(${MyPorfolio}) center / cover` }}>Ma portefeuille</CardTitle>
            <CardText>
              Mon CV en ligne
              J'ai fait ce projet en utilisant ReactJS et Redux (react-redux et redux-router).
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: 'black' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (activeTab.value === 1) {
      return (
        <div>
          <h1>This is NodeJS</h1>
        </div>
      );
    } else if (activeTab.value === 2) {
      return (
        <div>
          <h1>This is Python</h1>
        </div>
      );
    } else if (activeTab.value === 3) {
      return (
        <div>
          <h1>This is C</h1>
        </div>
      );
    }

  };

  return (
    <div className="category-tabs">
      <Tabs activeTab={activeTab.value} onChange={(tabId) => setActiveTab({ value: tabId })} ripple>
        <Tab>React</Tab>
        <Tab>NodeJS</Tab>
        <Tab>Python</Tab>
        <Tab>C</Tab>
      </Tabs>
      <Grid >
        <Cell col={12}>
          <div className="project-content">
            {toggleCategories()}
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Projects;
