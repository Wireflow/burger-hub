import React from 'react';
import { View, Dimensions } from 'react-native';
import Card from './Card';
import CardContent from './CardContent';
import { ImageSourcePropType } from 'react-native';

const { width } = Dimensions.get('window');

type CardWrapperProps = {
  imageSource: ImageSourcePropType;
  title: string;
  price: string;
  id: number;

};

const CardWrapper: React.FC<CardWrapperProps> = ({ id, imageSource, title, price }) => {

  const cardWidth = width * 0.5; 
  const cardHeight = cardWidth * 1.2; 

  return (
    <Card height={cardHeight} width={cardWidth}>
      <CardContent 
        imageSource={imageSource}
        title={title}
        price={price}
        id={id}
      />
    </Card>
  );
};

export default CardWrapper;