// AddCalendarEventScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../Header/Header';

const CalendarEventScreen = ({ onGoBack }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // states to track the validity of each field
  const [isDateValid, setDateValid] = useState(true);
  const [isStartTimeValid, setStartTimeValid] = useState(true);
  const [isEndTimeValid, setEndTimeValid] = useState(true);

  // regex checks to make sure user input is valid.
  const dateRegex = /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  const timeRegex = /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/i;

  return (
    <View style={styles.container}>
      <Header title="ADD CALENDAR EVENT" />
      <View style={styles.content}>
        <Text style={styles.headerText}>INFO:</Text>
        <TextInput
          style={styles.input}
          placeholder="TITLE"
          placeholderTextColor="#666"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="LOCATION"
          placeholderTextColor="#666"
          value={location}
          onChangeText={setLocation}
        />
        {!isDateValid && (
          <Text style={styles.errorText}>Please enter a valid date.</Text>
        )}
        <TextInput
          style={[styles.input, !isDateValid && styles.invalidInput]}
          placeholder="DATE (MM/DD/YYYY)"
          placeholderTextColor="#666"
          value={date}
          onChangeText={setDate}
          onBlur={() => setDateValid(dateRegex.test(date))}
        />
        <Text style={styles.headerText}>TIME:</Text>
        {!isStartTimeValid && (
          <Text style={styles.errorText}>Please enter a valid start time.</Text>
        )}
        <TextInput
          style={[styles.input, !isStartTimeValid && styles.invalidInput]}
          placeholder="START TIME (HH:MM AM/PM)"
          placeholderTextColor="#666"
          value={startTime}
          onChangeText={setStartTime}
          onBlur={() => setStartTimeValid(timeRegex.test(startTime))}
        />
        {!isEndTimeValid && (
          <Text style={styles.errorText}>Please enter a valid end time.</Text>
        )}
        <TextInput
          style={[styles.input, !isEndTimeValid && styles.invalidInput]}
          placeholder="END TIME (HH:MM AM/PM)"
          placeholderTextColor="#666"
          value={endTime}
          onChangeText={setEndTime}
          onBlur={() => setEndTimeValid(timeRegex.test(endTime))}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={onGoBack} style={styles.footerButton}>
          <Text style={styles.footerButtonTextX}>✕</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onGoBack} style={styles.footerButton}>
          <Text style={styles.footerButtonTextCheck}>✔</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f0f0f',
    paddingTop: 50,
    width: '100% !important',
  },
  headerText: {
    color: '#f0f0f0',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  content: {
    width: '100% !important',
  },
  input: {
    color: '#f0f0f0',
    backgroundColor: 'black',
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    width: '100% !important',
    fontWeight: 'bold',
  },
  invalidInput: {
    backgroundColor: 'rgb(252, 111, 111)',
  },
  errorText: {
    color: 'rgb(252, 111, 111)',
    fontSize: 14,
    marginBottom: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
    paddingTop: 30,
  },
  footerButton: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtonTextX: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'rgb(252 111 111)',
  },
  footerButtonTextCheck: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'rgb(38 233 57)',
  },
});

export default CalendarEventScreen;
