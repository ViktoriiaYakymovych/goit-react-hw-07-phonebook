import { Toaster } from 'react-hot-toast';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Layout } from 'components/Layout';

export const App = () => {
  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      <Toaster />
    </Layout>
  );
};
