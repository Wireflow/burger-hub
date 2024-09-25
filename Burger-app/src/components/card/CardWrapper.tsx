import React from 'react';
import Card from './Card';
import CardContent from './CardContent';
import { ImageSourcePropType } from 'react-native';

type CardWrapperProps = {
  imageSource: ImageSourcePropType;
  title: string;
  price: string;
};

const CardWrapper: React.FC<CardWrapperProps> = ({ imageSource, title, price }) => {
  return (
    <Card height={200} width={160}>
      <CardContent 
        imageSource={imageSource}
        title={title}
        price={price}
      />
    </Card>
  );
};

export default CardWrapper;
