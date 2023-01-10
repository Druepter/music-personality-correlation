import React, {useEffect} from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";



//import { CSVLink, CSVDownload } from "react-csv";


ChartJS.register(ArcElement, Tooltip, Legend);


export default function Outro(){
    

    return (
        <>
          <Container sx={{boxShadow: 1}} style={{backgroundColor: "white", paddingTop: 6}} maxWidth="md">
            <Typography sx={{mb: 3, mt: 3}}>
                Dankeschön! Damit sind alle Fragen beantwortet. Vielen Dank für das Teilnehmen an der Umfrage!
            </Typography>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx = {{paddingTop: 4, paddingBottom: 5}}
            >
              <Button component={RouterLink} to={"/bigFiveUser"} variant="contained" size="large">Ausloggen</Button>
            </Box>
          </Container>
        </>
    )
}

