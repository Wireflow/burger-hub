import React from 'react'
import { Image, View } from 'react-native'
import {Dimensions} from 'react-native';
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type props = {
   imageBase?:string;
}
const ImageProduct = ({imageBase}:props) => {
  return (
 <View>
    <Image 
 source={require('@/assets/images/Mask Group.png')} 
                     style={{height:windowHeight*0.4,width:windowWidth*0.6,zIndex:999}}
    />
 </View>  )
}

export default ImageProduct