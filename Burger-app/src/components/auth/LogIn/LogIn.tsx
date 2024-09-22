import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
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
const LogIn = () => {
  const { setSession, session } = useSessionStore();

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
      const userId = await LogInQuery(data);
      const dataUser = await getUserById(userId);
      setSession({
        name: dataUser.name || "",
        phone: dataUser.phone,
        email: dataUser.email,
        id: dataUser.id,
      });
      console.log("User logined  up:", userId);
      console.log("im session", session);
    } catch (error) {
      console.error("Log In error:", error);
      setError("root", { message: "An error occurred during login." });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ width: "80%", height: "auto" }}>
            <FormInput control={control} name={"email"} label="Email" />
            <FormInput control={control} name={"password"} label="Password" />
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
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </KeyboardAvoidingView>
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
