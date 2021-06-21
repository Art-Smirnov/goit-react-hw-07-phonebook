import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import Container from './Components/Container';
import Spiner from './Components/Spiner';
import contactsOperations from './redux/contacts/contacts-operations';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { isLoadingContacts, error } = this.props;
    return (
      <Container>
        {error ? (
          <p>Whoops, something went wrong: {error.message}</p>
        ) : (
          <>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <Spiner isLoading={isLoadingContacts} />
            <ContactList />
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: state.contacts.loading,
  error: state.contacts.error,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
