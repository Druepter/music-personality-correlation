import React, {useEffect} from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';
import BigFiveArtistForm from './BigFiveArtistForm';



//import { CSVLink, CSVDownload } from "react-csv";


ChartJS.register(ArcElement, Tooltip, Legend);


export default function AgreeablenessArtist({nameArtistOne, nameArtistTwo, nameArtistThree, _agreeablenessArtistOne, _agreeablenessArtistTwo, _agreeablenessArtistThree, linkToContinue}){
  
    const [aggressiveArtistOne, setAggressiveArtistOne] = React.useState(); 
    const [boldArtistOne, setBoldArtistOne] = React.useState(); 

    const [aggressiveArtistTwo, setAggressiveArtistTwo] = React.useState(); 
    const [boldArtistTwo, setBoldArtistTwo] = React.useState(); 

    const [aggressiveArtistThree, setAggressiveArtistThree] = React.useState(); 
    const [boldArtistThree, setBoldArtistThree] = React.useState(); 

    const navigate = useNavigate();

    const calculateAgreeableness = (aggressive, bold) => {

      if(aggressive == 1) {
        aggressive = 5;
      }
      else if(aggressive == 2){
        aggressive = 4;
      }
      else if(aggressive == 4){
        aggressive = 2;
      }
      else if(aggressive == 5){
        aggressive = 1;
      }


      if(bold == 1) {
        bold = 5;
      }
      else if(bold == 2){
        bold = 4;
      }
      else if(bold == 4){
        bold = 2;
      }
      else if(bold == 5){
        bold = 1;
      }


      var agreeableness = (parseInt(aggressive) + parseInt(bold)) / 2;
      return agreeableness;
    };


    const handleButtonOnClick = () => {


      if(aggressiveArtistOne == null || boldArtistOne == null || aggressiveArtistTwo == null || boldArtistTwo == null || aggressiveArtistThree == null || boldArtistThree == null){
        alert("Bitte beantworten Sie alle Fragen!");
      }
      else {
        _agreeablenessArtistOne(calculateAgreeableness(aggressiveArtistOne, boldArtistOne))
        _agreeablenessArtistTwo(calculateAgreeableness(aggressiveArtistTwo, boldArtistTwo))
        _agreeablenessArtistThree(calculateAgreeableness(aggressiveArtistThree, boldArtistThree))

        //Navigiere weiter
        navigate(linkToContinue);
      }
      };

    return (
        <>
          <Container sx={{boxShadow: 1, mb: 50}} style={{backgroundColor: "white", paddingTop: 6}} maxWidth="md">

            <Typography sx={{mb: 1, mt: 6}}>
            	Ich nehme {nameArtistOne} als aggressiv, angriffslustig war. 
            </Typography>
            <BigFiveArtistForm statementValue={setAggressiveArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3}}>
            	Ich nehme {nameArtistOne} als mutig, entschlossen war. 
            </Typography>
            <BigFiveArtistForm statementValue={setBoldArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 6}}>
              Ich nehme {nameArtistTwo} als aggressiv, angriffslustig war.
            </Typography>
            <BigFiveArtistForm statementValue={setAggressiveArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3}}>
              Ich nehme {nameArtistTwo} als mutig, entschlossen war. 
            </Typography>
            <BigFiveArtistForm statementValue={setBoldArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 6}}>
              Ich nehme {nameArtistThree} als aggressiv, angriffslustig war.
            </Typography>
            <BigFiveArtistForm statementValue={setAggressiveArtistThree}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3}}>
              Ich nehme {nameArtistThree} als mutig, entschlossen war. 
            </Typography>
            <BigFiveArtistForm statementValue={setBoldArtistThree}></BigFiveArtistForm>


            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx = {{paddingTop: 4, paddingBottom: 5}}
            >
              <Button onClick={handleButtonOnClick} variant="contained" size="large">Weiter</Button>
            </Box>
          </Container>
        </>
    )
}

