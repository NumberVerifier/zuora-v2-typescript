import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { getQuickstartAPIReference, ZuoraClient } from 'zuora-v2-typescript';

const zuoraAddress = '/api/proxy'; // process.env.NEXT_PUBLIC_ZUORA_ENDPOINT;
const inter = Inter({ subsets: ['latin'] });
const zora = new ZuoraClient(
  process.env.NEXT_PUBLIC_ZUORA_CLIENT_ID,
  process.env.NEXT_PUBLIC_ZUORA_CLIENT_SECRET,
  zuoraAddress,
  true
);
const quick = getQuickstartAPIReference();

export default function Home() {
  const [msgs, setMsgs] = React.useState<string>('Start...');
  const listCustomers = async () => {
    try {
      const customers = await quick.getAccounts({}, { client: zora });
      console.log('customers', customers);
      setMsgs(JSON.stringify(customers, null, 2));
    } catch (e) {
      setMsgs('ERROR:\n' + JSON.stringify(e, null, 2));
    }
  };

  console.log('msgs', msgs);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` ${inter.className}`}>
        <button onClick={listCustomers}>Get Accounts</button>
        <br />
        <br />
        <textarea style={{ minWidth: 800, minHeight: 1000 }} value={msgs} />
      </main>
    </>
  );
}