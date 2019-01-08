import React from 'react';

import Event from './event/event';

const eventList = props => {
  const events = [];

  props.events.forEach(event => {
    events.push(<Event key={event.id} event={event} />);
  });

  return events;
};

export default eventList;
