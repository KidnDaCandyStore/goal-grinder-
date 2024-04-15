// Profile.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../Header/Header'; 

// screen to handle displaying the user's information
// also gives them access to their account settings.
const Profile = ({ onNavigate }) => {
  const openSettingsModal = () => {
    onNavigate('Settings');
  };

  const goToDashboard = () => {
    onNavigate('Dashboard');
  };
  
  return (
    <View style={styles.profileContainer}>
      <Header title="PROFILE" />
      <TouchableOpacity onPress={goToDashboard} style={styles.backArrow}>
        <Text style={styles.backArrowText}>← DASH</Text>
      </TouchableOpacity>
      <View style={styles.profilePicture} />
      <View style={styles.profileInfo}>
        <Text style={styles.profileItem}>@USERNAME_21</Text>
        <Text style={styles.profileItem}>JOHN DOE</Text>
        <Text style={styles.profileItem}>DOB:  JAN.01.2001</Text>
        <Text style={styles.profileItemLast}>LOCATION:  NY, NY</Text>
        <Text style={styles.profileItemSettings} onPress={openSettingsModal}>SETTINGS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    top: 50
  },
  profilePicture: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 100,
    marginBottom: 30,
  },
  profileInfo: {
    alignItems: 'center',
    color: '#f0f0f0',
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center'
  },
  profileItem: {
    color: '#f0f0f0',
    backgroundColor: 'black',
    textAlign: 'center',
    width: '100%',
    marginBottom: 10,
    padding: '3%',
    fontSize: 20
  },
  profileItemLast: {
    color: '#f0f0f0',
    backgroundColor: 'black',
    textAlign: 'center',
    width: '100%',
    marginBottom: 30,
    padding: '3%',
    fontSize: 20
  },
  profileItemSettings: {
    color: '#0f0f0f',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    width: '100%',
    marginBottom: 100,
    padding: '3%',
    fontSize: 20
  },
  backArrow: {
    position: 'absolute',
    zIndex: 20,
    left: 40,
    top: 20, // Adjust top as per status bar height
  },
  backArrowText: {
    color: '#f0f0f0',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Profile;