import { plainToInstance } from "class-transformer"
import { NextFunction,Request,Response } from "express"
import {validate as classValidatorValidade}from "class-validator"


export const validade =(dto:any)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
const data = plainToInstance(dto,req.body)
const erros = await classValidatorValidade(data)
if(erros.length>0){
    return res.status(400).json({erros})
}
req.body=data
next()
    }
}
