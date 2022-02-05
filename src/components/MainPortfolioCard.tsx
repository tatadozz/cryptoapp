import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';

type Props = {};

const MainPortfolioCard = (props: Props) => {
  return (
    <View style={styles.card}>
        <Text style={styles.title}>Total portfolio</Text>
        <View style={styles.row}>
          <Text style={styles.currency}>$</Text>
          <Text style={styles.number}>93,284.00</Text>
          <View style={styles.percentage}>
              <Text style={styles.percentageTxt}>+10%</Text>
          </View>
        </View>
    </View>
  );
};

export default MainPortfolioCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 7,
    backgroundColor: Colors.bgPink,
    margin: 10,
    padding: 20,
    minHeight: 200,
  },
  title: {
    color: Colors.txt3,
    fontSize: 18
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  currency: {
    fontSize: 18,
    color: Colors.txt1,
    fontWeight: "bold"
  },
  number: {
    fontSize: 42,
    color: Colors.txt1,
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 10
  },
  percentage: {
    borderRadius: 50,
    backgroundColor: Colors.txt3,
    paddingVertical: 7,
    paddingHorizontal: 14
  },
  percentageTxt: {
    color: "#FFFFFF",
    fontSize: 11
  }
});
