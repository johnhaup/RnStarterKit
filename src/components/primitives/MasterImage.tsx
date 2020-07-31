import React from 'react';
import { Image, ImageStyle, Platform } from 'react-native';
import FastImage from 'react-native-fast-image';

interface Props {
  uri?: string | undefined | null;
  disableFast?: boolean;
  contain?: boolean;
  style?: ImageStyle | ImageStyle[];
}

export const MasterImage = ({
  uri,
  disableFast,
  contain,
  style = {},
}: Props) => {
  if (!uri) {
    return null;
  }

  const resizeMode = contain ? 'contain' : 'cover';
  // Android throws error with FastImage
  const useStandardImage = disableFast || Platform.OS === 'android';

  return useStandardImage ? (
    <Image style={style} source={{ uri }} resizeMode={resizeMode} />
  ) : (
    <FastImage style={style} source={{ uri }} resizeMode={resizeMode} />
  );
};
