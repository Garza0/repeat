import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';
import Table from './Table';
import CreateCardModal from './CreateCardModal';

export default function Cards() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreator.initCards());
  }, [dispatch]);

  const onCreateCardClick = () => {
    dispatch(actionCreator.changeCreateCardModalVisible(true));
  };

  return (
    <div>
      <div className="list-group">
        <button onClick={onCreateCardClick} type="button" className="btn">
          + Create New Card
        </button>
        <CreateCardModal />
      </div>
      <div className="list-group">{<Table />}</div>
    </div>
  );
}
