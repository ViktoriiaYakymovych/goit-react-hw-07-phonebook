import { useDispatch } from 'react-redux';
import { ListWrapper, Button } from './ContactCard.styled';
import { deleteContact } from 'redux/operations';

export const ContactCard = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ListWrapper>
      <p>{name}</p>
      <p>{phone}</p>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ListWrapper>
  );
};
