import { Box, IconButton, Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export const DetailsButton = () => {
    
    return (
        <Box sx={{ display: 'flex', border: '1px solid white', borderRadius: '2rem', alignItems: 'center' }}>
            <Typography sx={{ paddingLeft: '2rem' }}>Details</Typography>
            <IconButton aria-label="view details" sx={{ color: 'white', bgcolor: 'primary.contrastText', boxShadow: '0px 0px 0px 5px rgba(0, 0, 0, 0.3)', '&:hover': { bgcolor: 'secondary.main', boxShadow: '0px 0px 0px 5px rgba(245, 198, 21, 0.3)' }, left: '1rem', transition: 'all 0.3s ease' }}>
                <RemoveRedEyeIcon />
            </IconButton>
        </Box>
    )
}