import axios, {AxiosError, AxiosRequestConfig} from "axios";
import {Mutex} from "async-mutex"
import {ZUORA_ENDPOINTS} from "./endpoints";

const VER = "/v2";

export class ZuoraClient {
    clientId: string;
    clientSecret: string;
    endpoint: ZUORA_ENDPOINTS;
    auth: AuthResponse | null = null;
    authExpires: Date | null = null;
    private mutex = new Mutex();

    constructor(clientId?: string, clientSecret?: string, endpoint?: string) {
        if (!clientId || !clientSecret || !endpoint) throw new Error("Missing required parameters")
        const mappedEndpoint = this.getZuoraEndpointByKey(endpoint);
        if (!mappedEndpoint) throw new Error("Invalid endpoint")
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.endpoint = mappedEndpoint
    }

    public async addAuth(cfg:AxiosRequestConfig) {
        const key = await this.getAuthToken()
        cfg.headers = {
            ...cfg.headers,
            Authorization: `Bearer ${key.access_token}`
        }
        cfg.baseURL = `${this.endpoint}${VER}`
    }

    private getZuoraEndpointByKey(key: string): ZUORA_ENDPOINTS | undefined {
        if (key in ZUORA_ENDPOINTS)
            return ZUORA_ENDPOINTS[key as keyof typeof ZUORA_ENDPOINTS];
        return undefined;
    }

    private async getAuthToken(): Promise<AuthResponse> {
        if (this.auth && this.authExpires && this.authExpires > new Date()) {
            return this.auth;
        }
        await this.mutex.acquire()
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

            const body: AuthResponse = response.data;
            if (!body.access_token) {
                console.error("getToken failed to get access_token", body);
                throw new Error("Error getting auth token");
            }

            // Update auth and expiration based on response
            this.auth = body;
            this.authExpires = new Date(Date.now() + (body.expires_in! * 1000)); // Assuming expires_in exists and is valid

            return body;
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error("getToken", axiosError.response?.status, axiosError.response?.statusText);
            throw new Error(`Error getting auth token: ${axiosError.message}`);
        } finally {
            this.mutex.release()
        }
    }

}

interface AuthResponse {
    // The generated token.
    access_token: string;
    // The number of seconds until the token expires.
    expires_in: number;
    // A globally unique identifier for the token.
    jti: string;
    // A space-delimited list of scopes that the token can be used to access.
    scope: string;
    // The type of token that was generated, i.e., bearer.
    token_type: string;
}
