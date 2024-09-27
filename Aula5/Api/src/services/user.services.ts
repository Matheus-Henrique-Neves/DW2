import { error } from "console";
import { createUser, findUserbyemail } from "../repositories/user.repositories"
interface createUserDTO {
    name: string;
    email: string;
    password: string;
}
export const createUserServices = async (data: createUserDTO) => {
    const user = await findUserbyemail(data.email)
    if (user) throw new Error("Email ja casdastrado caraio")
    return await createUser(data)

}