import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import Button from '../Button';
import { router } from 'expo-router';
 type CardContentProps = {
  imageSource: ImageSourcePropType;  
  title: string; 
  price: string;  
  id:number
};

const CardContent = ({id, imageSource, title, price }: CardContentProps) => {


  return (
    <View>
      <View style={styles.imageWrapper}>
        <Image 

          source={imageSource || require('@/assets/images/Mask Group.png')}  
          style={styles.image}
          // onError={handleImageError} // التعامل مع الخطأ هنا
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>  
        <Text style={[styles.text, { color: '#AF042C' }]}>{price}</Text> 
      </View>

      <Button 
        title="Customize" 
        size="small" 
        color="white" 
        onClick={() =>router.navigate(`/(drawer)/product/${id}`)} 
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'absolute',
    top: -30,
    alignSelf: 'center',
    
  },
  image: {
    width: 110,
    height: 100,
    borderRadius: 15,
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  textContainer: {
    marginTop: 58,
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});

export default CardContent;
