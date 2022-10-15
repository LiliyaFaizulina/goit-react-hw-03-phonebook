import PropTypes from "prop-types";
import { ContactItem, DeleteButton } from "./ContactList.styled";
import icon from '../../images/addressBook.svg'

export const Contact = ({id, name, number, deleteContact }) => (
    <ContactItem>
        <img src={icon} alt="" width="24" height="24"/>
        <p>{name}: {number}</p>
        <DeleteButton type="button" data-id={id} onClick={deleteContact}>Delete</DeleteButton>
    </ContactItem>
    
);

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
}