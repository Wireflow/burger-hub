    import React, { useState } from "react";
    import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
    import InputUi from "../ui/input";
    import SignIn from "./SignIn/SignIn";
    import LogIn from "./LogIn/LogIn";import Button from "../ui/Button";

    
    const Tabs = () => {
        const [selectedTab, setSelectedTab] = useState("Login");

        return (
            <View style={styles.container}>
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        onPress={() => setSelectedTab("Login")}
                    style={styles.tab}
                    >
                        <Text style={styles.tabText}>Login</Text>
                        {selectedTab === "Login" && <View style={styles.underline} />}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setSelectedTab("Sign Up")}
                        style={styles.tab}
                    >
                        <Text style={styles.tabText}>Sign Up</Text>
                        {selectedTab === "Sign Up" && <View style={styles.underline} />}
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                {selectedTab === "Sign Up" && <SignIn  />}
                {selectedTab === "Login" && <LogIn />}

                    
                    

                </View> 
            
            </View>
        
        );

    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'baseline',
            width:414,
            position:'relative',
            top:-50

        },
    
        tabContainer: {
            display:'flex',
            flexDirection: "row",
            marginBottom: 0,
            width:'90%',
            justifyContent:'space-around',
            position:'relative',
            top:-6

    },
        tab: {
            padding: 5,
            alignItems: "center",
            width:'40%'
        
        },
        tabText: {
            fontSize: 22,
            color: "#00000",
        },
        underline: {
            marginTop: 15,
            height: 3,
            width: 134,
            backgroundColor: "#AF042C",
            borderRadius:40,

        },
        content: {
            
            height:500,
            width:414,
        },
        contentText: {
            fontSize: 24,
        },
    });

    

    export default Tabs;