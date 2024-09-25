import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchInput from '../ui/SearchInput'
const Homes = () => {
  return (
    <View style={styles.containers}> 
    <View  >
     <View>
       <Text style={styles.titleText}>Delicious</Text>
       <Text style={styles.titleText}>burgers for you</Text>
     </View>
     <SearchInput />
   </View>
   </View>
  )
}

export default Homes

const styles = StyleSheet.create({
    containers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
       marginBottom: 15, // mb-6 in Tailwind corresponds to 24px
      },
     
      titleText: {
        fontSize: 50, 
        color: 'black',
      },
})