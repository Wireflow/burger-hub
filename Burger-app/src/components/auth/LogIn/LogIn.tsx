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
  const { setSession } = useSessionStore();
  const [loader, setLoader] = useState(false);
  const showToast = useCustomToast();

  const { control, handleSubmit, setError } = useForm<LogInType>({
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
      setLoader(true);
      const userId = await LogInQuery(data);
      const dataUser = await getUserById(userId);

      if (dataUser) {
        setSession({
          name: dataUser.name || "",
          phone: dataUser.phone,
          email: dataUser.email,
          id: dataUser.id,
         });
        showToast("Login successfully!", { type: "success" });
        router.push("/(drawer)/main");
      }

      console.log("User logged in:", userId);
    } catch (error) {
      console.error("Log In error:", error);
      showToast("Oops! We have an error. Please try again.", { type: "error" });
      setError("root", { message: "An error occurred during login." });
    } finally {
      setLoader(false);
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
         
           <View style={styles.inputContainer}>
            <FormInput control={control} name="email" label="Email" />
            <FormInput control={control} name="password" label="Password" secureTextEntry />
           </View>
        </ScrollView>
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forget Password?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Log In"
            size="large"
            color="red"
            onClick={handleSubmit(onSubmit)}
          />
        </View>
      </KeyboardAvoidingView>
      {loader && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#AF042C" />
        </View>
      )}
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
    alignItems: 'center', // Center align inputs
  },
  inputContainer: {
    width: "80%",
    
  },
  forgotPasswordContainer: {
    height: 20,
    width: "40%",
    alignSelf: 'center', // Center the text
    marginTop: 20,
  },
  forgotPasswordText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#AF042C",
    textAlign: 'center', // Center text
  },
  buttonContainer: {
    height: 50,
    width: "80%",
    margin: 'auto',
    marginTop: 20,
  },
  loaderContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -50, // Center horizontally
    marginTop: -50,  // Center vertically
    height: 100,
    width: 100,
    backgroundColor: '#AF042C',
    opacity: 0.4,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});