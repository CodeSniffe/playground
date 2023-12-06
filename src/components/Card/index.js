import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});

const Card = ({ children, style, ...props }) => (
  <View style={[styles.container, style]} {...props}>
    {children}
  </View>
);

export default Card;
