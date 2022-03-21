import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from './hooks/useSelectMonedas';
import { monedas } from '../data/monedas';
const InputSubmit = styled.input`
    background-color:#9497ff;
    border:none;
    width:100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform:uppercase ;
    font-size:20px;
    border-radius: 5px;
    margin-top:30px;
    transition: background-color .5s ease;

    & :hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`;
  
const Formluario = () => {


  

   const [moneda,SelectMonedas] = useSelectMonedas('ELIGE tU MONEDA',monedas);
  // const [SelectCriptoMonedas] = useSelectMonedas('elige tu criptomoneda')
   
  
    return (  
     <form>
         < SelectMonedas />
        {moneda}
         <InputSubmit type="submit" value="Cotizar"/>
     </form>

    );
}
 
export default Formluario;