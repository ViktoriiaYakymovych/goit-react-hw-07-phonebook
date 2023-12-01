import { useDispatch } from 'react-redux';
import { ListWrapper, Button } from './ContactCard.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactCard = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <ListWrapper>
      <p>{name}</p>
      <p>{number}</p>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ListWrapper>
  );
};
