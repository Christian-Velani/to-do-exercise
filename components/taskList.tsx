"use client";
import { Box, Stack, Typography } from "@mui/material";
import Task from "@/components/Task";
import { TaskModel } from "@/app/page";
import clipBoard from "/images/Clipboard.svg";
import Image from "next/image";

interface TaskListProps {
  tasks: TaskModel[];
  deleteTask: (task: TaskModel, status: boolean) => void;
  checkChanged: (operator: string) => void;
  checkedCount: number;
}
export default function TaskList({
  tasks,
  deleteTask,
  checkChanged,
  checkedCount,
}: TaskListProps) {
  console.log(checkedCount);
  return (
    <Stack alignItems={"center"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"1.188rem"}
        marginBottom={"2.688rem"}
        marginTop={"4rem"}
      >
        <Typography
          fontWeight={400}
          fontSize={"0.875rem"}
          color={"#4EA8DE"}
          fontFamily={"inherit"}
        >
          Tarefas Criadas
        </Typography>
        <Box
          marginLeft={"0.313rem"}
          width={"1.5rem"}
          height={"1.188rem"}
          borderRadius={999}
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
          fontFamily={"inherit"}
          fontSize={"0.75rem"}
          bgcolor={"#333333"}
          color={"#d9d9d9"}
        >
          {tasks.length}
        </Box>
        <Box width={460}></Box>
        <Typography
          fontFamily={"inherit"}
          fontSize={"0.875rem"}
          fontWeight={700}
          color={"#8284FA"}
        >
          Concluídas
        </Typography>{" "}
        <Box
          width={"3.25rem"}
          height={"1.188rem"}
          borderRadius={999}
          fontFamily={"inherit"}
          fontSize={"0.75rem"}
          fontWeight={700}
          alignItems={"center"}
          justifyContent={"center"}
          marginLeft={"0.313rem"}
          display={"flex"}
          bgcolor={"#333333"}
          color={"#d9d9d9"}
        >
          {checkedCount} de {tasks.length}
        </Box>
      </Box>
      {tasks.length !== 0 && (
        <Stack>
          {tasks.map((task) => (
            <Task
              key={task.id}
              taskData={task}
              checkBoxChange={checkChanged}
              deleteTask={deleteTask}
            />
          ))}
        </Stack>
      )}
      {tasks.length === 0 && (
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          height={"15.25rem"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Image src={clipBoard} width={56} height={56} alt="clipboard" />
          <Typography fontSize={"1rem"} color={"#808080"} fontWeight={"bold"}>
            Você ainda não tem tarefas cadastradas
          </Typography>
          <Typography fontSize={"1rem"} color={"#808080"} fontWeight={"normal"}>
            Crie tarefas e organize seus itens a fazer
          </Typography>
        </Box>
      )}
    </Stack>
  );
}
