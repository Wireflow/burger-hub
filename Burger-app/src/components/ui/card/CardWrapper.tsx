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
  id:number
};

const CardWrapper: React.FC<CardWrapperProps> = ({id, imageSource, title, price,height,width }) => {
  return (
    <Card height={height} width={width}>
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
