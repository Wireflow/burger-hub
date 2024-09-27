import React from 'react';
import Card from './Card';
import CardContent from './CardContent';
import { ImageSourcePropType } from 'react-native';

type CardWrapperProps = {
  imageSource: ImageSourcePropType;
  title: string;
  price: string;
  height:number;
  width:number
};

const CardWrapper: React.FC<CardWrapperProps> = ({ imageSource, title, price,height,width }) => {
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
