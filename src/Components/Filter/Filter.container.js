import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
