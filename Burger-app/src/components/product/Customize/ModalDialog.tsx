import React from 'react'
  import Modal from "react-native-modal";
 
import { Button, Text, View } from 'react-native'
 type modalProps ={
    children?: React.ReactNode;
    isPressed:boolean;
    handlePress:()=> void;

}
const ModalDialog = ({children,handlePress,isPressed}:modalProps) => {
  return (
    <View>
    <Modal isVisible={isPressed}
    animationInTiming={1000}
    avoidKeyboard={true}
    onBackButtonPress={handlePress}
    onBackdropPress={handlePress}
    style={{marginTop:50}}
       >
      <View style={{ backgroundColor:'#F6F6F9',height:480 }}>
        <Text>I am the modal content!</Text>
        <Button title="Show modal" onPress={handlePress} />
         <Text>Xdcsdc</Text>

      </View>
    </Modal>
  </View>  )
}

export default ModalDialog