// ProductivityScore.js
import { View, Text, StyleSheet } from 'react-native';


const ProductivityScore = () => {
  return (
    <View style={styles.productivityContainer}>
      <Text style={styles.scoreText}>72</Text>
      <View style={styles.scoreDivide}></View>
      <Text style={styles.scoreText}>100</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productivityContainer: {
    color: '#f0f0f0',
    height: '100px',
    width: '100px',
    top: 25,
    borderRadius: 100,
    backgroundColor: '#FC6F6F'
  },
  scoreText: {
    color: '#f0f0f0',
    fontSize: '20px',
    margin: 'auto',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  scoreDivide: {
    width: '40px',
    height: '5px',
    margin: 'auto',
    backgroundColor: '#f0f0f0',
  }
});

export default ProductivityScore;