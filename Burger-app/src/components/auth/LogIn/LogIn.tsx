import { Text, View } from "react-native"
 import { Path, useForm } from "react-hook-form";
 import {zodResolver} from '@hookform/resolvers/zod'
import { LogInSchema } from "@/src/types/validation/LogInSchema";
import FormInput from "@/src/components/ui/InputForm";
import { Button } from "react-native-paper";
  const LogIn =()=>{
    
    const {
      control,
      handleSubmit,
      formState: { isValid },
    } = useForm({
      resolver:zodResolver(LogInSchema),
      defaultValues:{
        email:'',
        password:''
      }
    })


    const d =(r:any)=>{
      console.log(r)
    }
    return (
        <View style={{width:414,height:290}}>
               <FormInput   control={control} name={'email'}  label='Email' />
               <FormInput   control={control} name={'password'}  label='Password' />
               <Button style={{alignItems:'flex-start',left:30,marginTop:30}}><Text style={{fontWeight:'600',color:'#AF042C'}}> forget password?</Text> </Button>
               <Button onPress={handleSubmit(d)}>Submit</Button> 

        </View>
    )
 }

 export default LogIn;