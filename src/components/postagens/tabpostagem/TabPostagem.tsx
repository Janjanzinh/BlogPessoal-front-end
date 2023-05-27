import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Estou em transição da área administrativa para me tornar um desenvolvedor Java Fullstack. Atualmente, estou cursando graduação em Análise e Desenvolvimento de Sistemas. Tenho habilidades em back-end e estou focado em aprimorar minhas habilidades em front-end, incluindo HTML, CSS, JavaScript e o framework React. Também possuo conhecimento em MySQL para trabalhar com bancos de dados. Estou comprometido em aprender constantemente e acompanhar as tendências do mercado para criar soluções completas e de alta qualidade.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;