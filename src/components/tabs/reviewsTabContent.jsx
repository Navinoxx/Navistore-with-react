import { useState, useEffect } from "react";
import { Box, Typography, Grid, Button, Divider, Rating, TextField } from "@mui/material";
import { HalfRating } from "../icons/rating";
import { ReviewsTabComments } from "./reviewsTabComments";
import { useStore } from "../../store/bookStore";
import PropTypes from "prop-types";

export const ReviewsTabContent = ({ rating }) => {
    const { comments: allComments } = useStore();
    const [displayedComments, setDisplayedComments] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [myRating, setMyRating] = useState(0);
    const [newRating, setNewRating] = useState(rating);

    useEffect(() => {
        if (displayedComments.length === 0) {
            const filteredComments = allComments.filter(() => Math.random() < 0.5).slice(0, 3);
            setDisplayedComments(filteredComments);
        }
    }, [allComments, displayedComments]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleRatingChange = (event, newValue) => {
        setMyRating(newValue);
    }

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        const newComment = { user: { username: name }, body: comment, id: displayedComments.length + 100 };
        setDisplayedComments([...displayedComments, newComment]);
        setName('');
        setComment('');
        
        const totalRating = (rating * 3) + myRating;
        const updateRating = +(totalRating / 4).toFixed(2);
        setNewRating(updateRating);
    };

    return (
        <Box>
            <Typography gutterBottom variant="h4" sx={{ textTransform: 'uppercase' }}>
                Opinions from customers
            </Typography>
            <Grid container spacing={5}>    
                <Grid item xs={12} md={6}>
                    <ReviewsTabComments displayedComments={displayedComments} />
                </Grid>
                <Grid item xs={12} md={6} textAlign="center">
                    <Typography gutterBottom variant="h2">{newRating}</Typography>
                    <HalfRating rating={newRating}/>
                    <Typography variant="body1">Based on {displayedComments.length} reviews</Typography>
                    <Divider sx={{ marginY: '2rem' }} />
                    <Typography variant="h4">Leave a review</Typography>
                    <Box component="form" onSubmit={handleCommentSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', gap: '2rem' }}>
                        <Typography variant="body1" textAlign="center">Vote: <Rating name="vote" precision={0.1} sx={{bottom: -4}} value={myRating} onChange={handleRatingChange}/></Typography>
                        <TextField label="Your name" value={name} fullWidth onChange={handleNameChange} required />
                        <TextField label="leave a comment" value={comment} fullWidth onChange={handleCommentChange} required />
                        <Button type="submit" variant="contained" sx={{ textTransform: 'uppercase', color: 'white' }}>Submit</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
    
ReviewsTabContent.propTypes = {
    rating: PropTypes.number
}