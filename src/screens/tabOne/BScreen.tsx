import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Modals, NavigationProps, Screens } from '../../navigation/types';

export const BScreen = ({ navigation }: NavigationProps<Screens.B_SCREEN>) => {
  const onPress = () =>
    navigation.navigate(Modals.A_MODAL, {
      modalNavProp: `I'm a modal nav prop from Screen B`,
    });

  return (
    <View style={styles.container}>
      <Text>B Screen</Text>
      <Button onPress={onPress} title={'Go to Modal'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
