import React,{useEffect,useState} from 'react'
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
const [criptos,setCriptos] = useState([]);

   const [moneda,SelectMonedas] = useSelectMonedas('ELIGE TU MONEDA',monedas);
   const [criptomoneda,SelectCriptomoneda] = useSelectMonedas('ELIGE TU CRIPTOMONEDA',criptos);

  

  useEffect(()=>{
   const consultarAPI = async ()=>{
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

      const respuesta = await fetch(url);
     const resultado = await respuesta.json()


      const arrayCripto = resultado.Data.map(cripto=>{

           const objeto = {
               id :cripto.CoinInfo.Name,
               nombre: cripto.CoinInfo.FullName
           };

          return objeto;
      });
      setCriptos(arrayCripto);
   };
    consultarAPI()
  },[])
   
  
    return (  
     <form>
         < SelectMonedas />
         <SelectCriptomoneda/>
        {moneda}
         <InputSubmit type="submit" value="Cotizar"/>
     </form>

    );
}
 
export default Formluario;