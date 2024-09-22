import { Text, View } from "react-native"
 import { Path, useForm } from "react-hook-form";
 import {zodResolver} from '@hookform/resolvers/zod'
import { LogInSchema } from "@/src/types/validations/LogInSchema";
import FormInput from "@/src/components/ui/InputForm";
import Button from "../../ui/Button";

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
               <Button color="red" size="large" title="forget password?"   ></Button>
               <Button color="red" size="large" title="Submit" onPress={handleSubmit(d)}></Button> 

        </View>
    )
 }

 export default LogIn;