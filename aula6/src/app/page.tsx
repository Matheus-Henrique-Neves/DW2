import MudaCor from "@/components/mudacor";
import Link from "next/link";

export default function Home(){
  return(
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-amber-600">Ola mundo é hora do suco de batata</h1>
      <p className=" text-2xl font-sans text-emerald-500">é hj papai  min de papai</p>
        <>
        <Link href="/todo"><span className="text-blue-500 hover:underline">todo</span></Link>

        <MudaCor color={"white"}></MudaCor>
        </>
    </div>
    
  )
}