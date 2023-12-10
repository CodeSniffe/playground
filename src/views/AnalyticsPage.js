import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Dark } from '../../assets/colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: Dark.background,
    flex: 1,
  },
  text: {
    color: Dark.primary,
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
