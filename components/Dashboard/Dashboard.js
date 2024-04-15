// Dashboard.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import DateTimeDisplay from './DateTimeDisplay';
import EventsDisplay from './EventsDisplay';
import DailyProgressChart from './DailyProgressChart';
import WeeklyProgressChart from './WeeklyProgressChart';

// Dashboard.js is a simple combination of all the previous
// components defined before within the Dashboard Folder & as
// defined above. This is a box to package all the components
// into one beautiful file. 
const Dashboard = () => {
  return (
    <View style={styles.dashboardContainer}>
      <DateTimeDisplay />
      <EventsDisplay />
      <DailyProgressChart />
      <WeeklyProgressChart />
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardContainer: {
    color: '#f0f0f0',
    backgroundColor: '#0f0f0f',
    height: '100%',
    width: '100%',
    paddingTop: 50,
    paddingBottom: 100
  },
});

export default Dashboard;