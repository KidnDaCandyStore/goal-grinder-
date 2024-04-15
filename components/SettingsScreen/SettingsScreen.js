// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../Header/Header';

const SettingsScreen = ({ onNavigate }) => {
  // individual states for each setting
  const [accountPublic, setAccountPublic] = useState(true);
  const [optedInAIServices, setOptedInAIServices] = useState(true);
  const [autoAdjustSchedule, setAutoAdjustSchedule] = useState(true);
  const [trackMyLocation, setTrackMyLocation] = useState(false);

  // render a setting item with a clickable row
  const renderToggleItem = (baseLabel, value, onToggle, onText, offText) => {
    const backgroundColor = value ? 'green' : 'red';
    const labelText = `${baseLabel}: ${value ? onText : offText}`;
    return (
      <TouchableOpacity
        style={[styles.settingItem, { backgroundColor }]}
        onPress={() => onToggle(!value)}
      >
        <Text style={styles.settingText}>{labelText}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.backArrow} onPress={() => onNavigate('Profile')}>
        <Text style={styles.backArrowText}>← PROFILE</Text>
      </TouchableOpacity>
      <Header title="SETTINGS" />
      </View>
      <Text style={styles.noteText}>TOGGLE (ON/OFF):</Text>
      {renderToggleItem('ACCOUNT', accountPublic, setAccountPublic, 'PUBLIC', 'PRIVATE')}
      {renderToggleItem('AI SERVICES', optedInAIServices, setOptedInAIServices, 'OPTED-IN', 'OPTED-OUT')}
      {renderToggleItem('AUTO ADJUST SCHEDULE', autoAdjustSchedule, setAutoAdjustSchedule, 'ON', 'OFF')}
      {renderToggleItem('TRACK MY LOCATION', trackMyLocation, setTrackMyLocation, 'ON', 'OFF')}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f0f0f',
    paddingTop: 30
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    textDecoration: 'underline',
    fontWeight: 'bold'
  },
  backArrow: {
    position: 'absolute',
    zIndex: 20,
    left: 40,
    top: 40,
  },
  backArrowText: {
    color: '#f0f0f0',
    fontWeight: 'bold',
    fontSize: 20,
  },
  noteText: {
    color: '#f0f0f0',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginVertical: 5,
  },
  settingText: {
    color: '#f0f0f0',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SettingsScreen;
