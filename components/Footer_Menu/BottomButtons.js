// BottomButtons.js
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';

const BottomButtons = ({ onNavigate, currentScreen }) => {
  const [lastSelectedButton, setLastSelectedButton] = useState(null);

  // checks if a button is selected via the current screen
  const isSelected = (buttonId) => {
    return selectedButton === buttonId;
  };

  // selectedButton helps navigate and show proper 
  // properties per each screen
  const selectedButton = (() => {
    switch (currentScreen) {
      case 'Profile':
      case 'Settings':
        return 'Profile';
      case 'Calendar':
      case 'CalendarEvent':
        return 'Calendar';
      case 'AddEvent':
        // Keep the last selected button active when viewing AddEvent
        return lastSelectedButton;
      case 'Dashboard':
        return null; // Explicitly for Dashboard, no button is highlighted
      default:
        return lastSelectedButton; // Default case to maintain the last selected button
    }
  })();

  useEffect(() => {
    // last selected button is updated, 
    // except when the current screen is AddEvent or Dashboard
    if (currentScreen !== 'AddEvent' && currentScreen !== 'Dashboard') {
      setLastSelectedButton(currentScreen);
    }
  }, [currentScreen]);

  // function handleButtonPress
  // sets last selected btn
  // navigates to btn link
  const handleButtonPress = (buttonId) => {
    setLastSelectedButton(buttonId);
    onNavigate(buttonId);
  };

  // function getIconSource
  const getIconSource = (buttonId) => {
    const icons = {
      Calendar: isSelected('Calendar') ? require("./scheduleDark.png") : require("./schedule.png"),
      AddEvent: isSelected('AddEvent') ? require("./addDark.png") : require("./add.png"),
      Profile: isSelected('Profile') ? require("./pfpDark.png") : require("./pfp.png"),
    };
    return icons[buttonId];
  };

  // tried adding a clear btns at btm but btm btn functionality is a struggle
  const clearSelectionsAndHighlightDashboard = () => {
  setLastSelectedButton(null); // null selections
  onNavigate('Dashboard'); // dashboard screen
};

  // function for applying the dashboard border only when its 
  // on the Dashboard screen
  const containerStyles = [
    styles.buttonsContainer,
    currentScreen === 'Dashboard' && styles.dashboardBorder,
  ];

  // build btns: 
  const buttonStyles = (buttonId) => [
    styles.button,
    isSelected(buttonId) && styles.buttonSelected,
  ];

  return (
    <SafeAreaView style={containerStyles}>
    <View style={containerStyles}>
      {['Calendar', 'AddEvent'].map((buttonId) => (
        <TouchableOpacity
          key={buttonId}
          style={buttonStyles(buttonId)}
          onPress={() => handleButtonPress(buttonId)}>
          <Image style={styles.icon} source={getIconSource(buttonId)} />
        </TouchableOpacity>
      ))}
      {['Profile'].map((buttonId) => (
        <TouchableOpacity
          key={buttonId}
          style={buttonStyles(buttonId)}
          onPress={() => handleButtonPress(buttonId)}>
          <Image style={styles.iconPfp} source={getIconSource(buttonId)} />
        </TouchableOpacity>
      ))}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#0f0f0f',
    position: 'sticky', 
    // note: 'sticky' position seems to hide all btns on ios? 
    bottom: 0,
    width: '100%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '33.333%',
    height: '100%',
  },
  buttonSelected: {
    backgroundColor: '#f0f0f0',
    width: '33.333%',
    height: '100%',
  },
  dashboardBorder: {
    borderBottomWidth: 10,
    borderBottomColor: '#f0f0f0',
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconPfp: {
    width: 40,
    height: 50,
  },
});

export default BottomButtons;
