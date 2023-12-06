import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { medium } from '../components/customFonts';

const styles = StyleSheet.create({
  text: {
    fontFamily: medium,
  },
});

const HomePage = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Homepage</Text>
    </SafeAreaView>
  );
};

export default HomePage;
