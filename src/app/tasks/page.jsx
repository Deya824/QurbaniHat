import { AddTask } from "@/components/AddTask";
import TaskPage from "@/components/TaskPage";
import {  createATask } from "@/lib/action";
import { getTasks } from "@/lib/tasks";
import Link from "next/link";


const page = async () => {
    const tasks= await getTasks();
    return (
        <div>
            Task:{tasks.length}
            <AddTask createATask={createATask}/>
            <Link href="/tasks/new">Add New Task</Link>
          <div className='grid grid-cols-3 gap-4 pt-8'>
                {
                    tasks.map(task => <TaskPage
                        key={task.id} task={task}></TaskPage>)
                }
            </div>

        </div>
    );
};

export default page;