import React from 'react';
import {StatusBar, Button} from 'react-native';

import { Container, Title } from './styles';

export default function Home({navigation}) {
  return (
    <>
    <StatusBar backgroundColor="#7106ad" barStyle="light-content"  />
    <Container>
    <Title>Home</Title>
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
  </Container>
  </>
  );
}
