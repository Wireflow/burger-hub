import React from 'react'
import { Image, View } from 'react-native'

const ImageProduct = () => {
  return (
 <View>
    <Image 
                    source={require('@/assets/images/Mask Group.png')} 
                    style={{height:220,width:230}}
    />
 </View>  )
}

export default ImageProduct