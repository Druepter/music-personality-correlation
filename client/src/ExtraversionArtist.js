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


export default function ExtraversionArtist({nameArtistOne, nameArtistTwo, nameArtistThree, _extraversionArtistOne, _extraversionArtistTwo, _extraversionArtistThree, linkToContinue}){

    const [conscientiousnessArtistOne, setConscientiousnessArtistOne] = React.useState(); 
    const [conscientiousnessArtistTwo, setConscientiousnessArtistTwo] = React.useState(); 
    const [conscientiousnessArtistThree, setConscientiousnessArtistThree] = React.useState(); 
  
    const [reservedArtistOne, setReservedArtistOne] = React.useState(); 
    const [dynamicArtistOne, setDynamicArtistOne] = React.useState(); 

    const [reservedArtistTwo, setReservedArtistTwo] = React.useState(); 
    const [dynamicArtistTwo, setDynamicArtistTwo] = React.useState(); 

    const [reservedArtistThree, setReservedArtistThree] = React.useState(); 
    const [dynamicArtistThree, setDynamicArtistThree] = React.useState(); 

    const navigate = useNavigate();

    const calculateExtraversion = (reserved, dynamic) => {

      if(reserved == 1) {
        reserved = 5;
      }
      else if(reserved == 2){
        reserved = 4;
      }
      else if(reserved == 4){
        reserved = 2;
      }
      else if(reserved == 5){
        reserved = 1;
      }

      var extraversion = (parseInt(reserved) + parseInt(dynamic)) / 2;
      return extraversion;
    };


    const handleButtonOnClick = () => {


      if(reservedArtistOne == null || dynamicArtistOne == null || reservedArtistTwo == null || dynamicArtistTwo == null || reservedArtistThree == null || dynamicArtistThree == null){
        alert("Bitte beantworten Sie alle Fragen!");
      }
      else {
        _extraversionArtistOne(calculateExtraversion(reservedArtistOne, dynamicArtistOne))
        _extraversionArtistTwo(calculateExtraversion(reservedArtistTwo, dynamicArtistTwo))
        _extraversionArtistThree(calculateExtraversion(reservedArtistThree, dynamicArtistThree))

        //Navigiere weiter
        navigate(linkToContinue);
      }
      };

    return (
        <>
          <Container sx={{boxShadow: 1, mb: 50}} style={{backgroundColor: "white", paddingTop: 6}} maxWidth="md">

            <Typography sx={{mb: 1, mt: 6}}>
              Ich nehme {nameArtistOne} als zurückhaltend, reserviert war.
            </Typography>
            <BigFiveArtistForm statementValue={setReservedArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3}}>
              Ich nehme {nameArtistOne} als dynamisch, lebhaft war. 
            </Typography>
            <BigFiveArtistForm statementValue={setDynamicArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 6}}>
              Ich nehme {nameArtistTwo} als zurückhaltend, reserviert war. 
            </Typography>
            <BigFiveArtistForm statementValue={setReservedArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3}}>
              Ich nehme {nameArtistTwo} als dynamisch, lebhaft war. 
            </Typography>
            <BigFiveArtistForm statementValue={setDynamicArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 6}}>
              Ich nehme {nameArtistThree} als zurückhaltend, reserviert war. 
            </Typography>
            <BigFiveArtistForm statementValue={setReservedArtistThree}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3}}>
              Ich nehme {nameArtistThree} als dynamisch, lebhaft war. 
            </Typography>
            <BigFiveArtistForm statementValue={setDynamicArtistThree}></BigFiveArtistForm>


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

