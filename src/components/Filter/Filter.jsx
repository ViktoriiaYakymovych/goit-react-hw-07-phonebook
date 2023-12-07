import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { Lable, Input } from './Filter.styled';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  
  return (
    <Lable>
      Find contact by name
      <Input
        name="filter"
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </Lable>
  );
};
