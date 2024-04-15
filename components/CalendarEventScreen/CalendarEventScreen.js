// CalendarEventScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../Header/Header'; // Make sure this path matches your project structure

const CalendarEventScreen = ({ onNavigate }) => {
  // mock event data is for demonstration
  const mockEvent = {
    title: 'Going Fishing',
    location: 'Lake',
    date: 'Mar 4, 2024',
    startTime: '6:30 PM',
    endTime: '7:00 PM',
    completed: true,
    completedOnTime: true,
  };

  // goes to calendar
  const handleBackToCalendar = () => {
    onNavigate('Calendar');
  };

  return (
    <View style={styles.container}>
      <Header title="VIEW CALENDAR EVENT" />
      <TouchableOpacity onPress={handleBackToCalendar} style={styles.backToCalendar}>
        <Text style={styles.backToCalendarText}>CAL →</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.infoTitle}>INFO:</Text>
        <Text style={styles.infoContent}>{mockEvent.title}</Text>
        <Text style={styles.infoContent}>{mockEvent.location}</Text>
        <Text style={styles.timeTitle}>TIME:</Text>
        <Text style={styles.infoContent}>{mockEvent.date}</Text>
        <Text style={styles.infoContent}>Start: {mockEvent.startTime}</Text>
        <Text style={styles.infoContent}>End: {mockEvent.endTime}</Text>
        {mockEvent.completed && (
          <View style={mockEvent.completedOnTime ? styles.completedWrapper : styles.lateWrapper}>
            <Text style={styles.completedText}>
              {mockEvent.completedOnTime ? "COMPLETED ON TIME" : "LATE!"}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    paddingTop: 50
  },
  lateWrapper: {
    backgroundColor: 'rgb(252, 111, 111)',
    padding: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  content: {
    textTransform: 'uppercase',
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  infoTitle: {
    fontSize: 22,
    color: '#f0f0f0',
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  timeTitle: {
    fontSize: 22,
    color: '#f0f0f0',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  infoContent: {
    fontSize: 20,
    color: '#f0f0f0',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'black',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  completedWrapper: {
    backgroundColor: 'rgb(28 175 43)',
    padding: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  completedText: {
    color: '#f0f0f0',
    fontSize: 18,
  },
  backToCalendar: {
    position: 'absolute',
    right: 20,
    top: 70,
  },
  backToCalendarText: {
    color: '#f0f0f0',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CalendarEventScreen;