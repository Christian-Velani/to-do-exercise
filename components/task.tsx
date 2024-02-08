import Grid from '@mui/material/Grid';
import CheckBox from '@mui/material/Checkbox';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';
import styles from './task.module.css'

export function Task(props: any) {
    return (
        <Grid className={styles.grid} container spacing={2} width={736}>
            <Grid item>
                <CheckBox
                    icon={
                        <RadioButtonUncheckedIcon />
                    }
                    checkedIcon=
                    {
                        <CheckCircleIcon />
                    } />
            </Grid>
            <Grid item>
                <p aria-multiline className={styles.p}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minima assumenda eos eligendi nesciunt sint repellat quod dicta pariatur reiciendis in, ea totam laboriosam repellendus deleniti eveniet. Dolorum, facere incidunt.
                </p>
            </Grid>
            <Grid item>
                <IconButton>
                    <DeleteForeverOutlinedIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}