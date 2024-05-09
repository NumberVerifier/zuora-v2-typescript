import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { getQuickstartAPIReference, ZuoraClient } from 'zuora-v2-typescript';
import { DeleteAccount, GetAccount, ListAccounts } from '../components/account';
import { ZoraTestContext } from './api/ctx';
import { CreateAccount } from '../components/createAccount';
import {
  DeleteContact,
  GetContact,
  ListContacts
} from '../components/contacts';
import { GetSubscription, ListSubscriptions } from '../components/subscription';
import { GetOrder, ListOrders } from '../components/order';
import {
  DeletePaymentMethod,
  GetPaymentMethod,
  ListPaymentMethods
} from '../components/paymentMethods';
import { GetPayment, ListPayments } from '../components/payments';
import { PaymentPage } from '../components/paymentPages';
import process from 'process';

const zuoraAddress = '/api/proxy'; // process.env.NEXT_PUBLIC_ZUORA_ENDPOINT;
const inter = Inter({ subsets: ['latin'] });
const zora = new ZuoraClient(
  process.env.NEXT_PUBLIC_ZUORA_CLIENT_ID,
  process.env.NEXT_PUBLIC_ZUORA_CLIENT_SECRET,
  zuoraAddress,
  {
    id: process.env.NEXT_PUBLIC_ZUORA_PAGES_PAGEID,
    uri: process.env.NEXT_PUBLIC_ZUORA_SIG_URI,
    param_supportedTypes: process.env.NEXT_PUBLIC_ZUORA_PAGES_SUPPORTED
  },
  true
);

export default function Home() {
  const [msgs, setMsgs] = React.useState<string>('Start...');

  console.log('msgs', msgs);
  return (
    <>
      <Head>
        <title>Zuora Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className},flexWrapper`}>
        <div className="row">
          <div className="column">
            <ZoraTestContext.Provider value={{ zora, setMsgs }}>
              <div style={{ border: '1px solid black', padding: 10 }}>
                <h3>Accounts</h3>
                <ListAccounts />
                <GetAccount />
                <DeleteAccount />
                <CreateAccount />
              </div>
              <div style={{ border: '1px solid black', padding: 10 }}>
                <h3>Contacts</h3>
                <ListContacts />
                <GetContact />
                <DeleteContact />
              </div>
              <div style={{ border: '1px solid black', padding: 10 }}>
                <h3>Subscriptions</h3>
                <ListSubscriptions />
                <GetSubscription />
              </div>
              <div style={{ border: '1px solid black', padding: 10 }}>
                <h3>Orders</h3>
                <ListOrders />
                <GetOrder />
              </div>
              <div style={{ border: '1px solid black', padding: 10 }}>
                <h3>Payment Methods</h3>
                <ListPaymentMethods />
                <GetPaymentMethod />
                <DeletePaymentMethod />
              </div>
              <div style={{ border: '1px solid black', padding: 10 }}>
                <h3>Payments</h3>
                <ListPayments />
                <GetPayment />
              </div>
              <div style={{ border: '1px solid black', padding: 10 }}>
                <h3>Usage</h3>
              </div>
              <PaymentPage />
            </ZoraTestContext.Provider>
          </div>
          <div className="column">
            <textarea style={{ minWidth: 800, minHeight: 1000 }} value={msgs} />
          </div>
        </div>
      </main>
    </>
  );
}
