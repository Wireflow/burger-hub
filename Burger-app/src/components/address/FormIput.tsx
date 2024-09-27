import { View, Text, TextInput ,Dimensions,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { Controller} from 'react-hook-form'
type Props = {
    text : string,
    control: any;
    name:string,
    placeholder:string,


  }

const FormInput = ({placeholder,text,name,control}:Props) => {
  return (
    <View style={{height:70,width:"95%"   }} >
 <Text style={styles.text}>{text}</Text>

            <Controller 
              control={control}
              name={name}
              render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                  <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                  />
                  {error && <Text style={styles.errorMessage}>
                    {error.message}
                  </Text>}
                </>
              )}
            />  
            </View>
  )
}
const styles = StyleSheet.create({ 

  

   text: {
        fontSize: 12,
        fontWeight: "700",
         color: "#091e3a",    }, 
        
        errorMessage: {
        color: 'red',
        fontSize: 10,
        textAlign: "right"
      },  input: {
        borderRadius: 10,
        borderStyle: "solid",
        borderColor: "#91a1b6",
        borderWidth: 1,
        flex: 1,
        width: "100%",
        height: 70,
        overflow: "hidden",
        flexDirection: "row",
        padding: 16,
             marginTop:7 

    
      },
})

export default FormInput