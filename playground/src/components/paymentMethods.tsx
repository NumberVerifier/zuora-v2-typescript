import React from 'react';
import { ZoraTestContext } from '../pages/api/ctx';
import { getQuickstartAPIReference } from 'zuora-v2-typescript';

export const ListPaymentMethods = () => {
  const ctx = React.useContext(ZoraTestContext);
  const la = async () => {
    try {
      const quick = getQuickstartAPIReference();

      const customers = await quick.getPaymentMethods({}, { client: ctx.zora });
      ctx.setMsgs(JSON.stringify(customers, null, 2));
    } catch (e) {
      ctx.setMsgs('ERROR:\n' + JSON.stringify(e, null, 2));
    }
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <button onClick={e => la()}>Get Payment Methods</button>
    </div>
  );
};

export const GetPaymentMethod = () => {
  const ctx = React.useContext(ZoraTestContext);

  const [id, setId] = React.useState<string>('');
  const la = async () => {
    try {
      if (!id) {
        ctx.setMsgs('Please enter an account ID');
        return;
      }
      const quick = getQuickstartAPIReference();
      const acct = await quick.getPaymentMethodById(
        id,
        {},
        { client: ctx.zora }
      );
      ctx.setMsgs(JSON.stringify(acct, null, 2));
    } catch (e) {
      ctx.setMsgs('ERROR:\n' + JSON.stringify(e, null, 2));
    }
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <input
        placeholder="id"
        type="text"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      &nbsp;
      <button onClick={e => la()}>Get Payment Method</button>
    </div>
  );
};

export const DeletePaymentMethod = () => {
  const ctx = React.useContext(ZoraTestContext);

  const [id, setId] = React.useState<string>('');
  const la = async () => {
    try {
      if (!id) {
        ctx.setMsgs('Please enter an account ID');
        return;
      }
      const quick = getQuickstartAPIReference();
      const acct = await quick.deletePaymentMethod(id, { client: ctx.zora });
      ctx.setMsgs(JSON.stringify(acct, null, 2));
    } catch (e) {
      ctx.setMsgs('ERROR:\n' + JSON.stringify(e, null, 2));
    }
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <input
        placeholder="id"
        type="text"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      &nbsp;
      <button onClick={e => la()}>Delete Payment Method</button>
    </div>
  );
};
