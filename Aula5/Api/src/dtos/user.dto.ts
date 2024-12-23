import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional } from "class-validator";

export class CreateUserDTO{
@IsString()
@IsNotEmpty()
name!:string

@IsEmail()
@IsNotEmpty()
email!:string

@IsString()
@IsNotEmpty()
@MinLength(8)
password!:string


}

export class UpdateUserDTO{
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string

    @IsOptional()
    @IsEmail()
    email?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password?: string
}