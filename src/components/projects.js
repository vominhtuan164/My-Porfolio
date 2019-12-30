import React, { useState } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import TodoList from './../images/TodoList.png';
import ShoppingCart from './../images/ShoppingCart.jpg';

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
            <CardTitle style={{ color: 'black', height: '567px', background: `url(${TodoList}) center / cover` }}>Liste des tâches</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
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
            <CardTitle style={{ color: 'black', height: '567px', background: `url(${ShoppingCart}) center / cover` }}>Panier d'achat</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
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
