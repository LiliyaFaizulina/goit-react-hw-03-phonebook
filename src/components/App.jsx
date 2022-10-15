import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { SearchFilter } from "./SearchFilter/SearchFilter";
import { Head, SubHead, Container } from "./App.styled";

const INITIAL_STATE = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
};

export class App extends Component {
  state = {
    ...INITIAL_STATE
  }

  updateContactList = (newContact) => {
    this.setState(prevState=>({contacts: [newContact, ...prevState.contacts]}))
  }

  filterContacts = (e) => {
    const value= e.target.value.toLowerCase();
    this.setState({ filter: value });

  }

  deleteContact = (e) => {
    const id = e.target.dataset.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=> contact.id !== id)
    }))
  }
  
  render() {
    const { updateContactList, state: {contacts, filter}, filterContacts, deleteContact } = this;
    return (
      <Container>
        <Head>Phonebook</Head>
        <ContactForm
          contactList={contacts}
          updateContactList={updateContactList}
        />
        <SubHead>Contacts</SubHead>
        <SearchFilter filter={filter} filterContacts={filterContacts} />
        <ContactList contacts={contacts} filter={filter} deleteContact={deleteContact} />
        </Container>
    )
  }
};
