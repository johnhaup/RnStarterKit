/**
 * @format
 */

import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { MasterText } from '../MasterText';

it('renders correctly', () => {
  const snap = renderer.create(
    <MasterText xs sm lg xl red gray white bold medBold>
      Hello
    </MasterText>,
  );
  expect(snap).toMatchSnapshot();
});

it('renders correctly with props', () => {
  const snap = renderer.create(<MasterText>Hello</MasterText>);
  expect(snap).toMatchSnapshot();
});

it('return null if children are null', () => {
  const componentWithoutChildren = renderer
    .create(<MasterText>{null}</MasterText>)
    .getInstance();
  expect(componentWithoutChildren).toEqual(null);
});
