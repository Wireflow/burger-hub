import queryClient from "@/src/services/react-query";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
 import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
 
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
  
        <ThemeProvider value={DefaultTheme}>
             <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              {children}
            </SafeAreaProvider>
         </ThemeProvider>
     </QueryClientProvider>
  );
};

export default Providers;