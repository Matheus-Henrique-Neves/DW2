"use client"
import{useState} from "react";
interface ButtonFatecProps {
    text: string;

}
function ButtonFatec({text}: ButtonFatecProps) {
    if (text ==="") {
        return <p>"botão desativado"</p>;
    }
    const [contador, setContador] = useState(0);
  return (
    <button className="border-2 border-solid m-3" 
    onClick={()=>setContador(contador+1)}>
        {text} - cliques {contador}</button>
    );
}
export default ButtonFatec;


