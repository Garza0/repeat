import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import './CreateCardModal.css';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

function CreateCardModal() {
  const dispatch = useDispatch();

  const createCardModalVisibility = useSelector(
    (state) => state.modalWindowsReducer.createCardVisibility
  );

  const initialCardState = {
    decks: [],
    showDates: [],
    date: new Date(),
    front: { type: 'text', value: '' },
    back: { type: 'text', value: '' },
    nextShow: new Date(),
    learnLevel: 0,
  };

  const [cardInfo, setCardInfo] = useState(initialCardState);

  const onSubmit = (e) => {
    e.preventDefault();

    const card = {
      decks: cardInfo.decks,
      showDates: cardInfo.showDates,
      date: cardInfo.date,
      front: cardInfo.front,
      back: cardInfo.back,
      nextShow: cardInfo.nextShow,
      learnLevel: cardInfo.learnLevel,
    };
    setCardInfo(initialCardState);
    dispatch(actionCreator.addCard(card));
  };

  useEffect(() => {
    dispatch(actionCreator.initDecks());
  }, [dispatch]);

  function onChangeFront(e) {
    setCardInfo({
      ...cardInfo,
      front: { ...cardInfo.front, value: e.target.value },
    });
  }

  function onChangeBack(e) {
    setCardInfo({
      ...cardInfo,
      back: { ...cardInfo.back, value: e.target.value },
    });
  }

  const onCancelCreateCardModal = (e) => {
    e.stopPropagation();
    dispatch(actionCreator.changeCreateCardModalVisible(false));
  };
  const decks = useSelector((state) => state.decksReducer.decks);

  const deckSelect = () => {
    const onDeckSelectChange = (e) => {
      const selectionArr = [...e.target.selectedOptions];
      const selectionIds = selectionArr.map((option) => {
        return option.id;
      });
      console.log(selectionIds);
      setCardInfo({ ...cardInfo, decks: [...selectionIds] });
    };

    const options = decks.map((deck) => {
      return (
        <option id={deck._id} key={deck._id} value={deck.description}>
          {deck.description}
        </option>
      );
    });
    return (
      <select
        className="select--multiple"
        multiple
        onChange={onDeckSelectChange}
      >
        {options}
      </select>
    );
  };

  if (!createCardModalVisibility) return null;
  return (
    <div className="create_card_modal modal modal--center">
      <CancelPresentationIcon onClick={onCancelCreateCardModal} />
      <form onSubmit={onSubmit}>
        <textarea
          className="input create_card-textarea"
          onChange={onChangeFront}
          value={cardInfo.front.value}
          type="text"
          required
          placeholder="Front Side"
        />
        <textarea
          className="input create_card-textarea"
          onChange={onChangeBack}
          value={cardInfo.back.value}
          type="text"
          required
          placeholder="Back Side"
        />
        {deckSelect()}

        <input type="submit" value="Save" className="btn" />
      </form>
    </div>
  );
}

export default CreateCardModal;
