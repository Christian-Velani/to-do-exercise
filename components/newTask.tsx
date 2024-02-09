"use client";
import { OutlinedInput, InputAdornment, Button, Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";

interface NewTaskProps {
  createNewTask: (newTaskText: string) => void;
}

export default function NewTask({ createNewTask }: NewTaskProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState("Adicionar Atividade");
  const [newTaskText, setNewTaskText] = useState("");

  return (
    <Box
      display={"flex"}
      height={"3.375rem"}
      alignItems={"center"}
      justifyContent={"center"}
      marginTop={"-1.6875rem"}
      gap={1}
    >
      <OutlinedInput
        value={newTaskText}
        onChange={(event) => setNewTaskText(event.target.value)}
        sx={{
          color: "#808080",
          width: "39.875rem",
          borderRadius: "0.5rem",
          fontFamily: "inherit",
          fontSize: "1rem",
          fontWeight: "400",
          bgcolor: "#262626",
          outlineColor: "#0D0D0D",
        }}
        startAdornment={
          isFocused && (
            <InputAdornment
              disableTypography
              sx={{
                color: "white",
                marginRight: "0.5rem",
              }}
              position="end"
            >
              Descreva uma Ativadede
            </InputAdornment>
          )
        }
        placeholder={isFocused ? "" : placeholder}
        onFocus={() => {
          setIsFocused(true);
          setPlaceholder("");
        }}
        onBlur={() => {
          setIsFocused(false);
          setPlaceholder("Adicionar Atividade");
        }}
      />
      <Button
        onClick={() => {
          createNewTask(newTaskText);
          setNewTaskText("");
        }}
        sx={{ borderRadius: 2, width: "5.625rem", height: "3.25rem" }}
        variant="contained"
        endIcon={<AddCircleOutlineIcon />}
      >
        Criar
      </Button>
    </Box>
  );
}
