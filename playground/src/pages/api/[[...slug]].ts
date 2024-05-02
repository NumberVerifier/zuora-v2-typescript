// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IncomingHttpHeaders } from 'http';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

// axios.interceptors.request.use(request => {
//     console.log('Starting Request', JSON.stringify(request, null, 2))
//     return request
// })
//
// axios.interceptors.response.use(response => {
//     console.log('Response:', JSON.stringify(response, null, 2))
//     return response
// })

type Data = {
  name: string;
};
function convertHeaders(reqHeaders: IncomingHttpHeaders): HeadersInit {
  const headers: Record<string, string> = {};
  Object.entries(reqHeaders).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      headers[key] = value.join(', ');
    } else if (value) {
      headers[key] = value;
    }
  });
  return headers;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    console.log('proxy headers', req.headers);
    console.log('proxy query', req.body);
    const { slug } = req.query;
    let qpath = '';
    if (slug instanceof Array) {
      for (const qpathElement of slug) {
        if (qpathElement === 'proxy') {
          continue;
        }
        qpath += '/' + qpathElement;
      }
    } else {
      qpath = slug;
    }

    const qbody = req.body as object;
    const uparams = new URLSearchParams();
    Object.keys(qbody).forEach(key => {
      uparams.append(key, qbody[key]);
    });

    //getToken https://rest.sandbox.na.zuora.com client_id=af7cb42b-2dc9-4fae-8a39-280699dec1d9&client_secret=jX%3DSzK4PPQUyg96OP3zrsjZ%2BKoDZk06UybDZkDe8P&grant_type=client_credentials
    const q = `https://rest.sandbox.na.zuora.com${qpath}`;

    console.log('proxy url:', q, req.method);
    const cfg: AxiosRequestConfig = {
      method: req.method,
      url: q,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json'
      }
    };
    if (req.method === 'POST') {
      cfg.data = uparams.toString();
    }

    if (req.headers.authorization)
      cfg.headers.authorization = req.headers.authorization;
    console.log('req', JSON.stringify(cfg, null, 2));
    const aresp = await axios(cfg);
    console.log('proxy', aresp.status, aresp.statusText);
    if (aresp.status === 200) {
      console.log('SUCCESS', aresp.data);
      res.status(200).json(aresp.data);
    } else {
      res.status(aresp.status).json({ error: aresp.statusText });
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      console.error(e.response?.data);
      res.status(e.response?.status || 500).json({ error: e.response?.data });
      return;
    } else {
      console.error(e);
    }
    res.status(500).json({ error: e.message });
  }
  // const freq:RequestInit = {
  //     method: req.method,
  //     headers: {
  //         'content-type': 'application/x-www-form-urlencoded',
  //         'accept-encoding': 'gzip',
  //         'accept': 'application/json',
  //         'User-Agent': 'axios/0.21.1' // Simulating Axios User-Agent
  //
  //     },
  //     body: uparams.toString()
  //     // headers: convertHeaders(req.headers),
  // }
  // console.log("request init", JSON.stringify(freq, null, 2))
  // const resp = await fetch(q,freq)
  // console.log("proxy", resp.status, resp.statusText)
  // if (resp.ok) {
  //     const body = await resp.json()
  //     console.log("proxy", body)
  //     res.status(200).json(body)
  // }
  // else {
  //     res.status(resp.status).json({error: resp.statusText})
  // }
  // res.status(200).json({ name: 'John Doe' })
}
