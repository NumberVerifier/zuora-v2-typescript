import { AxiosRequestConfig } from "axios";
import { ZUORA_ENDPOINTS } from "./endpoints";
export declare class ZuoraClient {
    clientId: string;
    clientSecret: string;
    endpoint: ZUORA_ENDPOINTS;
    auth: AuthResponse | null;
    authExpires: Date | null;
    private mutex;
    constructor(clientId?: string, clientSecret?: string, endpoint?: string);
    addAuth(cfg: AxiosRequestConfig): Promise<void>;
    private getZuoraEndpointByKey;
    private getAuthToken;
}
interface AuthResponse {
    access_token: string;
    expires_in: number;
    jti: string;
    scope: string;
    token_type: string;
}
export {};
//# sourceMappingURL=ZuoraClient.d.ts.map