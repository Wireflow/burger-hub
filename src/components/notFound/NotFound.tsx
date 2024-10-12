
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../ui/Button'; 

interface NotFoundProps {
  icon: string; 
  message1: string; 
  message2: string; 
  buttonTitle?: string; 
  onButtonPress?: () => void; 
}

const NotFound: React.FC<NotFoundProps> = ({ icon, message1,message2, buttonTitle, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={50} color="#333" style={styles.icon} />
      <Text style={styles.message1}>{message1}</Text>
      <Text style={styles.message2}>{message2}</Text>
      <View style={styles.b}>
      {buttonTitle  && (
        <Button title={buttonTitle} size='large' color='red' onClick={onButtonPress} />
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
  },
  icon: {
    marginBottom: 30,
marginTop:60
  },
  message1: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  message2: {
    fontSize: 15,
  
  },
  b:{
    marginTop:130
  }
});

export default NotFound;
