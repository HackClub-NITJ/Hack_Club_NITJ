import axios from 'axios';
import Loading from './Loading.jsx';
import useStyles from '../styles.js';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';


const Project = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let res = await axios.get('https://api.github.com/users/HackClub-NITJ/repos?per_page=300');
            let data = res.data;
            setLoading(false);
            setContent(data);
        }
        getData();
    }, []);

    if (loading === true) {
        return (
            <>
                <section className="project">
                    <div className="container">
                        <h1>Welcome To</h1>
                        <h1>Hack Club NITJ</h1>
                        <h1>Projects Section.</h1>
                        <p>
                            All the projects built by the members of <span>Hack Club NITJ</span>.
                            It fetches all the projects labelled with <span>Hack Club NITJ</span>.
                        </p>
                        <a href="#projectsInfo">
                            <ArrowDropDownCircleIcon style={{ margin: "20px 0", color: "white", height: "120px", width: "250px" }} />
                        </a>
                    </div>
                </section>
                <section className="projectsInfo" id="projectsInfo">
                    <Loading />
                </section>
            </>
        );
    }

    return (
        <>
            <section className="project">
                <div className="container">
                    <h1>Welcome To</h1>
                    <h1>Hack Club NITJ</h1>
                    <h1>Projects Section.</h1>
                    <p>
                        All the projects built by the members of <span>Hack Club NITJ</span>.
                        It fetches all the projects labelled with <span>Hack Club NITJ</span>.
                    </p>
                    <a href="#projectsInfo">
                        <ArrowDropDownCircleIcon style={{ margin: "20px 0", color: "white", height: "120px", width: "250px" }} />
                    </a>
                </div>
            </section>
            <section className="projectsInfo" id="projectsInfo">
                <br />
                <br />
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {content.map((repo, i) => (
                        <Grid item xs={12} sm={6} lg={4} style={{ display: 'flex' }} key={i}>
                            <>
                                <Card sx={{ width: 405 }} style={{ boxShadow: "2px 3px 10px 5px rgba(173,172,172,0.79)" }} key={i}>
                                    <Stack direction="row" spacing={0}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ width: 86, height: 86 }} src={repo.owner.avatar_url} alt={repo.owner.login} />
                                            }
                                        />
                                        <Stack direction="column" spacing={0} style={{ marginTop: "25px" }}>
                                            <Typography gutterBottom variant="h6" style={{ fontWeight: "600", fontFamily: "Quicksand, sans-serif", marginLeft: "-15px", textTransform: "capitalize" }} component="div">
                                                {repo.name}
                                            </Typography>
                                            <Typography gutterBottom variant="body2" style={{ fontWeight: "600", marginLeft: "-15px", fontFamily: "Quicksand, sans-serif", textTransform: "capitalize" }} component="div" color="secondary">
                                                {`Repo Created On ${repo.created_at.slice(0, 10)}`}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <CardContent>
                                        <Typography variant="body1" style={{ fontWeight: "bold", fontFmaily: "Roboto, sans-serif" }} color="text.primary">
                                            Lang: {!repo.language ? "Nill" : repo.language}
                                        </Typography>
                                        <Typography variant="p" color="text.secondary" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                            {repo.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <Stack direction="row" spacing={2}>
                                            <IconButton aria-label="Stars">
                                                <StarIcon style={{ color: "gold", marginRight: "5px", height: "40px", width: "40px" }} /> {repo.stargazers_count}
                                            </IconButton>
                                            <IconButton aria-label="Watchers">
                                                <VisibilityIcon style={{ color: "black", marginRight: "5px", marginTop: "5px", height: "40px", width: "40px" }} />{repo.watchers}
                                            </IconButton>
                                            <IconButton aria-label="Stars">
                                                <Link href={repo.html_url} style={{ marginTop: "5px", color: "#00FF00", textDecoration: "none" }} underline="none" target="_blank">
                                                    <DoubleArrowIcon style={{ color: "#00FF00", marginRight: "-10px", height: "40px", width: "40px" }} /> View Repo
                                                </Link>
                                            </IconButton>
                                        </Stack>
                                    </CardActions>
                                </Card>
                            </>
                        </Grid>
                    ))}
                </Grid>
                <br />
                <br />
            </section>
        </>
    );
}

export default Project;