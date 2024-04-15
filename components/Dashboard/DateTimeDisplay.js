// DateTimeDisplay.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    // helper function for suffixes like my figma
    const updateDateTime = () => {
          const getSuffix = (date) => {
      const j = date % 10,
            k = date % 100;
      if (j === 1 && k !== 11) {
        return "st";
      }
      if (j === 2 && k !== 12) {
        return "nd";
      }
      if (j === 3 && k !== 13) {
        return "rd";
      }
      return "th";
    };

      // date grabber: 
      const now = new Date();

      // get suffix for the date
      const dateSuffix = getSuffix(now.getDate());

      // header time display format: 
      const dateTimeString = `${now.toLocaleTimeString()} ${now.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()} ${now.toLocaleDateString('en-US', { month: 'long' }).toUpperCase()} ${now.getDate()}${dateSuffix.toUpperCase()} ${now.getFullYear()}`;

      // set time: 
      setCurrentDateTime(dateTimeString);
    };

    // update immediately on mount
    updateDateTime();

    // update every sec
    const intervalId = setInterval(updateDateTime, 1000); 

    // clear interval on unmount
    return () => clearInterval(intervalId); 
  }, []);

  // date time and everything ab it: 
  return (
    <View style={styles.dateTimeContainer}>
      <Text style={styles.dateTimeText}>{currentDateTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateTimeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
  },
  dateTimeText: {
    color: '#f0f0f0',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    textDecoration: 'underline',

  },
});

export default DateTimeDisplay;