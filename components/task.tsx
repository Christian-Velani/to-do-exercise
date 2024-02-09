import { Checkbox, IconButton, Box, Typography } from "@mui/material";
import {
  DeleteForeverOutlined,
  RadioButtonUnchecked,
  CheckCircle,
} from "@mui/icons-material";
import { useState } from "react";
import { TaskModel } from "@/app/page";

interface TaskProps {
  checkBoxChange: (operator: string) => void;
  deleteTask: (task: TaskModel, status: boolean) => void;
  taskData: TaskModel;
}

export default function Task({
  checkBoxChange,
  taskData,
  deleteTask,
}: TaskProps) {
  const [checked, isChecked] = useState(false);

  return (
    <Box
      width={"46rem"}
      borderRadius={"0.5rem"}
      display={"flex"}
      marginTop={"0.5rem"}
      marginBottom={"0.5rem"}
      bgcolor={"#262626"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
    >
      <Checkbox
        onChange={() => {
          if (checked) {
            isChecked(false);
            checkBoxChange("-");
          } else {
            isChecked(true);
            checkBoxChange("+");
          }
        }}
        checked={checked ? true : false}
        icon={
          <RadioButtonUnchecked
            sx={{
              fontSize: "1.5rem",
              color: "#4EA8DE",
            }}
          />
        }
        checkedIcon={
          <CheckCircle
            sx={{
              color: "#5E60CE",
              fontSize: "1.5rem",
            }}
          />
        }
      />
      <Typography
        aria-multiline
        sx={
          !checked
            ? {
                whiteSpace: "wrap",
                maxWidth: "31.25rem",
                fontFamily: "inherit",
                fontSize: "0.875rem",
                color: "#F2F2F2",
                marginTop: "0.625rem",
              }
            : {
                whiteSpace: "wrap",
                maxWidth: "31.25rem",
                fontFamily: "inherit",
                fontSize: "0.875rem",
                color: "#808080",
                marginTop: "0.625rem",
                textDecoration: "line-through",
              }
        }
      >
        {taskData.text}
      </Typography>
      <IconButton
        onClick={() => {
          deleteTask(taskData, checked);
        }}
      >
        <DeleteForeverOutlined
          sx={{
            fontSize: "1.5rem",
            color: "#808080",
          }}
        />
      </IconButton>
    </Box>
  );
}
