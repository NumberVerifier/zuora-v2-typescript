import { getQuickstartAPIReference, ZuoraClient } from 'zuora-v2-typescript';
import React from 'react';
import { ZoraTestContext } from '../pages/api/ctx';

export const ListAccounts = () => {
  const ctx = React.useContext(ZoraTestContext);
  const la = async () => {
    try {
      const quick = getQuickstartAPIReference();

      const customers = await quick.getAccounts({}, { client: ctx.zora });
      console.log('customers', customers);
      ctx.setMsgs(JSON.stringify(customers, null, 2));
    } catch (e) {
      ctx.setMsgs('ERROR:\n' + JSON.stringify(e, null, 2));
    }
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <button onClick={e => la()}>Get Accounts</button>
    </div>
  );
};

export const GetAccount = () => {
  const ctx = React.useContext(ZoraTestContext);

  const [acctId, setAcctId] = React.useState<string>('');
  const la = async () => {
    try {
      if (!acctId) {
        ctx.setMsgs('Please enter an account ID');
        return;
      }
      const quick = getQuickstartAPIReference();
      const acct = await quick.getAccount(acctId, {}, { client: ctx.zora });
      ctx.setMsgs(JSON.stringify(acct, null, 2));
    } catch (e) {
      ctx.setMsgs('ERROR:\n' + JSON.stringify(e, null, 2));
    }
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <input
        type="text"
        value={acctId}
        onChange={e => setAcctId(e.target.value)}
      />
      &nbsp;
      <button onClick={e => la()}>Get Account</button>
    </div>
  );
};

export const DeleteAccount = () => {
  const ctx = React.useContext(ZoraTestContext);

  const [acctId, setAcctId] = React.useState<string>('');
  const la = async () => {
    try {
      if (!acctId) {
        ctx.setMsgs('Please enter an account ID');
        return;
      }
      const quick = getQuickstartAPIReference();
      const acct = await quick.deleteAccount(acctId, { client: ctx.zora });
      ctx.setMsgs(JSON.stringify(acct, null, 2));
    } catch (e) {
      ctx.setMsgs('ERROR:\n' + JSON.stringify(e, null, 2));
    }
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <input
        type="text"
        value={acctId}
        onChange={e => setAcctId(e.target.value)}
      />
      &nbsp;
      <button onClick={e => la()}>Delete Account</button>
    </div>
  );
};
