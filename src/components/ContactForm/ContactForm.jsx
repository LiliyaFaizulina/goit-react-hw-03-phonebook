import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormButton, Label } from './ContactForm.styled';

const nameCheckMessage =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const telCheckMessage =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    updateContactList: PropTypes.func.isRequired,
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { updateContactList } = this.props;
    updateContactList(this.state);
    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const {
      state: { name, number },
      handleInput,
      handleSubmit,
    } = this;
    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <input
            onChange={handleInput}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title={nameCheckMessage}
            required
          />
        </Label>
        <Label>
          Number
          <input
            onChange={handleInput}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title={telCheckMessage}
            required
          />
        </Label>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}
