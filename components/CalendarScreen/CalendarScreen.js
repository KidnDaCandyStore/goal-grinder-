// CalendarScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../Header/Header'; // Adjust the import path based on your project structure

const CalendarScreen = ({ onNavigate }) => {
  // grab the current date, month, and year
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const today = now.getDate();

  // nav back 2 dashboard: 
  const navigateBack = () => {
    onNavigate('Dashboard');
  };

  const handleDayClick = (day) => {
    // nav to the calendarEvent view with the selected day
    // modify the navigation function to pass additional parameters as necesary
    onNavigate('CalendarEventScreen', { day: day, month: currentMonth, year: currentYear });
  };

  // helper function to get days in month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // helper function to get the day of the week the month starts on
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  // build the days for the current month
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

  // generate node days of the calendar
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<View key={`padding-${i}`} style={styles.dayContainer} onPress={handleDayClick} />); // Padding for days before the first day of the month
  }
  
  for (let i = 1; i <= daysInMonth; i++) {
    const isToday = i === today;
    days.push(
      <TouchableOpacity key={`day-${i}`} style={styles.dayContainer} onPress={() => handleDayClick(i)}>
        <View style={isToday ? styles.currentDay : styles.day}>
          <Text style={isToday ? styles.currentDayText : styles.dayText}>{i}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  // get current full month name
  const monthName = now.toLocaleString('default', { month: 'long' }).toUpperCase();


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateBack} style={styles.backArrow}>
        <Text style={styles.backArrowText}>DASH →</Text>
      </TouchableOpacity>
      <Header title="CALENDAR" />
      <Text style={styles.month}>{monthName}:</Text>
      <View style={styles.weekDays}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <Text key={index} style={styles.weekDay}>{day}</Text>
        ))}
      </View>
      <View style={styles.daysGrid}>
        {days}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    paddingTop: 50,
  },
  month: {
    fontSize: 20,
    color: '#f0f0f0',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  weekDay: {
    color: '#f0f0f0',
    fontSize: 16,
    width: 32, // adjust based on screen size
    textAlign: 'center',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 16,
  },
  dayContainer: {
    width: '14.28%', // divies the container width by 7 (days of the week)
    alignItems: 'center',
    marginVertical: 2,
  },
  day: {
    width: 45,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginBottom: '15px'
  },
  dayText: {
    color: '#0f0f0f',
    fontWeight: 'bold'
  },
  currentDay: {
    width: 45,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(252 111 232)',
  },
  currentDayText: {
    color: '#0f0f0f',
    fontWeight: 'bold'
  },
  backArrow: {
    position: 'absolute',
    zIndex: 20,
    right: 40,
    top: 70, // adjust top for the status bar height
  },
  backArrowText: {
    color: '#f0f0f0',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CalendarScreen;
