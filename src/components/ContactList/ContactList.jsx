import { ContactItems } from 'components/ContactItems/ContactItems';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectfilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectfilteredContacts);

  return (
    <>
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItems key={id} id={id} name={name} number={number} />
        ))}
      </List>
    </>
  );
};
