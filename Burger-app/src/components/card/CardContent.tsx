import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import Button from '../ui/Button';

type CardContentProps = {
  imageSource: ImageSourcePropType;  
  title: string; 
  price: string;  
};

const CardContent = ({ imageSource, title, price }: CardContentProps) => {
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
      </View>
      <Button 
        title="Customize" 
        size="medium" 
        color="white" 
        onClick={() => {
          console.log('Customize clicked'); // تنفيذ وظيفة عند الضغط
        }} 
      /> 
    </View>
  );
};

export default CardContent;

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'absolute',
    top: -35,
    alignSelf: 'center',
  },
  image: {
    width: 130,
    height: 100,
    borderRadius: 15,
  },
  textContainer: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 10
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3
  },
});
