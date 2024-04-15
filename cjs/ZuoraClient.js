"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZuoraClient = void 0;
const axios_1 = require("axios");
const async_mutex_1 = require("async-mutex");
const endpoints_1 = require("./endpoints");
const VER = "/v2";
class ZuoraClient {
    constructor(clientId, clientSecret, endpoint) {
        this.auth = null;
        this.authExpires = null;
        this.mutex = new async_mutex_1.Mutex();
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
        cfg.headers = Object.assign(Object.assign({}, cfg.headers), { Authorization: `Bearer ${key.access_token}` });
        cfg.baseURL = `${this.endpoint}${VER}`;
    }
    getZuoraEndpointByKey(key) {
        if (key in endpoints_1.ZUORA_ENDPOINTS)
            return endpoints_1.ZUORA_ENDPOINTS[key];
        return undefined;
    }
    async getAuthToken() {
        var _a, _b;
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
            const response = await axios_1.default.post(`${this.endpoint}/oauth/token`, qs.toString(), {
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
            console.error("getToken", (_a = axiosError.response) === null || _a === void 0 ? void 0 : _a.status, (_b = axiosError.response) === null || _b === void 0 ? void 0 : _b.statusText);
            throw new Error(`Error getting auth token: ${axiosError.message}`);
        }
        finally {
            this.mutex.release();
        }
    }
}
exports.ZuoraClient = ZuoraClient;
