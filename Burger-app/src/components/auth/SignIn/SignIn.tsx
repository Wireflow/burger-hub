import { Text, View } from "react-native"
import InputUi from "../../ui/input";
import FormInput from "@/src/components/ui/InputForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "@/src/types/validation/user";
import { Button } from "react-native-paper";

  const SignIn =()=>{
    const {
      control,
      handleSubmit,
      formState: { isValid },
    } = useForm({
      resolver:zodResolver(UserSchema),
      defaultValues:{
        name:'',
        phoneNumber:'',
        email:'',
        password:''
      }
    })


    const d =(r:any)=>{
      console.log(r)
    }
    return (
        <View style={{width:414,height:290}}>
          <FormInput   control={control} name={'name'}  label='Name' />
          <FormInput   control={control} name={'phoneNumber'}  label='Phone' />
          <FormInput   control={control} name={'email'}  label='Email' />
          <FormInput   control={control} name={'password'}  label='Password' />
          <Button onPress={handleSubmit(d)}>Submit</Button> 
        </View>
    )
 }

 export default SignIn;