import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { fetchContacts } from 'redux/operations';
import { getContacts, getError, getIsLoading } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Layout } from 'components/Layout';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {isLoading && !error && <b>Loading...</b>}
      {contacts.length > 0 ? <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section> : <b>Contacts list will be here</b>}
      <Toaster />
    </Layout>
  );
};
