import React from 'react';

const Card = ({ name, email, id }) => { //destructured props in the parathesis 
  // const { name, email, id } = props;
  //or instead you can use name.props below

  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
