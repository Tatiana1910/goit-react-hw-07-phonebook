import { useDispatch } from 'react-redux';
import { Button, Items } from './ContactItems.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';

export const ContactItems = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Items>
      <p>
        {name}:{number}
      </p>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Items>
  );
};

ContactItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
