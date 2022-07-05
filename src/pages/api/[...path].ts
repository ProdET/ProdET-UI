/* eslint-disable import/no-anonymous-default-export */
import { error } from 'console';
import { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';

const API_URL = process.env.API_URL;

const proxy = httpProxy.createProxyServer({
  secure: process.env.PROXY_SSL === 'true',
});
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise<void>((resolve, reject) => {
    req.url = req?.url?.replace(/^\/api/, '');

    proxy.web(req, res, { target: API_URL }, (err) => {
      error(`Error with request ${req.url}`);
      reject(err);
    });
  });
};
