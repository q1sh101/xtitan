import React from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';
import { colors } from '@xtitan/theme';

export const Text: React.FC<TextProps> = ({ style, ...props }) => {
  return <RNText style={[styles.text, style]} {...props} />;
};

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: 16,
  },
});