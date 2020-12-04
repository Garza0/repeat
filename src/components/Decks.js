import React from 'react';

export default function Decks() {
  return (
    <div>
      <div className="list-group">
        <button
          type="button"
          class="list-group-item list-group-item-action bg-primary text-light mb-3"
        >
          Create New Deck
        </button>
      </div>
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action">
          Cras justo odio
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          Dapibus ac facilisis in
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          Morbi leo risus
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          Porta ac consectetur ac
        </button>
      </div>
    </div>
  );
}
