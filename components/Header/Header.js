// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Default Header that is sized and styled
// uniformly across all screens.
const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#f0f0f0',
    fontWeight: 'bold',
    color: '#f0f0f0',
    fontSize: 20,
    marginBottom: 30,
  },
});

export default Header;