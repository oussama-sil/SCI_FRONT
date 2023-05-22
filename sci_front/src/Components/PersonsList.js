import React from 'react'

import  {List,Datagrid,TextField, DateField,EditButton,DeleteButton,BooleanField,ShowButton, NumberField
} from 'react-admin'


import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { grid } from '@mui/system';
import { borders } from '@mui/system';

function PersonsList(props) {
  return (
    <List {...props} sx={{ mx: '5%',p:'1%' }}>
        <Datagrid padding='normal' >
            <TextField source='id'label="ID" />
            <TextField source='firstname' label="First Name"/>
            <TextField source='lastname' label="Last Name" color='success'/>
            <TextField source="badgeID" label="Badge ID" color='success'/>
            {/* <EditButton label='Edit' color='success' /> */}
        </Datagrid>
    </List>

)
}

export default PersonsList