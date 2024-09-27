import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import Button from '../ui/Button';
type CardContentProps = {
  imageSource: ImageSourcePropType;  
  title: string; 
  price: string;  
};

const CardContent = ({ imageSource, title, price }: CardContentProps) => {
  const [currentImage, setCurrentImage] = useState(imageSource);

  const handleImageError = () => {
    console.log('Error loading image');
    setCurrentImage(defaultImage); // تغيير الصورة إلى الافتراضية عند حدوث خطأ
  };

  return (
    <View>
      <View style={styles.imageWrapper}>
        <Image 
          source={currentImage}  
          style={styles.image}
          onError={handleImageError} // التعامل مع الخطأ هنا
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
        onClick={() => console.log('Customize clicked')} 
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'absolute',
    top: -40,
    alignSelf: 'center',
  },
  image: {
    width: 110,
    height: 90,
    borderRadius: 15,
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  textContainer: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});

export default CardContent;
