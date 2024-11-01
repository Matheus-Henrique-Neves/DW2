"use client"
import{useState} from "react";
interface mudacorProps {
    color: string;

}
function MudaCor({color}: mudacorProps) {
const [cor, coratual] = useState("white");
  return (
    <> 
    <div style={{backgroundColor:cor}}>

    <button className="bg-blue-500 border-2 border-solid m-3" 
    onClick={()=>coratual("blue")}>Azul</button>

    <button className="bg-red-500 border-2 border-solid m-3"
    onClick={()=>coratual("red")}>Red</button>

    <button className="bg-yellow-500 border-2 border-solid m-3"
    onClick={()=>coratual("yellow")}>Amarelo</button>
    </div>
        
    </>
    );
}
export default MudaCor;