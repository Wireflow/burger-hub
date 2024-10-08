 import signOut from "@/src/queries/auth/logout";
import { router } from "expo-router";
import { Toast } from "react-native-toast-notifications";

const SignOutUser =() => {
  // const showToast = useCustomToast();
  
  try {
  signOut();
    Toast.show("User signed out", { type: "success" });
    router.replace("/auth"); 
  } catch (error:any) {
    Toast.show("Error signing out", { type: "error" });
    console.log("error in sign out",error)
  }
};

export default SignOutUser;