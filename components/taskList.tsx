import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./taskList.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Task } from "./task";

export function TaskList() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", flexDirection: "column" }}>
            <Grid container sx={{ width: "46rem", marginTop: "64px" }}>
                <Grid sx={{ marginLeft: "-8px" }} item>
                    Tarefas Criadas
                </Grid>
                <Grid marginLeft={1} item>
                    <Box>
                        1
                    </Box>
                </Grid>
                <Grid item xs={7}></Grid>
                <Grid item>
                    Concluídas
                </Grid>
                <Grid sx={{ marginLeft: "5px " }} item >
                    <Box sx={{ marginRight: "-5px" }}>
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