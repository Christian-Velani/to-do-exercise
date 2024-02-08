import Grid from '@mui/material/Grid';
import CheckBox from '@mui/material/Checkbox';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';
import styles from './task.module.css'

export function Task(props: any) {
    return (
        <Grid sx={{ width: "46rem", borderRadius: "0.5rem" }} className={styles.grid} container spacing={2}>
            <Grid item>
                <CheckBox
                    icon={
                        <RadioButtonUncheckedIcon sx=
                            {
                                {
                                    fontSize: '1.5rem',
                                    color: "#4EA8DE",
                                }
                            } />
                    }
                    checkedIcon=
                    {
                        <CheckCircleIcon sx=
                            {
                                {
                                    color: "#5E60CE",
                                    fontSize: "1.5rem",
                                }
                            } />
                    } />
            </Grid>
            <Grid item>
                <p aria-multiline className={styles.p}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minima assumenda eos eligendi nesciunt sint repellat quod dicta pariatur reiciendis in, ea totam laboriosam repellendus deleniti eveniet. Dolorum, facere incidunt.
                </p>
            </Grid>
            <Grid item>
                <IconButton>
                    <DeleteForeverOutlinedIcon sx=
                        {
                            {
                                fontSize: "1.5rem",
                                color: "#808080",
                            }
                        } />
                </IconButton>
            </Grid>
        </Grid>
    )
}