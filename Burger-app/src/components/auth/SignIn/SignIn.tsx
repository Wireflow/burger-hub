import { Text, View } from "react-native";
import InputUi from "../../ui/input";
import FormInput from "@/src/components/ui/InputForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "react-native-paper";
import { userSchema } from "../../../types/validations/user";
const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
  
    },
  });

  const d = (r: any) => {
    console.log(r);
  };
  return (
    <View>
      <FormInput control={control} name={"name"} label="Name" />
      <FormInput control={control} name={"phoneNumber"} label="Phone" />
      <FormInput control={control} name={"email"} label="Email" />
      <Button onPress={()=>handleSubmit(d)}>Submit</Button>
    </View>
  );
};

export default SignIn;
