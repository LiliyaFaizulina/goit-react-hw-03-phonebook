import PropTypes from "prop-types";
import { FilterLabel, FilterInput } from "./SearchFilter.styled";

export const SearchFilter = ({ filter, filterContacts }) => (
    <>
    <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
    <FilterInput type="text" id="filter" value={filter} onChange={filterContacts} />
    </>
);

SearchFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterContacts: PropTypes.func.isRequired
}