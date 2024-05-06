import { Box, Container, Grid, IconButton, InputLabel, Typography, FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export const Newsletter = () => {

    return (
        <Box sx={{ bgcolor: 'primary.main', py: 4 }}>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'center', lg: 'flex-start' }, alignItems: 'center', gap: 2 }}>
                        <Typography variant="h5" sx={{ color: 'secondary.main', textTransform: 'uppercase' }}>
                            Sign up to newsletter
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white' }}>
                            and receive a $20 coupon for your first shopping
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormControl fullWidth variant="outlined" color="default">
                            <InputLabel htmlFor="email" sx={{ color: 'primary.contrastText' }} color="default">Enter your email</InputLabel>
                            <OutlinedInput
                                id="email"
                                type="email"
                                sx={{ color: 'white' }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton type="submit" aria-label="send">
                                            <SendIcon sx={{ color: 'secondary.main' }} />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Enter your email"
                                autoComplete="off"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};