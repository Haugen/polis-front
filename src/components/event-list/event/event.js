import React from 'react';

const event = ({ event }) => {
  console.log(event);
  return (
    <>
      <div>
        <p>{event.summary}</p>
        <strong>{event.type}</strong> - <span>{event.datetime}</span> -{' '}
        <span>{event.location.name}</span>
      </div>

      <hr />
    </>
  );
};

export default event;
