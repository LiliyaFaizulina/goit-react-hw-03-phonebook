import PropTypes from "prop-types";
import { Contact } from "./Contact";
import { List } from "./ContactList.styled";

export const ContactList = ({ contacts, filter, deleteContact }) => (
    <List>
        {contacts.reduce((acc, { id, name, number }) =>
            name.toLowerCase().includes(filter) ? [...acc, <Contact key={id} id={id} name={name} number={number} deleteContact={deleteContact} />] : acc, [])}
    </List>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    filter: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
}