import { AxiosRequestConfig } from 'axios';
import { ZUORA_ENDPOINTS } from './endpoints';
import { ZuoraPages2SignatureRequest, ZuoraPages2SignatureResponse } from './pages2';
export declare class ZuoraClient {
    clientId: string;
    clientSecret: string;
    endpoint: string;
    auth: AuthResponse | null;
    authExpires: Date | null;
    private mutex;
    debug: boolean;
    pages2Config?: Partial<ZuoraPages2SignatureRequest>;
    constructor(clientId?: string, clientSecret?: string, endpoint?: string, pages2Config?: Partial<ZuoraPages2SignatureRequest>, debug?: boolean);
    addAuth(cfg: AxiosRequestConfig): Promise<void>;
    getZuoraEndpointByKey(key: string): ZUORA_ENDPOINTS | undefined;
    getAuthToken(): Promise<AuthResponse>;
    GetPages2Signature(req: Partial<ZuoraPages2SignatureRequest>): Promise<ZuoraPages2SignatureResponse>;
}
interface AuthResponse {
    access_token: string;
    expires_in: number;
    jti: string;
    scope: string;
    token_type: string;
}
export {};
