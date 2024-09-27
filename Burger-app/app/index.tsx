  import { useSessionStore } from "@/src/store/useSessionStore";
import { Redirect } from "expo-router";
 
const index = () => {
  const { setSession, session } = useSessionStore();
  // if(session)<Redirect href={"/item"} />
 
  return <Redirect href={"/(screen)/product"} />;
};

export default index;