// DailyProgressChart.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DailyProgressChart = () => {
  const [selectedDot, setSelectedDot] = useState(null);

  // mock representation of a user's daily progress data at 11pm
  const mockDay = [
    { hour: '3 PM', value: 30 },
    { hour: '4 PM', value: 70 },
    { hour: '6 PM', value: 50 },
    { hour: '7 PM', value: 55 },
    { hour: '8 PM', value: 30 },
    { hour: '9 PM', value: 80 },
    { hour: '10 PM', value: 60 },
  ];

  // set dot color for the graph:
  // first = white, rest are based on if they're
  // positive or negative 
  const getDotColor = (index) => {
    if (index === 0) return '#f0f0f0'; 
    return mockDay[index].value >= mockDay[index - 1].value ? '#26E939' : '#FC6F6F';
  };
  
  // toggle select class
  const selectDot = (index) => {
    setSelectedDot(index === selectedDot ? null : index); 
  };

  // render background for selected node on progress chart
  const renderLineAndText = (index) => {
    if (index !== selectedDot) return null;
    const { value } = mockDay[index];

    return (
      <React.Fragment>
        <View style={styles.selectedLine} />
        <Text style={styles.selectedValueText}>
          {value}%
        </Text>
      </React.Fragment>
    );
  };

  // function to determine growth or loss. 
  const calculateGrowthLoss = (value, prevValue) => {
    if (prevValue === 0) {
      return '---'; // handles division by zero
    }
    const growthLossPercent = ((value - prevValue) / prevValue) * 100;

    return growthLossPercent.toFixed(2); // only two decimal places
  };

  // function to render growth or loss text
  const renderGrowthLossText = (index) => {
    if (index === 0 || index !== selectedDot) return; // no growth/loss for the first dot or if not selected
    
    const growthLossValue = calculateGrowthLoss(mockDay[index].value, mockDay[index - 1].value);
    const isGrowth = growthLossValue >= 0;

    // chooses a binary (green/red) color depending on the boolean of isGrowth
    return (
      <Text style={[styles.growthLossText, { color: isGrowth ? '#26E939' : '#FC6F6F' }]}>
        {isGrowth ? '+' : ''}{growthLossValue}%
      </Text>
    );
  };

  // daily prog: 
  return (
    <View style={styles.container}>
      <Text style={styles.header}>DAILY PROGRESS:</Text>
      <View style={styles.chartContainer}>
        {mockDay.map((entry, index) => (
          <TouchableOpacity key={entry.hour} style={styles.column} onPress={() => selectDot(index)}>
            <View style={[styles.dot, { backgroundColor: getDotColor(index), bottom: `${entry.value}%` }]} />
            {renderLineAndText(index)}
            <Text style={styles.label}>{entry.hour}</Text>
            {selectedDot === index && (
              <View style={styles.selectedLine} />
            )}
            {renderGrowthLossText(index)}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingVertical: 60,
    marginBottom: 25,
  },
  header: {
    color: '#f0f0f0',
    fontSize: 20,
    marginBottom: 60,
    fontWeight: 'bold',
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    height: 300
  },
  column: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    position: 'absolute',
    zIndex: 2,
  },
  label: {
    color: '#f0f0f0',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    zIndex: 2,
    fontWeight: 'bold',
  },
  selectedLine: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    bottom: 0,
    top: 0,
    width: '100%',
    backgroundColor: '#666',
  },
  selectedValueText: {
    position: 'absolute',
    color: '#f0f0f0',
    fontWeight: 'bold',
    fontSize: 16,
    top: '100%',
    textAlign: 'center',
    marginTop: 10,
    width: '100%',
    textTransform: 'uppercase',
  },
  growthLossText: {
    position: 'absolute',
    color: '#f0f0f0',
    fontWeight: 'bold',
    fontSize: 16,
    bottom: '105%',
    zIndex: 3,
  },
});

export default DailyProgressChart;
