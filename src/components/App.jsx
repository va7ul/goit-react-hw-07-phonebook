import { GlobalStyle } from 'GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { Filter } from './Filter/Filter.jsx';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </div>
  );
};
