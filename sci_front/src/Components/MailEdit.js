import * as React from "react";
import { Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';
// import RichTextInput from 'ra-input-rich-text';
import { Show, SimpleShowLayout,ReferenceInput,  RichTextField,BooleanField,BooleanInput,useGetList, SelectInput } from 'react-admin';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { grid } from '@mui/system';
import { borders } from '@mui/system';
const MailEdit = () =>{ 
    
    // const { persons, isLoading } = useGetList('person');
    return (

    // data is an array of { id: 123, code: 'FR', name: 'France' }

    <Edit>
        <SimpleForm>
            <Container>
               <Box sx={{ display: 'inline',color: 'success.main'  }}>
                    MailBox Name : 
               </Box>
                {/* <TextField source='mailboxName' label="Mailbox Name"  sx={{typography: 'body1'}}/> */}
                <TextInput disabled label="" source="mailboxName" color="success" fullWidth={true}/>

            </Container>
            <Container>
               <Box sx={{ display: 'inline',color: 'success.main'  }}>
                    Free: 
               </Box>
                {/* <TextField source='mailboxName' label="Mailbox Name"  sx={{typography: 'body1'}}/> */}
                <BooleanInput label="" source="isFree" color="success" fullWidth={true}/> 

            </Container>

            <Container>
               <Box sx={{ display: 'inline',color: 'success.main',mr:'10px'  }}>
                    New owner : 
               </Box>                
                <ReferenceInput reference="person" source="ownerID">
                    <SelectInput defaultValue={-1}

                        source="id"
                        // choices={p   ersons}
                        optionText="firstname"
                        // optionValue="id"
                        color="success" fullWidth={true}
                    /> 
                </ReferenceInput>

{/* 

                <SelectInput 
                    source="ownerID"
                    choices={persons}
                    optionText="firstname"
                    optionValue="id"
                    isLoading={isLoading}
                /> */}


            </Container>


            {/* <TextInput disabled label="Id" source="id" />
            <TextInput source="title" validate={required()} />
            <TextInput multiline source="teaser" validate={required()} />
            <RichTextInput source="body" validate={required()} />
            <DateInput label="Publication date" source="published_at" />
            <ReferenceManyField label="Comments" reference="comments" target="post_id">
                <Datagrid>
                    <TextField source="body" />
                    <DateField source="created_at" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField> */}
        </SimpleForm>
    </Edit>
)};
export default MailEdit