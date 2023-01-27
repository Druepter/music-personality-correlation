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


export default function NeuroticismArtist({nameArtistOne, nameArtistTwo, nameArtistThree, _neuroticismArtistOne, _neuroticismArtistTwo, _neuroticismArtistThree, linkToContinue}){
  
    const [relaxedArtistOne, setRelaxedArtistOne] = React.useState(); 
    const [insecureArtistOne, setInsecureArtistOne] = React.useState(); 

    const [relaxedArtistTwo, setRelaxedArtistTwo] = React.useState(); 
    const [insecureArtistTwo, setInsecureArtistTwo] = React.useState(); 

    const [relaxedArtistThree, setRelaxedArtistThree] = React.useState(); 
    const [insecureArtistThree, setInsecureArtistThree] = React.useState(); 

    const navigate = useNavigate();

    const calculateNeuroticism = (relaxed, insecure) => {

      if(relaxed == 1) {
        relaxed = 5;
      }
      else if(relaxed == 2){
        relaxed = 4;
      }
      else if(relaxed == 4){
        relaxed = 2;
      }
      else if(relaxed == 5){
        relaxed = 1;
      }

      var neuroticism = (parseInt(relaxed) + parseInt(insecure)) / 2;
      return neuroticism;
    };


    const handleButtonOnClick = () => {


      if(relaxedArtistOne == null || insecureArtistOne == null || relaxedArtistTwo == null || insecureArtistTwo == null || relaxedArtistThree == null || insecureArtistThree == null){
        alert("Bitte beantworten Sie alle Fragen!");
      }
      else {
        _neuroticismArtistOne(calculateNeuroticism(relaxedArtistOne, insecureArtistOne))
        _neuroticismArtistTwo(calculateNeuroticism(relaxedArtistTwo, insecureArtistTwo))
        _neuroticismArtistThree(calculateNeuroticism(relaxedArtistThree, insecureArtistThree))

        //Navigiere weiter
        navigate(linkToContinue);
      }
      };

    return (
        <>
          <Container sx={{boxShadow: 1, mb: 50}} style={{backgroundColor: "white", paddingTop: 6}} maxWidth="md">

            <Typography sx={{mb: 1, mt: 6}}>
              Ich denke {nameArtistOne} ist entspannt, lässt sich durch Stress nicht aus der Ruhe bringen.
            </Typography>
            <BigFiveArtistForm statementValue={setRelaxedArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3}}>
            	Ich denke {nameArtistOne} wird leicht nervös und unsicher. 
            </Typography>
            <BigFiveArtistForm statementValue={setInsecureArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 6}}>
              Ich denke {nameArtistTwo} ist entspannt, lässt sich durch Stress nicht aus der Ruhe bringen.
            </Typography>
            <BigFiveArtistForm statementValue={setRelaxedArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3}}>
              Ich denke {nameArtistTwo} wird leicht nervös und unsicher. 
            </Typography>
            <BigFiveArtistForm statementValue={setInsecureArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 6}}>
              Ich denke {nameArtistThree} ist entspannt, lässt sich durch Stress nicht aus der Ruhe bringen.
            </Typography>
            <BigFiveArtistForm statementValue={setRelaxedArtistThree}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3}}>
              Ich denke {nameArtistThree} wird leicht nervös und unsicher.
            </Typography>
            <BigFiveArtistForm statementValue={setInsecureArtistThree}></BigFiveArtistForm>


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

