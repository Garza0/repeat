import React, { useState } from 'react';
import './EditDeleteModal.css';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';

function EditDeleteModal({ showById, id, show, deckId }) {
  const dispatch = useDispatch();

  function onDeckDelete() {
    console.log(deckId);
    dispatch(actionCreator.deleteDeck(deckId));
  }

  if (show && id === showById) {
    return (
      <div className="edit_delete_modal">
        <div className="edit_delete_modal-content">
          <div className="edit_delete_item">
            <EditOutlinedIcon className="edit_delete_icon" /> Edit
          </div>
          <div onClick={onDeckDelete} className="edit_delete_item">
            <DeleteForeverOutlinedIcon className="edit_delete_icon" /> Delete
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default EditDeleteModal;
