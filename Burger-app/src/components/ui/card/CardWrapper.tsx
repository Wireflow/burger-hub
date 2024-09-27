import React from 'react';
import Card from './Card';
import CardContent from './CardContent';
import { ImageSourcePropType } from 'react-native';

type CardWrapperProps = {
  height: number;
  width: number;
  imageSource: ImageSourcePropType;
  title: string;
  price: string;
};

const CardWrapper: React.FC<CardWrapperProps> = ({ height, width, imageSource, title, price }) => {
  return (
    <Card height={height} width={width}>
      <CardContent 
        imageSource={imageSource}
        title={title}
        price={price}
      />
    </Card>
  );
};

export default CardWrapper;
