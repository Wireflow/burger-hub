import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/src/components/ui/InputForm";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../ui/Button";
import LogInQuery from "@/src/queries/auth/login";
import { LogInType } from "@/src/types/LogInType";
import { useSessionStore } from "@/src/store/useSessionStore";
import { getUserById } from "@/src/queries/users/getUserById";
import { LogInSchema } from "@/src/types/validations/LogInSchema";
import { router } from "expo-router";
import { useCustomToast } from "@/src/hooks/useCustomToast";
const LogIn = () => {
  const { setSession, session } = useSessionStore();
 const [loader,setLoader]=useState(false)
 const showToast = useCustomToast();

  const { control, handleSubmit, setError } = useForm({
    resolver: zodResolver(LogInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: LogInType) => {

    try {
      if (!data.email || !data.password) {
        return setError("root", { message: "Check your login information." });
      }
      setLoader(true)
      const userId = await LogInQuery(data);
      const dataUser = await getUserById(userId);
      setSession({
        name: dataUser.name || "",
        phone: dataUser.phone,
        email: dataUser.email,
        id: dataUser.id,
      });
      if(dataUser){
        setLoader(false)
        showToast("Login successfully!", { type: "success" });

      router.navigate("/(drawer)/main");

      }

      console.log("User logined  up:", userId);
      console.log("im session", session);
    } catch (error) {
      console.error("Log In error:", error);
      setLoader(false)

      setError("root", { message: "An error occurred during login." });
    }
  };
  return (
    <SafeAreaView style={styles.container}>


      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}  
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ width: "80%", height: "auto" }}>
            <FormInput control={control} name={"email"} label="Email" />
            <FormInput control={control} name={"password"} label="Password"  secureTextEntry/>
          </View>
        </ScrollView>
        <View style={{ height: 20, width: "40%", left: 40 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#AF042C" }}>
            Forget Password?
          </Text>
        </View>
        <View style={{ height: 50, width: "80%", top: 20 }}>
          <Button
            title="Log In"
            size="large"
            color="red"
            onClick={handleSubmit(onSubmit)}
          />
        </View>
      </KeyboardAvoidingView>
      {loader &&  <View style={{position:'absolute',top:0,height:100,width:100,backgroundColor:'#AF042C',left:'35%',opacity:0.4,borderRadius:15,alignItems:'center',justifyContent:'center'}}>
                       <ActivityIndicator size="large" color="#AF042C" />
      </View>}
     
    </SafeAreaView>
  );
};
export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
