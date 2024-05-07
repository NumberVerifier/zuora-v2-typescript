import React, { FormEvent, useEffect } from 'react';
import * as process from 'process';
import { ZuoraClient } from 'zuora-v2-typescript';
import { ZoraTestContext } from '../pages/api/ctx';
import { ZuoraPages2SignatureRequest } from 'zuora-v2-typescript/pages2';

// https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Page_and_Payment_Link/Payment_Pages_2.0/F_Client_Parameters_for_Payment_Pages_2.0
interface renderParams {
  authorizationAmount?: number;
  checkDuplicated?: boolean;
  countryBlackList?: string;
  countryWhiteList?: string;
  documents?: { type: 'invoice'; ref: string }[];
  // 3 letter ISO code
  field_currency?: string;
  field_accountId?: string;
  field_deviceSessionId?: string;
  field_gatewayName?: string;
  field_maxConsecutivePaymentFailures?: number;
  field_passthrough1?: string;
  field_passthrough2?: string;
  field_passthrough3?: string;
  field_passthrough4?: string;
  field_passthrough5?: string;
  field_passthrough6?: string;
  field_passthrough7?: string;
  field_passthrough8?: string;
  field_passthrough9?: string;
  field_passthrough10?: string;
  field_passthrough11?: string;
  field_passthrough12?: string;
  field_passthrough13?: string;
  field_passthrough14?: string;
  // In hours
  field_paymentRetryWindow?: number;
  field_useDefaultRetryRule?: boolean;
  // Pages 2.0 form ID
  id: string;
  // Public key for encryption
  key: string;
  signature: string;
  signatureType?: string;
  locale?: string;
  // param_gwOptions_[option]
  paymentGateway?: string;
  // Default false
  retainValues?: boolean;
  style: 'inline' | 'overlay';
  submitEnabled: boolean;
  // Zuora tenant ID
  tenantId: string;
  // Token generated
  token: string;
  // hosted page url
  url: string;
  /* CSV of supported payment types
  Visa*
  MasterCard*
  AmericanExpress
  Discover*
  Dankort
  JCB
  */
  param_supportedTypes?: string;
  cityBlackList?: string;
  cityWhiteList?: string;
  // Used to reauthorize a card
  pmId?: string;
  screeningAmount?: number;
}
interface prePopulateFields {
  creditCardAddress1?: string;
  creditCardAddress2?: string;
  creditCardCountry?: string;
  creditCardHolderName?: string;
}
interface zCallbackResp {
  success: boolean;
  refId: string;
  errorCode?: string;
  errorMessage?: string;
}
type zCallback = (response: zCallbackResp) => void;
interface zClient {
  //    render: function (params, initFields, callback, width, height) {
  render: (
    params: renderParams,
    prepop: prePopulateFields,
    callback: zCallback
  ) => void;
}
declare global {
  interface Window {
    Z: zClient;
  }
}

export const PaymentPage = () => {
  const ctx = React.useContext(ZoraTestContext);
  const [formInfo, setFormInfo] = React.useState<Partial<renderParams>>({
    param_supportedTypes: process.env.NEXT_PUBLIC_ZUORA_PAGES_SUPPORTED
  });

  useEffect(() => {
    if (!formInfo?.field_accountId) return;
    const a = async () => {
      const sigReq: Partial<ZuoraPages2SignatureRequest> = {
        pageId: process.env.NEXT_PUBLIC_ZUORA_PAGES_PAGEID,
        uri: process.env.NEXT_PUBLIC_ZUORA_SIG_URI
      };
      const zPageTokens = await ctx.zora.GetPages2Signature(sigReq);
      const zparam: renderParams = {
        tenantId: process.env.NEXT_PUBLIC_ZUORA_PAGES_TENANTID,
        id: process.env.NEXT_PUBLIC_ZUORA_PAGES_PAGEID,
        key: zPageTokens.key,
        token: zPageTokens.token,
        signature: zPageTokens.signature,
        url: process.env.NEXT_PUBLIC_ZUORA_SIG_URI,
        param_supportedTypes: process.env.NEXT_PUBLIC_ZUORA_PAGES_SUPPORTED,
        style: 'inline',
        submitEnabled: true,
        ...formInfo
      };
      console.log('zparam', zparam);
      window.Z.render(zparam, {}, (resp: zCallbackResp) => {
        console.log('render resp', resp);
      });
    };
    a();
  }, [formInfo]);

  const handleSubmit = async (event: FormEvent<CustomFormElement>) => {
    try {
      event.preventDefault();
      const fi = {
        ...formInfo
      };
      for (const element of event.currentTarget.elements) {
        if (element instanceof HTMLInputElement) {
          fi[element.id] = element.value;
        }
      }
      setFormInfo(fi);
    } catch (e) {
      console.error('handleSubmit', e);
    }
  };

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
      <div id="zuora_payment"></div>
    </div>
  );
};

interface FormElements extends HTMLFormControlsCollection {
  field_accountId: HTMLInputElement;
}
interface CustomFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
