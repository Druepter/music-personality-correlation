import React, {useState, useEffect} from "react";
import Statement from "./Statement";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';


export default function StatementContainerGoldMSI({setGoldMSIData, linkToContinue}){

    //Map, welche alle Statements in Textform und als Nummer beinhaltet
    const statementMap = new Map();
    statementMap.set(1, 'Ich beschäftige mich in meiner Freizeit viel mit musikbezogenen Aktivitäten.')
    statementMap.set(2, 'Ich kann beurteilen, ob jemand falsch oder richtig singt oder spielt.')
    statementMap.set(3, 'Ich habe regelmäßig und täglich ein Instrument (einschließlich Gesang) für ... Jahre geübt.')
    statementMap.set(4, 'Ich bin in der Lage, die richtigen Töne zu treffen, wenn ich zu einer Aufnahme mitsinge.')
    statementMap.set(5, 'Musik kann bei mir Erinnerungen an Personen und Orte hervorrufen.')



    //Map, welche die Nummern der Statementes und die Nummern der Auswahl des Nutzers beeinhaltet
    //key = Statement Nummer
    //value = auswahl welche der Nutzer getroffen hat
    const [statementSelectionMap, setStatementSelectionMap] = useState(new Map())

    //Wenn sich diese States ändern. verändert sich die Seite
    const [statementDescription, setStatementDescription] = useState(statementMap.get(1))
    const [statementNumber, setStatementNumber] = useState(1)
    const [allStatementsDone, setAllStatementsDone] = useState(false)




    const increaseStatementNumber = () => {
      if(statementNumber < statementMap.size){
        setStatementNumber(statementNumber + 1)
      }
      else{
        setAllStatementsDone(true)
      }
      
    }

    const matchStatementDescriptionToStatementNumer = () => {
      setStatementDescription(statementMap.get(statementNumber))
    }

    //Füge der Selection Map einen Eintrag hinzu
    const addEntryToStatementSelectionMap = (number, selection) => {
      setStatementSelectionMap(statementSelectionMap.set(number, selection))
    }

    //berechne den GodlMSIScore
    //Dazu werden alle Values von den Statements addiert
    const calculateGoldMSI = () => {

      var GoldMSIScore = 0;

      statementSelectionMap.forEach((value, key) => {

        GoldMSIScore = GoldMSIScore + value;

      })

      console.log(GoldMSIScore)
     

    

      const bigFiveMap = new Map()

     //setBigFiveData(bigFiveMap)


    }


    //Einige Statements sind negative Fragen. Diese müssen zu nächst recodiert werden
    const recodeStatements = () => {
      console.log("Map nicht recodiert:")
      console.log(statementSelectionMap)

      statementSelectionMap.forEach((value, key) => {
        console.log("jedes element " + key)
        //All diese Statements müssen recodiert werden
        if(key == 1 || key == 3 || key == 4 || key == 5 || key == 7){
          if(value == 1) {
            statementSelectionMap.set(key, 5)
          }
          else if(value == 2){
            statementSelectionMap.set(key, 4)
          }
          else if(value == 4){
            statementSelectionMap.set(key, 2)
          }
          else if(value == 5){
            statementSelectionMap.set(key, 1)
          }
        }    
      })
      console.log("Map recodiert jo:")
      console.log(statementSelectionMap)

      

    }

    useEffect(() => {
      //Wenn statementNumber sich ändert setzte auch statementDescription neu
      matchStatementDescriptionToStatementNumer()
    }, [statementNumber])

    useEffect(() => {
      //Hier muss eine Prüfung erfolgen ob alle Statements wirklich bearbeitet wurden
      //React führt die Hook use Effekt sonst zweimal aus
      //Einmal bei Initialisierung und einmal beim ändern
      if(allStatementsDone == true){
        calculateGoldMSI()
      }
    }, [allStatementsDone])


    return (
        <>
          <Container sx={{boxShadow: 1}} style={{backgroundColor: "white", paddingTop: 6}} maxWidth="md">
            {allStatementsDone == false ?
              <Statement description={statementDescription} number={statementNumber} increaseStatementNumber={increaseStatementNumber} addEntryToStatementSelectionMap={addEntryToStatementSelectionMap}></Statement>
            :
              <>
                <Typography sx={{mb: 2, mt: 2, fontSize: 15}}>
                  Vielen Dank! Alle Fragen für diesen Teil sind beantwortet.
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx = {{paddingTop: 4, paddingBottom: 5}}
                >
                  <Button component={RouterLink} to={linkToContinue} variant="contained" size="large">Weiter</Button>
                </Box>

              </>

            }
          </Container>     
        </>
    )       




}