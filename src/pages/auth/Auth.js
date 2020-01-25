import React from 'react';
import {StatusBar, Button} from 'react-native';

import { Container, HeaderLogin, Title } from './styles';

export default function Auth({navigation}) {
  return (
    <>
    <StatusBar backgroundColor="#7106ad" barStyle="light-content"  />
      <HeaderLogin />
    <Container>
      <Title>Login</Title>
      <Button title="Go To Home" onPress={()=>navigation.navigate('Home')} />
    </Container>
    </>
  );
}
