import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Modals, NavigationProps, Screens } from '../../navigation/types';

export const AScreen = ({ navigation }: NavigationProps<Screens.A_SCREEN>) => {
  return (
    <View style={styles.container}>
      <Text>A Screen</Text>
      <Button
        onPress={() => navigation.navigate(Screens.B_SCREEN)}
        title={'Go to B Screen'}
      />
      <Button
        onPress={() =>
          navigation.navigate(Modals.A_MODAL, {
            modalNavProp: `I'm a modal nav prop from Screen B`,
          })
        }
        title={'Go to Modal'}
      />
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
