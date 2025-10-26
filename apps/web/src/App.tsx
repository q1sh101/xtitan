import { View, StyleSheet } from 'react-native';
import { Button, Text } from '@xtitan/ui';
import { APP_NAME, APP_VERSION } from '@xtitan/core';
import { colors, spacing } from '@xtitan/theme';

export const App = () => {
  const handlePress = () => {
    alert('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{APP_NAME}</Text>
      <Text style={styles.version}>v{APP_VERSION}</Text>
      <View style={styles.spacer} />
      <Button title="Click Me" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
  },
  version: {
    fontSize: 16,
    color: colors.text,
    opacity: 0.7,
  },
  spacer: {
    height: spacing.lg,
  },
});