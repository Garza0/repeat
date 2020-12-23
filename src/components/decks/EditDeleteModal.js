import React, { useState } from 'react';
import './EditDeleteModal.css';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';
import { Link } from 'react-router-dom';

function EditDeleteModal({ showById, id, show, deckId }) {
  const dispatch = useDispatch();

  function onDeckDelete() {
    console.log(deckId);
    dispatch(actionCreator.deleteDeck(deckId));
  }

  const onDeckEdit = () => {};

  if (show && id === showById) {
    return (
      <div className="edit_delete_modal modal">
        <div className="edit_delete_modal-content">
          <Link
            to={`/edit/${deckId}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div onClick={onDeckEdit} className="edit_delete_item">
              <EditOutlinedIcon className="edit_delete_icon" /> Edit
            </div>
          </Link>
          <div onClick={onDeckDelete} className="edit_delete_item">
            <DeleteForeverOutlinedIcon className="edit_delete_icon" /> Delete
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default EditDeleteModal;
