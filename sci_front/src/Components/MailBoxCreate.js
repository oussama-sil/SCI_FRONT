import * as React from 'react';
import { Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { grid } from '@mui/system';
import { borders } from '@mui/system';


export const MailBoxCreate = () => (
    <Create>
        <SimpleForm >
            <Container>
                <Box sx={{ display: 'inline',color: 'success.main'  }}>
                    MailBox Name: 
                </Box>
                <TextInput source="mailboxName"  fullWidth label=""  color="sucess"/>
            </Container>

            {/* <TextInput source="title" validate={[required()]} fullWidth />
            <TextInput source="teaser" multiline={true} label="Short description" />
            <RichTextInput source="body" />
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} /> */}
        </SimpleForm>
    </Create>
);


export default MailBoxCreate