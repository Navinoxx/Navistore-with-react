import { Typography, styled } from "@mui/material";
import PropTypes from "prop-types";

const Title = styled(Typography)(( { theme } ) => ({
    position: 'relative',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: '0 0 0 4rem',
    '&::first-letter': {
        color: theme.palette.secondary.main,
    },
    '&::after': {
        position: 'absolute',
        content: '""',
        left: 0,
        top: '50%',
        width: '3rem',
        height: '0.15rem',
        backgroundColor: theme.palette.secondary.main, 
    }
}));

export const CustomTitle = ({ title }) => {
    return (
        <Title variant="h3" gutterBottom>{title}</Title>
    )
}

CustomTitle.propTypes = {
    title: PropTypes.string
}