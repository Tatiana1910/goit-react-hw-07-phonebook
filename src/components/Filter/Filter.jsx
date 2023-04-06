import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { onChangeInput } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = e => {
    dispatch(onChangeInput(e.target.value));
  };
  return (
    <Label>
      Find contacts by name
      <Input name="filter" type="text" value={filter} onChange={handleFilter} />
    </Label>
  );
};
