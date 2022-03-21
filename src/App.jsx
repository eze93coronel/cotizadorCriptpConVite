 
import { useState } from 'react'
import styled  from '@emotion/styled'
import Formluario from './components/Formulario'
import ImagenCripto from './img/imagen-criptos.png'
 const Contenedor = styled.div`
      max-width:900px;
      margin: 0 auto;
      width:90% ;
      @media (min-width:992px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
      }
 `

 const Imagen = styled.img`
 max-width:400px;
 width:80%;
 margin: 100px auto 0 auto;
 display: block; 
 
 `

 const Heading = styled.h1`
   font-family: 'Lato',sans-serif;
   color :#fff;
   font-weight: 700;
   text-align: center;
   margin-top:80px;
   margin-bottom:50px;
   font-size: 34px ;
     
   &::after{
     content:'';
     width:100%;
     height: 6px;
     background-color:#66a2ff;
     display: block;
     margin:10px 0 auto 0 auto;
   }
 `;


function App() {

  return (
    <Contenedor>
      <Imagen 
        src={ImagenCripto}
        alt="imgan criptomonedas"
      />
      <div>
         <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Formluario />   
      </div>
    </Contenedor>
    )
}

export default App;
