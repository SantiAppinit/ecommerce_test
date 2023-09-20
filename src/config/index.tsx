import { Envs } from "../utils/constants/envs";
import shared from "./default.json";
import dev from "./dev.json";
import prod from "./prd.json";

/* 
    -----------------------WARNING------------------------------
    This information might be showing on browsers source code 
    section, please DO NOT PUT ANY SENSITIVE INFORMATION 
    on config files (dev.json, prd.json, default.json, etc...).
    If you need it, please check .env file
    ------------------------------------------------------------
*/

const getEnvironment = (env: string | undefined) : any => {
    switch(env) {
        case Envs.DEV:
            return {
                ...shared,
                ...dev
            };
        case Envs.PROD:
            return {
                ...shared,
                ...prod
            };
        default:
            return {
                ...shared
            };
    }
}

const env = process.env.REACT_APP_NODE_ENV;
const config = getEnvironment(env);

export default config;