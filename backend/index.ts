
import "reflect-metadata";
import express from 'express';
import {createConnection} from "typeorm"

import cors from "cors";


const PORT = 3000;


async function startup() {

    await createConnection();

    const app = express();

    app.use(express.json());

    app.use(cors())


    app.listen(PORT, ()=>{
        console.log("listening on port " + PORT);
        
    })

}



startup();