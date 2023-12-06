import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import Colors from '../../assets/colors';
import Card from '../components/Card';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingHorizontal: 5,
  },
  text: {
    color: Colors.dark.background,
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
