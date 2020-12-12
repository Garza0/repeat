import React from 'react';

function CreateDeck() {
  return (
    <div>
      <label htmlFor="name">Deck Name</label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="basic-addon3"
        />
      </div>
      <button type="button" className="btn btn-primary btn-lg btn-block">
        Save
      </button>
    </div>
  );
}

export default CreateDeck;
