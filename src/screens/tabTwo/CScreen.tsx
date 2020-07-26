import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationProps, Screens } from '../../navigation/types';

export const CScreen = ({ navigation }: NavigationProps<Screens.C_SCREEN>) => {
  const onPress = () => navigation.navigate(Screens.D_SCREEN);

  return (
    <View style={styles.container}>
      <Text>C Screen</Text>
      <Button onPress={onPress} title={'Go to D Screen'} />
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
