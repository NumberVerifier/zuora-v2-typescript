import * as dotenv from "dotenv";
import { ZuoraClient, getQuickstartAPIReference } from '../src';
import {AxiosError} from "axios";

dotenv.config({ path: "../.env.local" });
dotenv.config({ path: "../.env" });

const a = async () => {
    const clientId = process.env.ZUORA_CLIENT_ID;
    const clientSecret = process.env.ZUORA_CLIENT_SECRET;
    const endpoint = process.env.ZUORA_ENDPOINT;
    const client = new ZuoraClient(clientId, clientSecret, endpoint)
    const api = getQuickstartAPIReference();
    try {
        const contacts = await api.getContacts(undefined, {client})
        console.log(JSON.stringify(contacts?.data, null, 2))
    } catch (e) {
        if (e instanceof AxiosError)  {
            console.error(e.response?.data)
        } else {
            console.error(e)
        }
    }
    console.log("DONE")

}
a();
