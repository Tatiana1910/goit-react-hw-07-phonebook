import { GlobalStyle } from './GlobalStyle';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import {
  Container,
  Title,
  SectionStyle,
  Section,
  SectionTitle,
} from './App.styled';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { RotatingLines } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <SectionStyle>
        <Section>
          <SectionTitle>Add contacts</SectionTitle>
          <ContactForm />
        </Section>
        <Section>
          <SectionTitle>Contacts</SectionTitle>

          <Filter />
          {isLoading && (
            <RotatingLines height="45" width="45" strokeColor="grey" />
          )}
          <ContactList />
        </Section>
      </SectionStyle>
    </Container>
  );
};
