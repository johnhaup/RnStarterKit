import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Modals, NavigationProps } from '../../navigation/types';
import { measurements } from '../../styles';

export const AModal = ({
  navigation,
  route,
}: NavigationProps<Modals.A_MODAL>) => {
  const modalNavProp = route.params?.modalNavProp;

  const onPress = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text>A Modal</Text>
        <Text>{modalNavProp}</Text>
        <Button onPress={onPress} title={'Dismiss'} />
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
    justifyContent: 'center',
    alignItems: 'center',
    width: measurements.SCREEN_WIDTH - 48,
    height: measurements.SCREEN_HEIGHT * 0.5,
    borderRadius: 8,
  },
});
