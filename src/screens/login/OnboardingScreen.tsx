import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';
import { onScrollEvent, useValue } from 'react-native-redash';
import { AbsoluteContainer } from '../../components/primitives/AbsoluteContainer';
import { MasterText } from '../../components/primitives/MasterText';
import { Row } from '../../components/primitives/Row';
import { Spacer } from '../../components/primitives/Spacer';
import { useTypedAction } from '../../store/hooks';
import { ColorPalette, measurements } from '../../styles';

const SceneOne = () => (
  <View style={styles.scene}>
    <MasterText xl gray>
      Onboarding Scene 1
    </MasterText>
  </View>
);

const SceneTwo = () => (
  <View style={styles.scene}>
    <MasterText lg red>
      Onboarding Scene 2
    </MasterText>
  </View>
);

const SceneThree = () => {
  const setOnboardingComplete = useTypedAction(
    (s) => s.user.setOnboardingComplete,
  );

  return (
    <View style={styles.scene}>
      <MasterText xs bold>
        Onboarding Scene 3
      </MasterText>
      <Button title={'Done'} onPress={() => setOnboardingComplete(true)} />
    </View>
  );
};

const Indicators = ({
  count,
  scrollValue,
}: {
  count: number;
  scrollValue: Animated.Value<number>;
}) => {
  const indicators = new Array(count).fill(null).map((_, i) => i);
  const half = measurements.SCREEN_WIDTH * 0.5;

  const renderIndicator = (index: number) => {
    const full = index * measurements.SCREEN_WIDTH;
    // Android screens sometimes don't have an integer for screen width (ex: 300.81234).
    // This can create inconsistency with the threshold measurements,
    // Adding the 1 px buffer before and after the threshold for full fixes this
    const inputRange = [full - half, full - 1, full, full + 1, full + half];
    const isLast = index === count - 1;
    const opacity = interpolate(scrollValue, {
      inputRange,
      outputRange: [0.5, 1, 1, 1, 0.5],
      extrapolate: Extrapolate.CLAMP,
    });

    const scale = interpolate(scrollValue, {
      inputRange,
      outputRange: [0.8, 1, 1, 1, 0.8],
      extrapolate: Extrapolate.CLAMP,
    });

    const style = [
      styles.indicator,
      { marginRight: isLast ? 0 : 8, opacity, transform: [{ scale }] },
    ];

    return <Animated.View key={`indicator_${index}`} style={style} />;
  };

  return (
    <AbsoluteContainer bottom left right center>
      <Row>{indicators.map(renderIndicator)}</Row>
      <Spacer safeBottom height={20} />
    </AbsoluteContainer>
  );
};

export const OnboardingScreen = () => {
  const scrollValue = useValue(0);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        scrollEventThrottle={16}
        onScroll={onScrollEvent({ x: scrollValue })}>
        <SceneOne />
        <SceneTwo />
        <SceneThree />
      </Animated.ScrollView>
      <Indicators count={3} scrollValue={scrollValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    width: measurements.SCREEN_WIDTH,
    height: measurements.SCREEN_HEIGHT,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: ColorPalette.blue,
  },
});
