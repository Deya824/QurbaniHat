
import { auth } from "@/lib/auth";


import { headers } from "next/headers";
import { redirect } from "next/navigation";


const DashPage = async() => {
    const session=await  auth.api.getSession({
        headers: await headers()
    })
    const user=session?.user;
    if(!user){
        redirect('auth/signin');
        return <div>Please Sign before</div>
    }
    return (
        <div>
          
        </div>
    );
};

export default DashPage;