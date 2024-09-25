import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import Button from '../Button';
type CardContentProps = {
  imageSource: ImageSourcePropType;  
  title: string; 
  price: string;  
};

const CardContent = ({ imageSource, title, price }:CardContentProps) => {
  return (
    <View>
      <View style={styles.imageWrapper}>
        <Image 
          source={imageSource}  
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>  
        <Text style={[styles.text, { color: 'red' }]}>{price}</Text> 
        <Button title="Customize" size="medium" color="white" /> 
      </View>
    </View>
  );
};

export default CardContent;

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'absolute',
    top: -45,
    alignSelf: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 35,
  },
  textContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
