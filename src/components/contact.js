import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

import avatar from './../images/avatar.png';
function Contact() {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Minh Tuan VO</h2>
          <img
            src={avatar}
            alt="avatar"
            style={{ height: '250' }}
          ></img>
          <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
            À la recherche d’un stage de 4 ou 5 mois à partir de 4/2020 dans le métier de développeur front-end.
            Passionné par la réalisation et le développement de sites web.
            Travailleur, efficace, sociable, organisé et créatif dans travail, titulaire d'un diplôme d'ingénieur informatique option web, ma formation m’a permis d’acquérir les connaissances, tant frond-end que back-end.
          </p>
        </Cell>
        <Cell col={6}>
          <h2>Contactez moi</h2>
          <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: "35px", fontFamily: "Anton"}}>
                  <i className="fa fa-phone-square" aria-hidden="true"></i>
                  06 66 81 77 21
                  </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: "35px", fontFamily: "Anton"}}>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  vominhtuan164@gmail.com
                  </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: "35px", fontFamily: "Anton"}}>
                  <i className="fa fa-skype" aria-hidden="true"></i>
                  vominhtuan164
                  </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: "35px", fontFamily: "Anton"}}>
                  <i className="fa fa-home" aria-hidden="true"></i>
                  19 Rue des Fonds Gaidons
                  </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Contact;
