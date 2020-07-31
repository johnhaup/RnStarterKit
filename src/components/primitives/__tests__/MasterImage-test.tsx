/**
 * @format
 */

import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { MasterImage } from '../MasterImage';

it('renders correctly', () => {
  const snap = renderer.create(
    <MasterImage
      uri={
        'https://www.udiscovermusic.com/wp-content/uploads/2019/04/Nirvana-Live-At-Reading-press-shot-02-CREDIT-Charles-Peterson-web-optimised-1000.jpg'
      }
    />,
  );
  expect(snap).toMatchSnapshot();
});

it('returns null when no uri provided', () => {
  const imageWithoutUri = renderer.create(<MasterImage />).getInstance();
  expect(imageWithoutUri).toEqual(null);
});
