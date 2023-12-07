import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import {
  StyledForm,
  Lable,
  StyledField,
  StyledError,
  Button,
} from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required field').trim(),
  number: Yup.number()
    .typeError('Must be a number')
    .required('Number is a required field'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return toast.error(
        `${newContact.name} is already added to Your contact's list`
      );
    }
    dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        addNewContact(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Lable>
          Name
          <StyledField name="name" type="text" placeholder="Name..." />
          <StyledError component="div" name="name" />
        </Lable>
        <Lable>
          Number
          <StyledField name="number" type="tel" placeholder="Number..." />
          <StyledError component="div" name="number" />
        </Lable>
        <Button type="submit">Add new Contact</Button>
      </StyledForm>
    </Formik>
  );
};
