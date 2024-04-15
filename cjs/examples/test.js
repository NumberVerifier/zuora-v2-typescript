"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const index_1 = require("../index");
const axios_1 = require("axios");
dotenv.config({ path: "../.env.local" });
dotenv.config({ path: "../.env" });
const a = async () => {
    var _a;
    const clientId = process.env.ZUORA_CLIENT_ID;
    const clientSecret = process.env.ZUORA_CLIENT_SECRET;
    const endpoint = process.env.ZUORA_ENDPOINT;
    const client = new index_1.ZuoraClient(clientId, clientSecret, endpoint);
    const api = (0, index_1.getQuickstartAPIReference)();
    try {
        const contacts = await api.getContacts(undefined, { client });
        console.log(JSON.stringify(contacts === null || contacts === void 0 ? void 0 : contacts.data, null, 2));
    }
    catch (e) {
        if (e instanceof axios_1.AxiosError) {
            console.error((_a = e.response) === null || _a === void 0 ? void 0 : _a.data);
        }
        else {
            console.error(e);
        }
    }
    console.log("DONE");
};
a();
