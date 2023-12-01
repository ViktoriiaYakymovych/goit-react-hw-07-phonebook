import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { ContactCard } from 'components/ContactCard/ContactCard';
import { StyledList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <StyledList>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <ContactCard contact={contact} />
        </li>
      ))}
    </StyledList>
  );
};
