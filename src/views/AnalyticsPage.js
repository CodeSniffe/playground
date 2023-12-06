import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Colors from '../../assets/colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.default.background,
    flex: 1,
  },
  text: {
    color: Colors.default.primary,
  },
});

const AnalyticsPage = () => {
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.text}>AnalayticsPage</Text>
    </SafeAreaView>
  );
};

export default AnalyticsPage;
