import React from 'react';

function CreateCard() {
  return (
    <div>
      <label htmlFor="front">Front</label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="front"
          aria-describedby="basic-addon3"
        />
      </div>
      <label htmlFor="back">Back</label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="back"
          aria-describedby="basic-addon3"
        />
      </div>
      <label htmlFor="usage">Usage</label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="usage"
          aria-describedby="basic-addon3"
        />
      </div>
      <button type="button" className="btn btn-primary btn-lg btn-block">
        Save
      </button>
    </div>
  );
}

export default CreateCard;
