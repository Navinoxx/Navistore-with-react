import React from "react";
import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const ReviewsTabComments = ({ displayedComments }) => {

    return (
        <React.Fragment>
            {displayedComments.map(comment => (
                <Card key={comment.id} sx={{ borderLeft: '3px solid', borderColor: 'secondary.main', marginY: '1rem'}}>
                    <CardHeader avatar={<Avatar />} title={comment.user.username} />
                    <CardContent>
                        <Typography variant="body1">{comment.body}</Typography>
                    </CardContent>
                </Card>
            ))}
        </React.Fragment>
    )
}

ReviewsTabComments.propTypes = {
    displayedComments: PropTypes.array.isRequired
}
