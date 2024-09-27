<<<<<<< HEAD
=======

>>>>>>> bd14c0db002f360ff61e39ddc5de8b30e946afde
import queryClient from "@/src/services/react-query";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { TabProvider } from "./TabContext";
import React from "react";
import {
    SafeAreaProvider,
    initialWindowMetrics,
} from "react-native-safe-area-context";
import { ToastProvider } from "react-native-toast-notifications";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider
        placement="top"
        offsetTop={50}
        duration={3000}
        animationType="slide-in"
        swipeEnabled={false}
        style={{
          zIndex: 999999,
          elevation: 999999, 
        }}
      >
        <ThemeProvider value={DefaultTheme}>
<<<<<<< HEAD
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            {children}
          </SafeAreaProvider>
        </ThemeProvider>
      </ToastProvider>
    </QueryClientProvider>
=======
             <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              <TabProvider>
              {children}
              </TabProvider>
            </SafeAreaProvider>
         </ThemeProvider>
     </QueryClientProvider>
>>>>>>> bd14c0db002f360ff61e39ddc5de8b30e946afde
  );
};

export default Providers;