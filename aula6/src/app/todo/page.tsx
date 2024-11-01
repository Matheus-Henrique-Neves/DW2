import ButtonFatec from "@/components/button-fatec";
import Link from "next/link";

export default function todolist(){
    return(
        <>
        <h1>Todo list</h1>
        <Link href="/"><span className="text-blue-500 hover:underline">Home</span></Link>
        <ButtonFatec text="clique aqui 1"/>
        </>
    )
}