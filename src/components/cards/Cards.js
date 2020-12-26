import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';
import Table from './Table';
import CreateCardModal from './CreateCardModal';
import { BUTTONS_TEXT } from '../../constants';

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
      <div>
        <button onClick={onCreateCardClick} type="button" className="btn">
          {BUTTONS_TEXT.CREATE_NEW_CARD}
        </button>
        <CreateCardModal />
      </div>
      <div>{<Table />}</div>
    </div>
  );
}
