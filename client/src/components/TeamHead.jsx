import axios from 'axios';
import '../GlobalCssSlider.css';
import Loading from './Loading.jsx';
import useStyles from '../styles.js';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const TeamHead = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let res = await axios.get('https://hackclubnitj.herokuapp.com/users');
            let data = res.data;
            setLoading(false);
            setUsers(data);
        }
        getData();
    }, []);

    if (loading === true) {
        return (
            <>
                <section className="team">
                    <div className="container">
                        <h1>Meet the <span>Core Senior Team</span> Of <span>Hack Club NITJ</span></h1>
                    </div>
                    <br />
                    <Loading />
                </section>
            </>
        );
    }

    return (
        <section className="team">
            <div className="container">
                <h1>Meet the <span>Core Senior Team</span> Of <span>Hack Club NITJ</span></h1>
            </div>
            <br />
            <br />
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {users.map((user, i) => (
                    <Grid item xs={12} sm={6} lg={4} style={{ display: 'flex' }} key={i}>
                        <>
                            <Card sx={{ width: 405 }} style={{ boxShadow: "2px 3px 10px 5px rgba(173,172,172,0.79)" }} key={i}>
                                <Stack direction="row" spacing={0}>
                                    <CardHeader
                                        style={{ fontSize: "1.2em", color: "red" }}
                                        avatar={
                                            <Avatar sx={{ width: 100, height: 100 }} src={user.image} alt={user.name} />
                                        }
                                    />
                                    <Stack direction="column" spacing={0} style={{ marginTop: "25px" }}>
                                        <Typography gutterBottom variant="h5" style={{ fontWeight: "600", marginLeft: "-15px", fontFamily: "Quicksand, sans-serif", textTransform: "capitalize" }} component="div">
                                            {user.name}
                                        </Typography>
                                        <Typography gutterBottom variant="body1" style={{ fontWeight: "600", marginLeft: "-15px", fontFamily: "Quicksand, sans-serif", textTransform: "capitalize" }} component="div" color="secondary">
                                            {user.role}
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Typography gutterBottom variant="body1" style={{ fontWeight: "600", fontFamily: "Quicksand, sans-serif", textTransform: "capitalize", margin: "0 20px" }} component="div" color="primary">
                                    {user.description}
                                </Typography>
                                <CardActions disableSpacing>
                                    <Stack direction="row" spacing={2}>
                                        <Link href={user.linkedin} style={{ textDecoration: "none" }} target="_blank">
                                            <IconButton aria-label="Stars">
                                                <LinkedInIcon style={{ color: "#0e76a8", marginRight: "2px", marginTop: "5px", height: "40px", width: "40px" }} />
                                            </IconButton>
                                        </Link>
                                        <Link href={user.twitter} style={{ textDecoration: "none" }} target="_blank">
                                            <IconButton aria-label="Watchers">
                                                <TwitterIcon style={{ color: "#00acee", marginRight: "2px", marginTop: "5px", height: "40px", width: "40px" }} />
                                            </IconButton>
                                        </Link>
                                        <Link href={user.github} style={{ textDecoration: "none" }} target="_blank">
                                            <IconButton aria-label="Watchers">
                                                <GitHubIcon style={{ color: "black", marginRight: "2px", marginTop: "5px", height: "40px", width: "40px" }} />
                                            </IconButton>
                                        </Link>
                                        <Link href={user.website} style={{ textDecoration: "none" }} target="_blank">
                                            <IconButton aria-label="Stars">
                                                <PublicIcon style={{ color: "grey", marginRight: "2px", marginTop: "5px", height: "40px", width: "40px" }} />
                                            </IconButton>
                                        </Link>
                                    </Stack>
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

export default TeamHead;