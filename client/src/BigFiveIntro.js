import React, {useEffect} from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";



//import { CSVLink, CSVDownload } from "react-csv";


ChartJS.register(ArcElement, Tooltip, Legend);


export default function BigFiveIntro(){
    

    return (
        <>
          <Container sx={{boxShadow: 1}} style={{backgroundColor: "white", paddingTop: 6}} maxWidth="md">
            <Typography sx={{mb: 3, mt: 3}}>
                Im nun folgenden wirst du 10 Fragen zu deiner Perönlickeit beantworten. Schätze dich möglich gut selbst ein.
            </Typography>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx = {{paddingTop: 4, paddingBottom: 5}}
            >
              <Button component={RouterLink} to={"/bigFiveUser"} variant="contained" size="large">Beginnen</Button>
            </Box>
          </Container>
        </>
    )
}
