import { Header } from "@/components/header";
import { NewTask } from "@/components/newTask";
import { Task } from "@/components/task";
import { TaskList } from "@/components/taskList";

export default function Home() {
  return (<div>
    <Header />
    <NewTask />
    <TaskList />
  </div>
  );
}
