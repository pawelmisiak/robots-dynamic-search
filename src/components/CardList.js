import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, idx) => {
          return (
            <Card
              key={robots[idx].id}
              //for key the id is used instead of an index because
              // it has to be uniq and index might change when a robot
              // gets deleted
              id={robots[idx].id}
              name={robots[idx].name}
              email={robots[idx].email}
            />
        );
        })
      }
    </div>
  );
};

export default CardList;
