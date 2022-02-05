import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>This is LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
