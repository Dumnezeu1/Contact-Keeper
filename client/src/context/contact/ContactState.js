import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  REMOVE_ALERT,
  SET_ALERT,
  SET_CURRENT,
  UPDATE_CONTACT
} from "../type";

export default function ContactState(props) {
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
    current: null
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
  //clear filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
        current: state.current,
        setCurrent,
        clearCurrent,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}
