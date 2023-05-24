import * as React from 'react';
import { Create, SimpleForm, TextInput, DateInput, required,BooleanInput,PasswordInput  } from 'react-admin';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { grid } from '@mui/system';
import { borders } from '@mui/system';


export const PersonCreate = () => (
    <Create>
        <SimpleForm >
            <Container>
                <Box sx={{ display: 'inline',color: 'success.main'  }}>
                    First Name: 
                </Box>
                <TextInput source="firstname"  fullWidth label=""  color="sucess" defaultValue=""/>
            </Container>

            <Container>
                <Box sx={{ display: 'inline',color: 'success.main'  }}>
                    Last Name: 
                </Box> 
                <TextInput source="lastname"  fullWidth label=""  color="sucess" defaultValue=""/>
            </Container>

            <Container>
                <Box sx={{ display: 'inline',color: 'success.main'  }}>
                    Last Name: 
                </Box> 
                <TextInput source="email" type="email" fullWidth label=""  color="sucess" defaultValue=""/>
            </Container>

            <Container>
                <Box sx={{ display: 'inline',color: 'success.main'  }}>
                    Badge ID: 
                </Box>
                <TextInput source="badgeID"  fullWidth label=""  color="sucess" defaultValue=""/>
            </Container>

            <Container>
                <Box sx={{ display: 'inline',color: 'success.main'  }}>
                    Username: 
                </Box>
                <TextInput source="username"  fullWidth label=""  color="sucess" defaultValue=""/>
            </Container>

            <Container>
                <Box sx={{ display: 'inline',color: 'success.main'  }}>
                    Password: 
                </Box>
                <PasswordInput source="passwd"  fullWidth label=""    color="sucess" defaultValue=""/>
            </Container>

            <Container>
               <Box sx={{ display: 'inline',color: 'success.main'  }}>
                    Admin : 
               </Box>
                {/* <TextField source='mailboxName' label="Mailbox Name"  sx={{typography: 'body1'}}/> */}
                <BooleanInput label="" source="isAdmin" color="success" fullWidth={true} defaultValue={false}  /> 

            </Container>

            {/* <TextInput source="title" validate={[required()]} fullWidth />
            <TextInput source="teaser" multiline={true} label="Short description" />
            <RichTextInput source="body" />
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} /> */}
        </SimpleForm>
    </Create>
);


export default PersonCreate;