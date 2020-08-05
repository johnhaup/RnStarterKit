import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Spacer } from '../../components/primitives/Spacer';
import { Modals, NavigationProps } from '../../navigation/types';
import * as auth0 from '../../services/auth0';
import { useTypedAction } from '../../store/hooks';
import { ColorPalette, measurements } from '../../styles';

export const AModal = ({
  navigation,
  route,
}: NavigationProps<Modals.A_MODAL>) => {
  const modalNavProp = route.params?.modalNavProp;
  const setAuth = useTypedAction((s) => s.user.setAuth);

  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const dismiss = () => navigation.goBack();

  const onGooglePress = async () => {
    try {
      const response = await auth0.socialLogin(auth0.SocialConnection.GOOGLE);
      console.log(response);
      const fetchedAt = Math.floor(new Date().valueOf() / 1000); // Auth0 expirations are set in seconds, not ms
      setAuth({ ...response, fetchedAt });
      dismiss();
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmitPress = async () => {
    try {
      const response = await auth0.sendEmailCode(email);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmitCodePress = async () => {
    try {
      const response = await auth0.validateEmailCode(email, code);
      console.log(response);
      const fetchedAt = Math.floor(new Date().valueOf() / 1000); // Auth0 expirations are set in seconds, not ms
      setAuth({ ...response, fetchedAt });
      dismiss();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text>A Modal</Text>
        <Text>{modalNavProp}</Text>
        <Spacer height={12} />
        <Button onPress={onGooglePress} title={'Google Login'} />
        <Spacer height={12} />
        <TextInput
          style={styles.textInput}
          placeholder={'Email'}
          value={email}
          onChangeText={(t) => setEmail(t)}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          returnKeyType={'send'}
          onSubmitEditing={onSubmitPress}
        />
        <Spacer height={12} />
        <TextInput
          style={styles.textInput}
          placeholder={'Code'}
          value={code}
          onChangeText={(t) => setCode(t)}
          keyboardType={'number-pad'}
        />
        <Button onPress={onSubmitCodePress} title={'Submit Code'} />
        <Spacer height={12} />
        <Button onPress={dismiss} title={'Dismiss'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
    width: measurements.SCREEN_WIDTH - 48,
    height: measurements.SCREEN_HEIGHT * 0.5,
    borderRadius: 8,
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: ColorPalette.gray,
    borderRadius: 5,
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
  },
});
