import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
export default makeStyles((theme) => ({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    roots: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: "50%",
    }
}));