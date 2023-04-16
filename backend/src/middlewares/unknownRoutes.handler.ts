 import { NotFoundException } from "~/utils/exceptions";

 export const UnknownRoutesHandler = () => {
    throw new NotFoundException('La ressource demandée n\'existe pas')
 }