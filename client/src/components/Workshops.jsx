import axios from 'axios';
import Loading from './Loading.jsx';
import useStyles from '../styles.js';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';

const Workshops = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [workshops, setWorkshops] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let res = await axios.get('https://hackclubnitj.herokuapp.com/workshop');
            let data = res.data;
            setWorkshops(data);
            setLoading(false);
            console.log(data);
        }
        getData();
    }, []);

    if (loading === true) {
        return (
            <>
                <section className="workshops">
                    <div className="container">
                        <h1>Hack Club NITJ's Workshops And Events</h1>
                        <p>Learn to program with this collection of community-made workshops with innovative tutorials and unique ideas.</p>
                    </div>
                    <br />
                    <Loading />
                    <br />
                </section>
            </>
        );
    }

    return (
        <section className="workshops">
            <div className="container">
                <h1>Hack Club NITJ's Workshops And Events</h1>
                <p>Learn to program with this collection of community-made workshops with innovative tutorials and unique ideas.</p>
            </div>
            <br />
            <br />
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {workshops.map((workshop, i) => (
                    <Grid item xs={12} sm={6} lg={4} style={{ display: 'flex' }} key={i}>
                        <>
                            <Card sx={{ maxWidth: 405 }} key={i}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{ height: "210px" }}
                                        component="img"
                                        width="405"
                                        image={workshop.image}
                                        alt={workshop.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" style={{ fontWeight: "600", fontFamily: "Quicksand, sans-serif", textTransform: "capitalize" }} component="div">
                                            {workshop.name}
                                        </Typography>
                                        <Typography gutterBottom variant="body1" style={{ color: "#01579b", fontWeight: "600", fontFamily: "Roboto, sans-serif", textTransform: "capitalize" }} component="div">
                                            {workshop.doneBy}
                                        </Typography>
                                        <Typography variant="body2" style={{ fontWeight: "600", fontFamily: "Montserrat, sans-serif", textTransform: "capitalize" }} color="text.secondary">
                                            {workshop.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Link href={workshop.linkOfWorshop} style={{ textDecoration: "none", fontFamily: "Cinzel, sans-serif" }} target="_blank">
                                        <Button size="small" style={{ fontWeight: "600", textDecoration: "none", fontFamily: "Cinzel, sans-serif" }} color="success">
                                            Go To Link Of Workshop
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                            <br />
                        </>
                    </Grid>
                ))}
            </Grid>
            <br />
            <br />
        </section>
    );
}

export default Workshops;