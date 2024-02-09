"use client";
import Header from "@/components/Header";
import NewTask from "@/components/NewTask";
import TaskList from "@/components/TaskList";
import { Box } from "@mui/material";
import { useState } from "react";

export interface TaskModel {
  id: number;
  text: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [checkCount, setCheckCount] = useState(0);

  function handleCreateNewTask(newTaskText: string) {
    if (newTaskText === "") {
      return;
    }
    var task = {
      id: tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1,
      text: newTaskText,
    };
    setTasks([...tasks, task]);
  }

  function handleCheckBoxChange(operator: string) {
    operator === "+"
      ? setCheckCount(checkCount + 1)
      : setCheckCount(checkCount - 1);
  }

  function hanldeDeleteTask(taskRemove: TaskModel, status: boolean) {
    if (status) {
      setCheckCount(checkCount - 1);
    }
    var newTasks = tasks.filter((task) => task.id !== taskRemove.id);
    setTasks(newTasks);
  }

  return (
    <Box>
      <Header />
      <NewTask createNewTask={handleCreateNewTask} />
      <TaskList
        checkChanged={handleCheckBoxChange}
        checkedCount={checkCount}
        deleteTask={hanldeDeleteTask}
        tasks={tasks}
      />
    </Box>
  );
}
