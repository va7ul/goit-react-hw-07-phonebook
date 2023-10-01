import { useSelector } from 'react-redux';
import { ContactListCard } from 'components/ContactListCard/ContactListCard.jsx';
import { List } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(item => (
        <li key={item.id}>
          <ContactListCard item={item} />
        </li>
      ))}
    </List>
  );
};
