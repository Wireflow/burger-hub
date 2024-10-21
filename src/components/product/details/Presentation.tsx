import React from 'react'
import { Dimensions, View } from 'react-native'
import Title from '../../ui/Title'
import Description from '../../ui/Description'
import Price from '../../ui/Price'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type props ={
  title?:string;
  price?:number;
  description?:string;
}
const Presentation = ({title,price,description}:props) => {
  return (
 <View style={{height:windowWidth*0.5,width:"70%",display:'flex',justifyContent:'space-around',alignItems:'center',position:'absolute',bottom:'12%'}}>
      <Title name={title} />
    <Description description={description}/>
    <Price price={price}/>
 </View>  )
}

export default Presentation