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

    //getToken https://rest.sandbox.na.zuora.com client_id=af7cb42b-2dc9-4fae-8a39-280699dec1d9&client_secret=jX%3DSzK4PPQUyg96OP3zrsjZ%2BKoDZk06UybDZkDe8P&grant_type=client_credentials
    const q = `https://rest.sandbox.na.zuora.com${qpath}`;

    console.log('proxy url:', q, req.method);
    const cfg: AxiosRequestConfig = {
      method: req.method,
      url: q,
      headers: {
        accept: 'application/json'
      }
    };
    if (qpath.includes('auth')) {
      console.log('auth', qpath);
      const qbody = req.body as object;
      const uparams = new URLSearchParams();
      Object.keys(qbody).forEach(key => {
        uparams.append(key, qbody[key]);
      });
      cfg.data = uparams.toString();
      cfg.headers = {
        ...cfg.headers,
        'Content-Type': 'application/x-www-form-urlencoded'
      };
    } else if (req.method === 'POST' || req.method === 'PATCH') {
      console.log('POST', typeof req.body);
      cfg.headers = { ...cfg.headers, 'Content-Type': 'application/json' };
      // cfg.data = JSON.stringify(req.body);
      cfg.data = req.body;
    }

    if (req.headers.authorization)
      cfg.headers.authorization = req.headers.authorization;
    console.log('req', JSON.stringify(cfg, null, 2));
    const aresp = await axios(cfg);
    console.log('proxy', aresp.status, aresp.statusText);
    if (aresp.status >= 200 && aresp.status < 300) {
      console.log('SUCCESS', aresp.data);
      res.status(200).json(aresp.data);
    } else {
      console.log('ERROR', aresp.status, aresp.statusText);
      res.status(aresp.status).json({ error: aresp.statusText });
    }
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error('axios err', e.response?.data);
      res.status(e.response?.status || 500).json({ error: e.response?.data });
      return;
    } else {
      console.error('not axios', e);
    }
    res.status(500).json({ error: e.message });
  }
}
