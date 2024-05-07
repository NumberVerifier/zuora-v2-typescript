import { createContext } from 'react';
import { ZuoraClient } from 'zuora-v2-typescript';

export const ZoraTestContext = createContext<{
  zora: ZuoraClient;
  setMsgs: (msg: string) => void;
}>(null);
