import React, { FormEvent, FormEventHandler } from 'react';
import { ZoraTestContext } from '../pages/api/ctx';
import {
  type AccountCreateRequest,
  getQuickstartAPIReference,
  NonReadonly
} from 'zuora-v2-typescript';
import { AxiosError, isAxiosError } from 'axios';

interface formCreate {
  // Required
  name?: string;
  first_name?: string;
  last_name?: string;
  // Optional
}

interface FormElements extends HTMLFormControlsCollection {
  accountName: HTMLInputElement;
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const CreateAccount = () => {
  const ctx = React.useContext(ZoraTestContext);

  const [cr, setCr] = React.useState<formCreate>({});
  const handleSubmit = async (event: FormEvent<UsernameFormElement>) => {
    try {
      event.preventDefault();
      const form = event.currentTarget;
      const acctName = form.elements.accountName.value;
      const firstName = form.elements.firstName.value;
      const lastName = form.elements.lastName.value;
      if (!acctName || !firstName || !lastName) {
        alert('Please enter all fields');
        return;
      }
      const cr: NonReadonly<AccountCreateRequest> = {
        name: acctName,
        currency: 'USD',
        bill_to: {
          first_name: firstName,
          last_name: lastName,
          address: {
            country: 'USA',
            state: 'CA',
            city: 'San Francisco',
            postal_code: '94105',
            line1: '123 Main St'
          }
        }
      };

      const quick = getQuickstartAPIReference();
      const acct = await quick.createAccount(cr, {}, { client: ctx.zora });
      ctx.setMsgs(JSON.stringify(acct, null, 2));
    } catch (err) {
      if (isAxiosError(err)) {
        const aerr = err as AxiosError;
        console.log('axios error', aerr.response.data);
        console.log(
          `status: ${aerr.response.status} statusText: ${aerr.response.statusText}`
        );
      } else {
        console.log('not axios error', err);
      }

      ctx.setMsgs('ERROR:\n' + JSON.stringify(err, null, 2));
    }
  };

  return (
    <div style={{ marginBottom: 25 }}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ width: 400 }}>
          <legend>Create Account</legend>
          <div>
            <label>Account Name*</label>
            <input id="accountName" />
          </div>
          <div>
            <label>First Name*</label>
            <input id="firstName" />
          </div>
          <div>
            <label> Last Name*</label>
            <input id="lastName" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
