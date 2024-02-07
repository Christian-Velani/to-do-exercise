import { Header } from "@/components/header";
import styles from "./page.module.css";
import { NewTask } from "@/components/newTask";

export default function Home() {
  return (<div>
    <Header />
    <NewTask />
  </div>
  );
}
