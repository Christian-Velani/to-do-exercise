import { Header } from "@/components/header";
import { NewTask } from "@/components/newTask";
import { Task } from "@/components/task";

export default function Home() {
  return (<div>
    <Header />
    <NewTask />
    <Task />
  </div>
  );
}
