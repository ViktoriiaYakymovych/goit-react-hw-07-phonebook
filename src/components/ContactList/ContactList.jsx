import { useSelector } from 'react-redux';
import { selectVisebleContacts } from 'redux/selectors';
import { ContactCard } from 'components/ContactCard/ContactCard';
import { StyledList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisebleContacts);

  return (
    <StyledList>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactCard contact={contact} />
        </li>
      ))}
    </StyledList>
  );
};
