import React, { Component } from 'react';

import EventList from './components/event-list/event-list';

class App extends Component {
  state = {
    loading: true,
    events: []
  };

  async componentDidMount() {
    const latestEventsData = await fetch(
      'http://localhost:3001/api/events/get-latest'
    );
    const latestEvents = await latestEventsData.json();

    this.setState({
      loading: false,
      events: latestEvents
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Polishändelser</h1>
            {this.state.loading ? '' : <EventList events={this.state.events} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
