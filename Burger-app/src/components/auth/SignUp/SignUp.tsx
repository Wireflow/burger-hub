import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import FormInput from "@/src/components/ui/InputForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpType } from "@/src/types/SignUpType";
import { useSessionStore } from "@/src/store/useSessionStore";
import { UserSchema } from "../../../types/validation/user";
import SignUpQuery from "@/src/queries/auth/signUp";
import Button from "../../ui/Button";
 
const SignUp = () => {
    const { setSession } = useSessionStore();
    const {
        control,
        handleSubmit,
        setError,
        formState: { isValid },
    } = useForm<SignUpType>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            password: ''
        }
    });
    const onSubmit = async (data: SignUpType) => {
        console.log(data, "submitted data");

         try {
            if (!data.email || !data.password) {
                return setError("root", { message: "Check your login information." });
            }
            const user = await SignUpQuery(data);
            console.log("User signed up:", user);
        } catch (error) {
            console.error("Sign up error:", error);
            setError("root", { message: "An error occurred during sign up." });
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.inputContainer}>
                    <FormInput control={control} name="name" label="Name" />
                    <FormInput control={control} name="phone" label="Phone" />
                    <FormInput control={control} name="email" label="Email" />
                    <FormInput control={control} name="password" label="Password" />
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                     <Button title="Sign Up" size="large" color="red" onClick={handleSubmit(onSubmit)} />
                </View>            
        </SafeAreaView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    inputContainer: {
        width: '80%',
        height: 350,
 
    },
    buttonContainer: {
        height: 50,
        width: '80%',
        top: 30,
    },
});