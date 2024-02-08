import Grid from '@mui/material/Grid';
import CheckBox from '@mui/material/Checkbox';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';
import styles from './task.module.css'
import { useState } from 'react';


export function Task(props: any) {
    const [checked, isChecked] = useState(false);

    function handleCheckBoxChange() {
        checked ? isChecked(false) : isChecked(true);
    }

    return (
        <Grid sx={{ width: "46rem", borderRadius: "0.5rem" }} className={styles.grid} container spacing={2}>
            <Grid item>
                <CheckBox onChange={handleCheckBoxChange} checked={checked ? true : false}
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
                <p aria-multiline className={!checked ? styles.p : styles.pChecked}>
                    {props.texto}
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