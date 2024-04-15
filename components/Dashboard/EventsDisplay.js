// EventsDisplay.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductivityScore from './ProductivityScore';

const EventsDisplay = () => {
  return (
    <View style={styles.eventsContainer}>
      <Text style={styles.eventsHeader}>EVENTS:</Text>
      <View style={styles.columnsContainer}>
        <View style={styles.column}>
          <Text style={styles.heading}>PAST:</Text>
          <View style={styles.pastEventOneContainer}>
            <Text style={styles.pastEventOne}>9:30 - 10 PM: [LATE]</Text>
            <Text style={styles.pastEventOneDesc}>BLAH BLAH BLAH</Text>
          </View>
          <View style={styles.pastEventTwoContainer}>
            <Text style={styles.pastEventTwo}>10 - 10:30 PM: [EARLY]</Text>
            <Text style={styles.pastEventTwoDesc}>...</Text>
          </View>
        </View>

        <View style={styles.column}>
          <ProductivityScore />
        </View>

        <View style={styles.column}>
          <Text style={styles.heading}>FUTURE:</Text>
          <View style={styles.futureEventOneContainer}>
            <Text style={styles.futureEventOne}>10 - 10:30 PM:</Text>
            <Text style={styles.futureEventOneDesc}>MAKE PLANNING APP</Text>
          </View>
          <View style={styles.futureEventTwoContainer}>
            <Text style={styles.futureEventTwo}>10:30 - 11 PM:</Text>
            <Text style={styles.futureEventTwoDesc}>...</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventsContainer: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
    marginBottom: 25,
  },
  eventsHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#f0f0f0',
    fontSize: 20,
    paddingTop: 20,
  },
  columnsContainer: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    height: 10,
  },
  column: {
    flex: 1, // each column takes equal width
    alignItems: 'center',
    padding: 10,
    height: 10,
  },
  heading: {
    fontSize: 20,
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: '#f0f0f0',
    marginBottom: 10,
  },
  pastEventOneContainer: {
    width: '100%',
    textAlign: 'center'
  },
  pastEventOne: {
    marginTop: '10px',
    color: '#FC6F6F',
    textAlign: 'center',
    textDecoration: 'underline'
  },
  pastEventOneDesc: {
    color: '#FC6F6F',
    textAlign: 'center'
  },
  pastEventTwoContainer: {
    width: '100%',
  },
  pastEventTwo: {
    marginTop: '10px',
    color: '#26E939',
    textAlign: 'center',
    textDecoration: 'underline'
  },
  pastEventTwoDesc: {
    color: '#26E939',
    textAlign: 'center'
  },
  futureEventOneContainer: {
    width: '100%',
    textAlign: 'center'
  },
  futureEventOne: {
    marginTop: '10px',
    color: '#f0f0f0',
    textAlign: 'center',
    textDecoration: 'underline'
  },
  futureEventOneDesc: {
    color: '#f0f0f0',
    textAlign: 'center'
  },
  futureEventTwoContainer: {
    width: '100%',
  },
  futureEventTwo: {
    marginTop: '10px',
    color: '#f0f0f0',
    textAlign: 'center',
    textDecoration: 'underline'
  },
  futureEventTwoDesc: {
    color: '#f0f0f0',
    textAlign: 'center'
  },
});

export default EventsDisplay;
