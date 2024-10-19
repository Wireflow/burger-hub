import { useSessionStore } from '@/src/store/useSessionStore'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
type Props ={
    name:string;
    phon:string;
}
const ContentDetails = ({name,phon}:Props) => {
    const {  session } = useSessionStore();
    // if (!session){
    //     router.navigate('/auth')
    // }
  return (
<View style={styles.contactDetails}>
                <Text style={styles.label}>Contact details</Text>
               
                <TouchableOpacity style={styles.input}>
                  <Text style={styles.ContentTitle}>Name</Text>
                  <Text style={styles.ContentDescription}>{session?.name}</Text>

                </TouchableOpacity>
               
                <TouchableOpacity style={styles.input}>
                  <Text style={styles.ContentTitle}>Phone #</Text>
                  <Text style={styles.ContentDescription}>{session?.phone}</Text>
                </TouchableOpacity>

            </View>  )
}

const styles = StyleSheet.create({
  
    contactDetails: {
        marginBottom: 20,
         height:'25%',
        alignItems:'center',
        justifyContent:'space-between'
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        width:"100%"
    },
    input: {
        height: 65,
        backgroundColor:'#fff',
        width:'100%',
        paddingTop:10,
        paddingLeft:25,
        borderRadius:20
    },     
    ContentTitle:{
      color:'#000000',
      opacity:0.7
    },ContentDescription:{
      color:'#000000',
      fontSize:18,
      fontWeight:'600'

    }
});






export default ContentDetails