import React, { Component } from 'react';
import goatData from '../../helpers/data/goatData';

class GoatCorral extends Component {
  state = {
    goats: [],
  };

  componentDidMount() {
    goatData.getGoats().then((resp) => {
      this.setState({
        goats: resp,
      });
    });
  }

  renderGoatToDom = () => this.state.goats.map((goat) => goat.name);

  render() {
    return (
      <div>
        <h1>Goat Corral</h1>
        {this.renderGoatToDom()}
      </div>
    );
  }
}

export default GoatCorral;
