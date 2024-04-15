// App.js
import React, { useState } from 'react';
import { View, Text as RNText, StyleSheet } from 'react-native';

import Dashboard from './components/Dashboard/Dashboard';
import CalendarScreen from './components/CalendarScreen/CalendarScreen';
import AddCalendarEventScreen from './components/AddCalendarEventScreen/AddCalendarEventScreen';
import CalendarEventScreen from './components/CalendarEventScreen/CalendarEventScreen';
import ProfileScreen from './components/Profile/Profile';
import BottomButtons from './components/Footer_Menu/BottomButtons';
import SettingsScreen from './components/SettingsScreen/SettingsScreen'

const App = () => {
  const [activeScreen, setActiveScreen] = useState('Dashboard');
  const [navigationHistory, setNavigationHistory] = useState(['Dashboard']); // Initialize with the home screen
  const [showBottomButtons, setShowBottomButtons] = useState(true);

  const handleNavigate = (screen) => {
    setActiveScreen(screen);
    setShowBottomButtons(screen !== 'Settings' && screen !== 'AddEvent' && screen !== 'CalendarEventScreen');
    setNavigationHistory((prevHistory) => [...prevHistory, screen]); // Add new screen to history
  };

  // function to return to the previously viewed page:
  const handleGoBack = () => {
    setNavigationHistory((prevHistory) => {
      // remove the last screen (current screen)
      const newHistory = prevHistory.slice(0, -1); 

      // get the last screen or default to 'Dashboard'
      const previousScreen = newHistory[newHistory.length - 1] || 'Dashboard'; 

      // set it active 
      setActiveScreen(previousScreen);

      // do not display the footer btns if
      // page is settings, add event, view event. 
      setShowBottomButtons(screen !== 'Settings' && screen !== 'AddEvent' && screen !== 'CalendarEventScreen');
      return newHistory;
    });
  };

  // navigation variable sets screenComponent to desired screen.
  let screenComponent;
  switch (activeScreen) {
    case 'Dashboard':
      screenComponent = <Dashboard />;
      break;
    case 'Calendar':
      screenComponent = <CalendarScreen onNavigate={handleNavigate} />;
      break;
    case 'CalendarEventScreen':
      screenComponent = <CalendarEventScreen onNavigate={handleNavigate} />;
      break;
    case 'AddEvent':
      screenComponent = <AddCalendarEventScreen onGoBack={handleGoBack}/>;
      break;
    case 'Profile':
      screenComponent = <ProfileScreen onNavigate={handleNavigate}/>;
      break;
    case 'Settings':
      screenComponent = <SettingsScreen onNavigate={handleNavigate} />;
      break;
  }

  // The entire app is once app container that holds the screen and nav btns: 
  return (
    <View style={styles.appContainer}>
      {screenComponent}
      {showBottomButtons && <BottomButtons onNavigate={handleNavigate} />}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
});

export default App;
