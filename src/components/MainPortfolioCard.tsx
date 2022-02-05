import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const MainPortfolioCard = (props: Props) => {
  return (
    <View style={styles.card}>
        <Text style={styles.title}>Total portfolio</Text>
    </View>
  );
};

export default MainPortfolioCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 7,
    backgroundColor: Colors.bgPink,
    margin: 10,
    padding: 10,
    minHeight: 200,
  }
});
