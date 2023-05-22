import { useEffect,useState } from 'react';
import { defaultTheme } from 'react-admin';
import {Admin,Resource} from 'react-admin'
import jsonServerProvider from "ra-data-json-server";
import restProvider from  'ra-data-simple-rest'
import MailBoxesList from './Components/MailBoxesList'
import { MailBoxDetails } from './Components/MailBoxDetails';
import PersonsList from './Components/PersonsList';
import { MyLayout } from './MyLayout';
import EventsList from './Components/EventsList'
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import EventNoteIcon from '@mui/icons-material/EventNote';

import  MailEdit  from './Components/MailEdit';
import MailBoxCreate from './Components/MailBoxCreate';
import { PersonCreate } from './Components/PersonCreate';
// const theme = {
//     ...defaultTheme,
//     palette: {
//         mode: 'dark', // Switching the dark mode on is a single property value change.
//     },
// };


export const theme = {
  palette: {
    mode: 'dark',
  },
components: {
  RaMenuItemLink: {
      styleOverrides: {
          root: {
              // invisible border when not active, to avoid position flashs
              borderLeft: '2px solid transparent', 
              '&.RaMenuItemLink-active': {
                  borderLeft: '5px solid #66bb6a',
              },
              
          },
      },
  },
}};





const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");


//TODO : ADD Non-Admin user ==> authentification 
const App = () => {
  
  return (
  <Admin theme={theme} dataProvider={restProvider('http://localhost:5000/api')} layout={MyLayout}>


    <Resource  name='mailbox' list={MailBoxesList}  show={MailBoxDetails} edit={MailEdit} create={MailBoxCreate}   icon={EmailIcon}/>
    <Resource name='person' list={PersonsList}  icon={PersonIcon} create={PersonCreate}/>
    <Resource name='event' list={EventsList} icon={EventNoteIcon} />

    {/* <Resource name='mailbox' show={MailBoxDetails}  /> */}

  </Admin>
);

  }

export default App;

