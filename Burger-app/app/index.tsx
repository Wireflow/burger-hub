  import { useSessionStore } from "@/src/store/useSessionStore";
import { Redirect } from "expo-router";
 
const index = () => {
  const { setSession, session } = useSessionStore();
  // if(session) (<Redirect href={"/(drawer)/main"} />)
 
  return <Redirect href={"/(drawer)/main"} />;
};

export default index;