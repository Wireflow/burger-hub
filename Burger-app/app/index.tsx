//   import { useSessionStore } from "@/src/store/useSessionStore";
// import { Redirect } from "expo-router";
 
<<<<<<< HEAD
// const index = () => {
//   const { setSession, session } = useSessionStore();
//   if(session) (<Redirect href={"/main"} />)
 
//   return <Redirect href={"/main"} />;
// };
=======
const index = () => {
  const { setSession, session } = useSessionStore();
  if(!session) (<Redirect href={"/main"} />)
 
  return <Redirect href={"/auth"} />;
};
>>>>>>> 9add745c8abe0155461daf7e295f31b499840347

// export default index;