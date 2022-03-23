import React from 'react'
 import styled from '@emotion/styled'

 const Contenedor= styled.div`
   color: #fff;
   font-family: 'Lato', sans-serif;
   display: flex;
   align-items: center; 
    gap: 1rem;
    margin-top: 30px;
 `
const Imagen = styled.img`
    display:block;
    width: 120px;
  
`
  

 const Precio = styled.p`
   font-size: 24px;
   span {
     font-weight: 700;
   }
 
 `
 const Texto = styled.p`
   font-size: 18px;
   span {
     font-weight: 700;
   }
 
 `

const Resultado = ({resultado}) => {
const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = resultado;

  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}` }/>
     <div>
      <Precio>el precio es de:<span>{PRICE}</span> </Precio>
      <Texto>el precio mas alto del dia:<span>{HIGHDAY}</span> </Texto>
      <Texto>el precio mas bajo del dia:<span>{LOWDAY}</span> </Texto>
      <Texto>variacion del las ultimas 24 horas:<span>{CHANGEPCT24HOUR}</span> </Texto>
      <Texto>ultima actualiz:acion<span>{LASTUPDATE}</span> </Texto>
    </div>

    </Contenedor>
  )
}

export default Resultado
