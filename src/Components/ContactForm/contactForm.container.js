import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import ContactForm from './ContactForm';

const mapDispatchToProps = dispatch => ({
  onSubmit: obj => dispatch(contactsOperations.addContact(obj)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
