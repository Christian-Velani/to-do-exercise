import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Task } from "./task";
import styles from "./taskList.module.css";

export function TaskList() {
    return (
        <Box sx=
            {
                {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    flexDirection: "column"
                }
            }>
            <Grid container sx=
                {
                    {
                        width: "46rem",
                        marginTop: "4rem",
                        height: '1.188rem',
                        marginBottom: '2.688rem',
                        alignItems: 'center',
                    }
                }>
                <Grid className={styles.gridItem1} sx=
                    {
                        {
                            marginLeft: "-8px",
                            fontFamily: '--font-inter',
                            fontWeight: "400",
                            fontSize: "0.875rem"
                        }
                    } item>
                    Tarefas Criadas
                </Grid>
                <Grid item>
                    <Box className={styles.box} sx=
                        {
                            {
                                marginLeft: "0.313rem",
                                width: "1.5rem",
                                height: "1.188rem",
                                borderRadius: "62.438rem",
                                alignItems: "center",
                                justifyContent: 'center',
                                display: 'flex',
                                fontFamily: '--font-inter',
                                fontSize: '0.75rem'
                            }
                        }>
                        1
                    </Box>
                </Grid>
                <Grid item xs={8} />
                <Grid className={styles.gridItem2} item sx=
                    {
                        {
                            fontFamily: '--font-inter',
                            fontSize: '0.875rem',
                            fontWeight: '700',
                        }
                    }>
                    Concluídas
                </Grid>
                <Grid item >
                    <Box className={styles.box} sx=
                        {
                            {
                                width: '52px',
                                height: '1.188rem',
                                borderRadius: '62.438rem',
                                marginRight: "-0.313rem",
                                fontFamily: '--font-inter',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: '0.313rem',
                                display: 'flex',
                            }
                        }>
                        2 de 5
                    </Box>
                </Grid>
            </Grid>
            <List>
                <ListItem>
                    <Task />
                </ListItem>
                <ListItem>
                    <Task />
                </ListItem>
                <ListItem>
                    <Task />
                </ListItem>
            </List>
        </Box>
    )
}