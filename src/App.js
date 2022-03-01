import React, {useState} from 'react';
import './App.css';
import {IntlProvider, FormattedMessage, FormattedNumber, FormatMessage, FormatMessageuseIntl, injectIntl} from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import fm2 from './fm2.png'
import Signup from './Components/Signup';
import { Button } from '@mui/material';

//Reminder :
//1) Use Yup works to finish the app

const messagesInFrench = {
  welcomeSentence: "Bienvenue sur Messenger. Heureux de vous avoir parmis nous :)",
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
  nbPart: "Rassurez vous que les informations entrées sont correctes !",
}
const messagesInEnglish = {
  welcomeSentence: "Welcome on Messenger. Nice to have you here :)",
  myMessage: "Today is, {ts, date, ::yyyyMMdd}",
  nbPart: "Make sure the informations entered are correct !",
}

function App() {
const [activeLanguage, setActiveLanguage] = useState("en")

  return (
    <div className='container'>
      <div className="info">
        <h2 className="title" >Messenger</h2>
        <Button variant="outlined" color="secondary" onClick={()=>setActiveLanguage("fr")}>fr</Button>
        <Button variant="outlined" color="success" onClick={()=>setActiveLanguage("en")}>en</Button>

        <IntlProvider messages={activeLanguage === "en" ? messagesInEnglish : messagesInFrench} locale={activeLanguage} defaultLocale="en">
          <p>
            <br/>
            <h5>
              <FormattedMessage
                id="welcomeSentence"
                defaultMessage="Welcome on Messenger. Nice to have you here :)"
              />
              <br/>
            </h5>
            <FormattedMessage
              id="myMessage"
              defaultMessage="Today is {ts, date, ::yyyyMMdd}"
              values={
                {ts: Date.now()}
              }
            />
            <br />
            <FormattedNumber value={19} style="currency" currency="EUR" />
          </p> 
        </IntlProvider>
          <div  className='row'>
            <div className='txt'>
              <Signup />
              <IntlProvider>
                <p>
                  <h3><i>NB:</i></h3>
                  <h5>
                    <FormattedMessage
                      id="nbPart"
                      defaultMessage="Make sure the informations entered are correct !"
                    />
                  </h5> 
                </p>
              </IntlProvider>
            </div>
          </div>
      </div>
      <img className="img" src={fm2} alt="image" width="30%" height="30%"/>
    </div>
  );
}

export default App;
