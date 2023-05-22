import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, RichTextField,BooleanField } from 'react-admin';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { grid } from '@mui/system';
import { borders } from '@mui/system';







export const MailBoxDetails = () => (
    
    <Show title="MailBox Details" sx={{ m:"5%" }} >
        <Box sx={{ p:"5%" }}>
        {/* 101010 */}
        <SimpleShowLayout  >
            <Container>
               <Box sx={{ mx: 2,display: 'inline',color: 'success.main'  }}>
                    MailBox Name : 
               </Box>
                <TextField source='mailboxName' label="Mailbox Name"  sx={{typography: 'body1'}}/>
            </Container>

            <Container>
               <Box sx={{ mx: 2,display: 'inline' ,color: 'success.main' }}>
               Mailbox ID : 
               </Box>
                <TextField source='id' label="Mailbox ID"  sx={{typography: 'body1'}}/>
            </Container>

    
            <Container>
                <Box sx={{ mx: 2,display: 'inline',color: 'success.main'  }}>
                Last Update (s) : 
                 </Box>
                <TextField source='lastUpdate' label="Last Update (s)"  sx={{typography: 'body1'}}/>
            </Container>
            
            <Container>
                <Box sx={{ mx: 2,display: 'inline' ,color: 'success.main' }}>
                Is free  : 
                 </Box>
                <BooleanField source='isFree'  sx={{typography: 'body1'}}/>
            </Container>

        </SimpleShowLayout>
         
        <SimpleShowLayout >
        
            <Container>
                <Box sx={{ mx: 2,display: 'inline',color: 'success.main'  }}>
                Number of Mails in the mailbox : 
                 </Box>
                <TextField source='nbMails' label="Last Update (s)"  sx={{typography: 'body1'}}/>
            </Container>

            <Container>
                <Box sx={{ mx: 2,display: 'inline',color: 'success.main'  }}>
                Is affected to a user : 
                 </Box>
                <TextField source='Affected' label="Is affected to a user"  sx={{typography: 'body1'}}/>
            </Container>

            <Container>
                <Box sx={{ mx: 2,display: 'inline',color: 'success.main'  }}>
                Owner : 
                 </Box>
                <TextField source='Owner' label="Owner"  sx={{typography: 'body1'}}/>
            </Container>

            <Container>
                <Box sx={{ mx: 2,display: 'inline',color: 'success.main' }}>
                OwnerID : 
                 </Box>
                <TextField source='personID' label="OwnerID"  sx={{typography: 'body1'}}/>
            </Container>

        </SimpleShowLayout>
        </Box>
        
    </Show>


);
