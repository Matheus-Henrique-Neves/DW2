import User from "../entities/user.entity"


interface createUserDTO  {
name:string;
email:string;
password:string;
}


export const createUser =async (data:createUserDTO) => {
    return User.create({data})
    
}

export const findUserbyemail = async (email:string)=>{
    return User.findFirst({where:{email}})
}

