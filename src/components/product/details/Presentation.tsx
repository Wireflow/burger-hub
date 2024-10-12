import React from 'react'
import { View } from 'react-native'
import Title from '../../ui/Title'
import Description from '../../ui/Description'
import Price from '../../ui/Price'
type props ={
  title?:string;
  price?:number;
  description?:string;
}
const Presentation = ({title,price,description}:props) => {
  return (
 <View style={{height:'50%',width:"70%",display:'flex',justifyContent:'space-around',alignItems:'center',position:'relative',top:-70}}>
      <Title name={title} />
    <Description description={description}/>
    <Price price={price}/>
 </View>  )
}

export default Presentation