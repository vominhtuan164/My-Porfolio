import React from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from './../images/avatar.png';

function Landing() {
  return (
    <div style={{width: '100%', margin: 'auto'}}>
      <Grid className='landing-grid'>
        <Cell col={12}>
          <img
            src={avatar}
            alt='avatar'
            className="avatar-img"
          />
          <div className="banner-text">
            <h1>Développeur Front End </h1>
            <hr/>
            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | TypeScript | MySQL | MongoDB</p>
            <div className="social-links">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/minhtuanvo/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>

              {/* GitHub */}
              <a href="https://github.com/vominhtuan164" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/tuan.vominh.7792" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>

            </div>
          </div>
          
        </Cell>
      </Grid>
    </div>
  );
}

export default Landing;
