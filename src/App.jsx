import React from 'react';
import { Typography, Button, CssBaseline, Card, AppBar, Toolbar, CardActions, Grid, Container} from '@material-ui/core';
import ToggleButtons from './componets/toggle';
import searchBar from './componets/searchBar';
import BasicTable from './componets/table';
import SearchAppBar from './componets/searchBar';
import BasicCard from './componets/card';
import LinearProgressWithLabel from './componets/progressBar'

//hook usetyles = function call make styles
//returns an object that contains the styles
// const useStyles = makeStyles(() => ({
//     container:{

//     }
// }));

const App = () => {

    return(
        <>
            <CssBaseline/ >
                <SearchAppBar />
            <Typography align="rightr">
                <ToggleButtons />
            </Typography>
            <main>
                <div>
                    <Typography variant="h1" align="center" color="textPrimary" gutterBottom>
                        <Grid container spacing={3} columns={10}>
                        </Grid>
                    </Typography>
                    <Container maxWidth="sm">
                        <div >
                            <Grid item xs={7} container spacing = {2} justify="left">
                                <Container maxWidth="sm" spacing="3">
                                    <Grid wrap="wrap">
                                        <BasicTable />
                                    </Grid>
                                    <Typography variant="h5" component="h2">
                                        Description<Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                        </Typography>
                                    </Typography>
                                    <Grid item xs={6} md={8}>
                                        <LinearProgressWithLabel />
                                        <Typography>
                                            <BasicCard>
                                            </BasicCard>
                                        </Typography>
                                    </Grid>
                                </Container>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    );
}

export default App;