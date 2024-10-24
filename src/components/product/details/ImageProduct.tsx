import React from 'react'
import { Image, ImageSourcePropType, View } from 'react-native'
import {Dimensions} from 'react-native';
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type props = {
   imageBase:ImageSourcePropType;
}
const ImageProduct = ({imageBase}:props) => {
   console.log(imageBase,"im image pass product datiles")
  return (
 <View>
    <Image 
          source={imageBase || require('@/assets/images/Mask Group.png')}  
          style={{height:windowHeight*0.35,width:windowWidth*0.6,zIndex:999}}
    />
 </View>  )
}

export default ImageProduct