  'use server'
import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";


export const createATask= async (formData)=>{

    const newTask=Object.fromEntries(formData.entries());
const res=await postTask(newTask);
if(res.ok){
    revalidatePath('/tasks');
}
return res;
    
}
export const newTaskAction= async (formData)=>{
  
    const newTask=Object.fromEntries(formData.entries());
    const res=await postTask(newTask);
if(res.ok){
    revalidatePath('/tasks');
    redirect('/tasks');
}
return res;

}

