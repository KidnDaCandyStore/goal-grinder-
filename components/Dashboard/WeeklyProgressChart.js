// WeeklyProgressChart.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WeeklyProgressChart = () => {
  const [selectedDot, setSelectedDot] = useState(null);

  // A mock representation of your weekly progress data
  const mockWeek = [
    { day: 'Mon', value: 40 },
    { day: 'Tue', value: 60 },
    { day: 'Wed', value: 55 },
    { day: 'Thu', value: 80 },
    { day: 'Fri', value: 70 },
    { day: 'Sat', value: 85 },
    { day: 'Sun', value: 75 },
  ];

  // set dot color for the graph:
  // first = white, rest are based on if they're
  // positive or negative 
  const getDotColor = (index) => {
    if (index === 0) return '#f0f0f0'; 
    return mockWeek[index].value >= mockWeek[index - 1].value ? '#26E939' : '#FC6F6F';
  };

  // toggle select class
  const selectDot = (index) => {
    setSelectedDot(index === selectedDot ? null : index); // Toggle selection
  };

  // render background for selected node on progress chart
  const renderLineAndText = (index) => {
    if (index !== selectedDot) return null;
    const { value } = mockWeek[index];
    
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

    const growthLossValue = calculateGrowthLoss(mockWeek[index].value, mockWeek[index - 1].value);
    const isGrowth = growthLossValue >= 0;

    // chooses a binary (green/red) color depending on the boolean of isGrowth
    return (
      <Text style={[styles.growthLossText, { color: isGrowth ? '#26E939' : '#FC6F6F' }]}>
        {isGrowth ? '+' : ''}{growthLossValue}%
      </Text>
    );
  };

  // weekly prog: 
  return (
    <View style={styles.container}>
      <Text style={styles.header}>WEEKLY PROGRESS:</Text>
      <View style={styles.chartContainer}>
        {mockWeek.map((entry, index) => (
          <TouchableOpacity key={entry.day} style={styles.column} onPress={() => selectDot(index)}>
            {renderLineAndText(index)}  
            <View style={[styles.dot, { backgroundColor: getDotColor(index), bottom: `${entry.value}%` }]} />
            <Text style={styles.label}>{entry.day}</Text>
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
  // reused the styles from 'DailyProgressChart.js', as they can be similar
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingVertical: 60,
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
    textTransform: 'uppercase'
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

export default WeeklyProgressChart;