import { useRouter } from "expo-router";
import { useEffect } from "react";
import { supabase } from "../services/supabase/client";
import { UserSession, useSessionStore } from "../store/useSessionStore";

export const redirectAuth = () => {
  const setSession = useSessionStore((state) => state.setSession);
  const router = useRouter(); // Use useNavigation hook from React Navigation

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const userSession: UserSession = {
          name: session?.user.user_metadata.name,
          email: session?.user.user_metadata.email,
          phone: session?.user.user_metadata.phone,
          id: session?.user.id || "",
        };

        if (event === "INITIAL_SESSION") {
          setSession(userSession);
          router.replace("/auth");
        } 
        else if (event === "SIGNED_IN") {
            router.replace("/(drawer)/main")
        }
         else if (event === "SIGNED_OUT") {
          router.replace("/auth");
          setSession(null);
        } else if (event === "PASSWORD_RECOVERY") {
          // handle password recovery event
        } else if (event === "TOKEN_REFRESHED") {
          // handle token refreshed event
        } else if (event === "USER_UPDATED") {
          // handle user updated event
        }
      }
    );

    // Cleanup function to unsubscribe from the listener
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]); // Include navigation in the dependency array if needed
};
