import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { Head, SubHead, Container } from './App.styled';

const CONTACTS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  updateContactList = newContact => {
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  filterContacts = e => {
    const value = e.target.value.toLowerCase();
    this.setState({ filter: value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(CONTACTS_KEY);
    if (savedContacts) this.setState({ contacts: JSON.parse(savedContacts) });
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
    }
  }

  render() {
    const {
      updateContactList,
      state: { contacts, filter },
      filterContacts,
      deleteContact,
    } = this;
    return (
      <Container>
        <Head>Phonebook</Head>
        <ContactForm
          contactList={contacts}
          updateContactList={updateContactList}
        />
        <SubHead>Contacts</SubHead>
        <SearchFilter filter={filter} filterContacts={filterContacts} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={deleteContact}
        />
      </Container>
    );
  }
}
