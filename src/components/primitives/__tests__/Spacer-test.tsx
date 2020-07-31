/**
 * @format
 */

import React from 'react';
import 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Spacer } from '../Spacer';

it('renders correctly', () => {
  const snap = renderer.create(
    <SafeAreaProvider>
      <Spacer />
    </SafeAreaProvider>,
  );
  expect(snap).toMatchSnapshot();
});

const styles = StyleSheet.create({
  blue: { backgroundColor: 'blue' },
});

it('renders correctly with all props', () => {
  const snap = renderer.create(
    <SafeAreaProvider>
      <Spacer
        flex
        h={1}
        height={1}
        w={1}
        width={1}
        safeTop
        safeBottom
        androidMenu
        tabBar
        style={styles.blue}
      />
    </SafeAreaProvider>,
  );
  expect(snap).toMatchSnapshot();
});
