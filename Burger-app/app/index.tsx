  import { useSessionStore } from "@/src/store/useSessionStore";
import { Redirect } from "expo-router";
 
const index = () => {
  const { setSession, session } = useSessionStore();
  if(!session) (<Redirect href={"/main"} />)
 
  return <Redirect href={"/auth"} />;
};

export default index;