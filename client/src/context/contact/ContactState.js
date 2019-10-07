import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../type";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Viorel",
        email: "viorel@yahoo.com",
        phone: "222-222-333",
        type: "personal"
      },
      {
        id: 2,
        name: "Costel Topel",
        email: "costel_topel@yahoo.com",
        phone: "321-222-333",
        type: "personal"
      },
      {
        id: 3,
        name: "Marcel",
        email: "marcel@yahoo.com",
        phone: "52-13-333",
        type: "professional"
      }
    ],
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //Set Current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //update contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //filter contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
