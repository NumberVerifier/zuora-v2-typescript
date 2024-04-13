import axios from "axios";
import { Mutex } from "async-mutex";
import { ZUORA_ENDPOINTS } from "./endpoints";
const VER = "/v2";
export class ZuoraClient {
    clientId;
    clientSecret;
    endpoint;
    auth = null;
    authExpires = null;
    mutex = new Mutex();
    constructor(clientId, clientSecret, endpoint) {
        if (!clientId || !clientSecret || !endpoint)
            throw new Error("Missing required parameters");
        const mappedEndpoint = this.getZuoraEndpointByKey(endpoint);
        if (!mappedEndpoint)
            throw new Error("Invalid endpoint");
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.endpoint = mappedEndpoint;
    }
    async addAuth(cfg) {
        const key = await this.getAuthToken();
        cfg.headers = {
            ...cfg.headers,
            Authorization: `Bearer ${key.access_token}`
        };
        cfg.baseURL = `${this.endpoint}${VER}`;
    }
    getZuoraEndpointByKey(key) {
        if (key in ZUORA_ENDPOINTS)
            return ZUORA_ENDPOINTS[key];
        return undefined;
    }
    async getAuthToken() {
        if (this.auth && this.authExpires && this.authExpires > new Date()) {
            return this.auth;
        }
        await this.mutex.acquire();
        if (this.auth && this.authExpires && this.authExpires > new Date()) {
            return this.auth;
        }
        try {
            const qs = new URLSearchParams({
                client_id: this.clientId,
                client_secret: this.clientSecret,
                grant_type: "client_credentials",
            });
            console.log("getToken", this.endpoint, qs.toString());
            const response = await axios.post(`${this.endpoint}/oauth/token`, qs.toString(), {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'accept-encoding': 'gzip',
                    'accept': 'application/json',
                }
            });
            const body = response.data;
            if (!body.access_token) {
                console.error("getToken failed to get access_token", body);
                throw new Error("Error getting auth token");
            }
            // Update auth and expiration based on response
            this.auth = body;
            this.authExpires = new Date(Date.now() + (body.expires_in * 1000)); // Assuming expires_in exists and is valid
            return body;
        }
        catch (error) {
            const axiosError = error;
            console.error("getToken", axiosError.response?.status, axiosError.response?.statusText);
            throw new Error(`Error getting auth token: ${axiosError.message}`);
        }
        finally {
            this.mutex.release();
        }
    }
}
//# sourceMappingURL=ZuoraClient.js.map