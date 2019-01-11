import React, { Component } from 'react';

import EventList from './components/event-list/event-list';
import Dropdown from './components/dropdown/dropdown';

const BASE_URL = 'http://localhost:3001/api/events';

class App extends Component {
  state = {
    loading: true,
    categories: [],
    activeCategory: '',
    locations: [],
    activeLocation: '',
    events: []
  };

  async componentDidMount() {
    Promise.all([
      fetch(`${BASE_URL}/categories`).then(response => response.json()),
      fetch(`${BASE_URL}/locations`).then(response => response.json())
    ]).then(result => {
      this.setState({
        categories: result[0],
        locations: result[1]
      });
      this.getEvents(`${BASE_URL}/get-latest`);
    });
  }

  getEvents = async url => {
    const latestEventsData = await fetch(url);
    const latestEvents = await latestEventsData.json();

    this.setState({
      loading: false,
      events: latestEvents
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Polishändelser</h1>
            {this.state.loading ? (
              ''
            ) : (
              <>
                <Dropdown values={this.state.locations} />
                <Dropdown values={this.state.categories} />
                <EventList events={this.state.events} />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
