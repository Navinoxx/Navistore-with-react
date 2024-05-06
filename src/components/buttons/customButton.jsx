import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const Custom = styled('button')(( { theme } ) => ({
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    outline: 'none',
    border: 0,
    verticalAlign: 'middle',
    background: 'transparent',
    padding: 0,
    width: '9rem',
    [theme.breakpoints.down('md')]: {
        width: '11rem',
        padding: 2,
    },
    '& .circle': {
        transition: 'all 0.45s cubic-bezier(0.65, 0, 0.076, 1)',
        position: 'relative',
        display: 'block',
        margin: 0,
        width: '2rem',
        height: '2rem',
        background: theme.palette.primary.contrastText,
        borderRadius: '1.625rem',
        '& .icon': {
        transition: 'all 0.45s cubic-bezier(0.65, 0, 0.076, 1)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        margin: 'auto',
        background: '#fff',
        '&.arrow': {
            left: '0.15rem',
            width: '1.125rem',
            height: '0.125rem',
            background: 'none',
            '&::before': {
            position: 'absolute',
            content: '""',
            top: '-0.25rem',
            right: '0.0625rem',
            width: '0.625rem',
            height: '0.625rem',
            borderTop: '0.125rem solid #fff',
            borderRight: '0.125rem solid #fff',
            transform: 'rotate(45deg)', 
            },
        },
        },
    },
    '& .button-text': {
        transition: 'all 0.45s cubic-bezier(0.65, 0, 0.076, 1)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: '0.3rem 0',
        margin: '0 0 0 1.85rem',
        color: theme.palette.primary.contrastText,
        fontWeight: 700,
        lineHeight: 1.6,
    },
    '&:hover .circle': {
        width: '100%',
    },
    '&:hover .circle .icon.arrow': {
        background: '#fff',
        transform: 'translate(1rem, 0)',
    },
    '&:hover .button-text': {
        color: '#fff',
    },
}));

export const CustomButton = ({ text }) => {

    return (
        <Custom className="learn-more">
            <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
            </span>
            <span className="button-text">{text}</span>
        </Custom>
    );
}

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
}


