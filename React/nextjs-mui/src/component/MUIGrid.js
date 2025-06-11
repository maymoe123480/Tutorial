
import { Grid, Box } from "@mui/material";
export default function MUIGrid() {
    return (
        <Grid container spacing={2}>
            <Grid size={{xs:12, sm:6}}>
                <Box sx={{bgcolor:"red", p:2}}>Left </Box>
            </Grid>

            <Grid size={{xs:12, sm:6}}>
                <Box sx={{bgcolor:"green", p:2}}>Right </Box>
            </Grid>
        </Grid>

    );
}