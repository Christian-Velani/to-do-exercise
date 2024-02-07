import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import styles from "./newTask.module.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export function NewTask() {
    return (
        <Grid sx={{ marginTop: -5 }} className={styles.grid} container spacing={2}>
            <Grid item>
                <OutlinedInput sx={{ color: '#808080' }}
                    className={styles.textField}
                    startAdornment={
                        <InputAdornment color='#ffffff'
                            position="end">Descreva uma Ativadede
                        </InputAdornment>}
                    placeholder="Adicionar Atividade"
                />
            </Grid><Grid item>
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
                    Criar</Button>
            </Grid>
        </Grid>)
}