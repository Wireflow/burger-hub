  import { useSessionStore } from "@/src/store/useSessionStore";
import { Redirect } from "expo-router";
 
const index = () => {
  const {  session,setSession } = useSessionStore();
  if(!session) (<Redirect href={"/auth"} />)
 console.log("im session in index",session)
  // setSession(null)
  return <Redirect href={"/auth"} />;
};

export default index;