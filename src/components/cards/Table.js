import React from 'react';
import { useSelector } from 'react-redux';
import columns from './columns';
import { Table } from 'antd';
import 'antd/lib/table/style/index.css';
import 'antd/lib/pagination/style/index.css';

function CardsTable() {
  const cards = useSelector((state) => state.cardsReducer.cards);
  const data = [];
  cards.map((card, i) => {
    data.push({
      key: i,
      front: card.front.value,
      back: card.back.value,
      decks: card.decks.join(', '),
      learnLevel: card.learnLevel,
    });
    return null;
  });
  return <Table columns={columns} dataSource={data} />;
}

export default CardsTable;
