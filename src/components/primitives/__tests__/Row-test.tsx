/**
 * @format
 */

import React from 'react';
import 'react-native';
import { StyleSheet, View } from 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Row } from '../Row';

it('renders correctly', () => {
  const snap = renderer.create(
    <Row>
      <View />
      <View />
    </Row>,
  );
  expect(snap).toMatchSnapshot();
});

const styles = StyleSheet.create({
  blue: { backgroundColor: 'blue' },
  red: { backgroundColor: 'red' },
});

it('renders correctly with all props', () => {
  const snap = renderer.create(
    <Row
      screenWidth
      between
      stretch
      flex
      height={10}
      style={[styles.blue, styles.red]}>
      <View />
      <View />
    </Row>,
  );
  expect(snap).toMatchSnapshot();
});

it('return null if children are null', () => {
  const componentWithoutChildren = renderer
    .create(<Row>{null}</Row>)
    .getInstance();
  expect(componentWithoutChildren).toEqual(null);
});
