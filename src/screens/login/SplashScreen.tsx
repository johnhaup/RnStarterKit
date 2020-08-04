import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTypedAction } from '../../store/hooks';

export const SplashScreen = () => {
  const setLoadingComplete = useTypedAction(
    (s) => s.session.setLoadingComplete,
  );

  const fetchData = () => {
    // Do all your fetching for initial app launch
    setTimeout(() => setLoadingComplete(true), 3000);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
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
