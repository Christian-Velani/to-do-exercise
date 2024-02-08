'use client'
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import styles from "./newTask.module.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from "react";

export function NewTask() {
    const [isFocused, setIsFocused] = useState(false);
    const [placeholder, setPlaceholder] = useState("Adicionar Atividade");

    return (
        <Grid sx={{ marginTop: -5 }} className={styles.grid} container spacing={2}>
            <Grid item>
                <OutlinedInput sx=
                    {
                        {
                            color: '#808080',
                            width: '39.875rem',
                            borderRadius: '0.5rem',
                            fontFamily: '--font-inter',
                            fontSize: '1rem',
                            fontWeight: "400"
                        }
                    }
                    className={styles.textField}
                    startAdornment={isFocused && (
                        <InputAdornment disableTypography sx=
                            {
                                {
                                    color: "white",
                                    marginRight: '0.5rem'
                                }
                            } position="end">
                            Descreva uma Ativadede
                        </InputAdornment>
                    )}
                    placeholder={isFocused ? "" : placeholder}
                    onFocus={() => {
                        setIsFocused(true);
                        setPlaceholder('')
                    }}
                    onBlur={() => {
                        setIsFocused(false);
                        setPlaceholder("Adicionar Atividade")
                    }}
                />
            </Grid>
            <Grid item>
                <Button sx={
                    { borderRadius: 2 }
                }
                    className=
                    {
                        styles.button
                    }
                    variant="contained"
                    endIcon=
                    {
                        <AddCircleOutlineIcon />
                    }>
                    Criar
                </Button>
            </Grid>
        </Grid>)
}