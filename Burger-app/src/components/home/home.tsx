import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import SearchInput from '../ui/SearchInput'
import Tabs from './Tabs'
import Button from '../ui/Button'
const Homes = () => {
    
  return (
    <>
    <View style={styles.containers}> 
    <View  >
     <View>
       <Text style={styles.titleText}>Delicious</Text>
       <Text style={styles.titleText}>burgers for you</Text>
     </View>
     <SearchInput />
   </View>
   
   </View>
   <Tabs />
   <View style={{marginBottom:90}}>
   <Button size='large' color='red' title='View All Burger' onClick={()=>{
    }}/>
   </View>
  
   </>
  )
}

export default Homes

const styles = StyleSheet.create({
    containers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
       marginBottom: 15,
     
       marginLeft:25
      },
     
      titleText: {
        fontSize: 40, 
        color: 'black',
      },
})