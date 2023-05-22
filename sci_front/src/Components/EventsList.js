import * as React from "react";
import {List,Datagrid, ShowButton,Show, SimpleShowLayout, TextField, DateField, RichTextField } from 'react-admin';


function EventsList(props) {
  return (
    <List {...props} sx={{ mx: '5%',p:'1%' }}>
        <Datagrid padding='normal' >
            <TextField source='eventID' label="Event ID"/>
            <TextField source='mailboxID' label="MailBox ID"/>
            <TextField label='Event' source="eventType"/>
            <TextField label='Nb mails' source="nbMails"/>
            <TextField source="date" label="Date"/>
            <TextField source='time' label="Time"/>
            {/* <ShowButton/> */}
        </Datagrid>

    </List>
  )
}

export default EventsList