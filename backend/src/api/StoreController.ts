

import {Request, Response} from "express"
import { getRepository } from "typeorm"

import { Store } from "../entity/Store"

export async function save(req:Request, res:Response){

    const storeRepository = getRepository(Store); 

    const savedStore = await storeRepository.save(req.body);


    return res.status(200).json(savedStore);
}

export async function getAll(req: Request, res:Response){

    const storeRepository = getRepository(Store);

    const allStores = await storeRepository.find();

 

    return res.status(200).json(allStores);

}