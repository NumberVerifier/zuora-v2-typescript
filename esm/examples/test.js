import * as dotenv from "dotenv";
import { ZuoraClient, getQuickstartAPIReference } from '../index';
import { AxiosError } from "axios";
dotenv.config({ path: "../.env.local" });
dotenv.config({ path: "../.env" });
const a = async () => {
    var _a;
    const clientId = process.env.ZUORA_CLIENT_ID;
    const clientSecret = process.env.ZUORA_CLIENT_SECRET;
    const endpoint = process.env.ZUORA_ENDPOINT;
    const client = new ZuoraClient(clientId, clientSecret, endpoint);
    const api = getQuickstartAPIReference();
    try {
        const contacts = await api.getContacts(undefined, { client });
        console.log(JSON.stringify(contacts === null || contacts === void 0 ? void 0 : contacts.data, null, 2));
    }
    catch (e) {
        if (e instanceof AxiosError) {
            console.error((_a = e.response) === null || _a === void 0 ? void 0 : _a.data);
        }
        else {
            console.error(e);
        }
    }
    console.log("DONE");
};
a();
