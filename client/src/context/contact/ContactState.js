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
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add contact
  //Delete contact
  //Set Current contact
  //clear current contact
  //update contact
  //filter contacts
  //clear filter
  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
}
