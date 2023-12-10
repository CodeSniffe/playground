import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import { Dark } from '../../assets/colors';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: Dark.background,
  },
  text: {
    color: Dark.background,
  },
});

const DashboardPage = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <Text style={styles.text}>DashboardPage</Text>
      <Card>
        <Text style={styles.text}>DashboardPage</Text>
        <Text style={styles.text}>DashboardPage</Text>
        <Text style={styles.text}>DashboardPage</Text>
      </Card>
    </SafeAreaView>
  );
};

export default DashboardPage;
