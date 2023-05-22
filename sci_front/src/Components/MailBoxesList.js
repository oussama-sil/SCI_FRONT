import React from 'react'

import  {List,Datagrid,TextField, DateField,EditButton,DeleteButton,BooleanField,ShowButton, NumberField
} from 'react-admin'



const MailBoxesList = (props) => {
  return (
    <List {...props} sx={{ mx: '5%',p:'1%' }}>
        <Datagrid padding='normal' >
            <TextField source='id' label="Mailbox ID"/>
            <TextField source='mailboxName' label="Mailbox Name"/>
            <TextField source='nbMails'  label="Number of Mails"/>
            <BooleanField  source='isFree'  label="Is Free ?" />
            <NumberField source='lastUpdate' label="Last Update"/>
            <ShowButton label='Details' color='success' />
            <EditButton label='Edit' color='success' />

        </Datagrid>

    </List>
  )
}

export default MailBoxesList