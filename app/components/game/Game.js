import React, { Component } from 'react';
import Stats from '../../containers/StatsContainer.js';
import Inventory from '../../containers/InventoryContainer.js';
import RestartButton from '../../containers/RestartButtonContainer';
import GenericBlock from '../shared/GenericBlock';
import { Grid, Row, Col } from 'react-bootstrap';

class Game extends Component {
  // Chargement de la position
  componentDidMount() {
    const title = localStorage.getItem('title');
    if (title) {
      this.props.fetchStory(title);
    } else {
      this.props.fetchStory(this.props.game.story.title);
    }
  }

  // Change la position du personnage
  changePosition(title) {
    this.props.fetchStory(title);
    localStorage.setItem('title', title);
  }

  displayRestartButton() {
    return <RestartButton />;
  }
  displayChoices() {
    return (
      <div>
        {this.props.game.story.next.map((choices, i) => {
          return (
            <button
              className="App-btn App-btn-yellow"
              key={i}
              onClick={() => this.changePosition(choices.id)}
            >
              {choices.text}
            </button>
          );
        })}
      </div>
    );
  }
  // Propose le choix du prochain chapitre au joueur
  hasChoice() {
    if (this.props.game.story.next && this.props.game.story.next.length > 0) {
      return this.displayChoices();
    } else {
      return this.displayRestartButton();
    }
  }

  displayStoryMedia() {
    var media = '';
    if (this.props.game.story.media && this.props.game.story.media.url) {
      if (this.props.game.story.media.type === 'image') {
        media = (
          <img
            src={this.props.game.story.media.url}
            className="storyImage img-fluid"
            alt=""
          />
        );
      }
      if (this.props.game.story.media.type === 'video') {
        media = (
          <iframe
            title={this.props.game.story.title}
            className="storyVideo"
            src={this.props.game.story.media.url + '?autoplay=1'}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        );
      }
    }
    return media;
  }

displayStoryContent(){
  return(<div><h3>{this.props.game.story.resume}</h3>
  <p style={{ fontSize: 20 }}>{this.props.game.story.text}</p>
  <div className="App-choices">{this.hasChoice()}</div></div>);
}
  displayCharacterInfos(title1, content1,title2, content2) {
    return (
      <Grid fluid>
        <Row>
          <Col sm={6}>
            <GenericBlock
              xs={10}
              xsOffset={2}
              noGrid
              title={title1}
            >
              {content1}
            </GenericBlock>
          </Col>
          <Col sm={6}>
            <GenericBlock
              xs={10}
              xsOffset={0}
              noGrid
              title={title2}
            >
            {content2}
            </GenericBlock>
          </Col>
        </Row>
      </Grid>
    );
  }

  displayGame(title1, content1,title2, content2) {
    return (
      <Grid fluid>
        <Row className="equal">
          <Col sm={6} className="vcenter">
            <GenericBlock
              xs={10}
              xsOffset={2}
              noGrid
              title={title1}
              defaultOpen
            >
              {content1}
            </GenericBlock>
          </Col>
          <Col sm={6} className="vcenter">
            <GenericBlock
              xs={10}
              xsOffset={0}
              noGrid
              title={title2}
              defaultOpen
            >
            {content2}
            </GenericBlock>
          </Col>
        </Row>
      </Grid>
    );
  }

  render() {
    return (
      <div>
        {this.displayCharacterInfos("Status du personnage",<Stats />,"Inventaire du personnage",<Inventory />)}
        {this.displayGame("Ecran",this.displayStoryMedia(),"Aventure",this.displayStoryContent())}
      </div>
    );
  }
}

export default Game;
