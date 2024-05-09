import React, { FormEvent, useEffect } from 'react';
import * as process from 'process';
import { ZuoraClient } from 'zuora-v2-typescript';
import { ZoraTestContext } from '../pages/api/ctx';
import {
  ZuoraPagesClient,
  zuoraPagesCallback,
  zuoraPagesSignature,
  zuoraPagesRenderParams,
  zuoraPagesPrePopulateFields,
  zuoraPagesRenderCallbackResp,
  ZuoraPages2SignatureRequest
} from 'zuora-pages2-client';

export const PaymentPage = () => {
  const ctx = React.useContext(ZoraTestContext);
  const [sig, setSig] = React.useState<zuoraPagesSignature | undefined>(
    undefined
  );
  const [renderParms, setRenderParms] = React.useState<
    Partial<zuoraPagesRenderParams> | undefined
  >(undefined);
  const [acctId, setAcctId] = React.useState<string | undefined>(undefined);

  const handleSubmit = async (e: FormEvent<CustomFormElement>) => {
    e.preventDefault();
    setAcctId(e.currentTarget.elements.field_accountId.value);
  };

  useEffect(() => {
    if (!acctId) return;
    setRenderParms(undefined);
    const a = async () => {
      try {
        const sig = await ctx.zora.GetPages2Signature({
          pageId: process.env.NEXT_PUBLIC_ZUORA_PAGES_PAGEID,
          uri: process.env.NEXT_PUBLIC_ZUORA_SIG_URI
        });
        const zparam: Partial<zuoraPagesRenderParams> = {
          tenantId: sig.tenantId,
          id: process.env.NEXT_PUBLIC_ZUORA_PAGES_PAGEID,
          url: process.env.NEXT_PUBLIC_ZUORA_SIG_URI,
          param_supportedTypes: process.env.NEXT_PUBLIC_ZUORA_PAGES_SUPPORTED,
          key: sig.key,
          token: sig.token,
          signature: sig.signature,
          style: 'inline',
          submitEnabled: true
        };
        console.log('zparam', zparam);
        setRenderParms(zparam);
      } catch (e) {
        console.error('Failed to get signature', e);
        alert('Failed to get signature');
      }
    };
    a();
  }, [acctId]);
  const callback: zuoraPagesCallback = (msg: zuoraPagesRenderCallbackResp) => {
    console.log('callback', msg);
  };
  const prepop: zuoraPagesPrePopulateFields = {};

  return (
    <div style={{ border: '1px solid black' }}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ width: 400 }}>
          <legend>Pages 2.0</legend>
          <div>
            <label>Account Id</label>
            <input id="field_accountId" />
          </div>
          <div>
            <button type="submit">Update</button>
          </div>
        </fieldset>
      </form>
      {Boolean(renderParms) ? (
        <ZuoraPagesClient
          callback={callback}
          prePopulateFields={prepop}
          signature={sig}
          renderParams={renderParms}
        />
      ) : (
        <>Enter Account Id...</>
      )}
    </div>
  );
};

interface FormElements extends HTMLFormControlsCollection {
  field_accountId: HTMLInputElement;
}
interface CustomFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
