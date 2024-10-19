  import { useSessionStore } from "@/src/store/useSessionStore";
import { Redirect } from "expo-router";
 
const index = () => {
  const {  session,setSession } = useSessionStore();
  // setSession(null);
console.log("im session in index",session)
  if(!session) { return <Redirect href={"/auth"} />}else{
    return< Redirect href={"/(drawer)/main"} />
  }
  return< Redirect href={"/(drawer)/main"} />

};

export default index;