import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Mike Jones',
        email: 'mj@gmail.com',
        phone: '111-111-1111',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Twiggy',
        email: 'tdog@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add contact
  const addContact = (contact) => {
    contact.id = v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };
  // delete contact
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };
  // set current contact
  // clear current contact
  // update contact
  // filter contacts
  // clear filter

  return (
    <ContactContext.Provider
      value={{ contacts: state.contacts, addContact, deleteContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;