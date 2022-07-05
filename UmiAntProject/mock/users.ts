// mock file to mock data if server side is not ready

import { Request, Response } from 'express'
import mockjs from 'mockjs';

export default {
    'GET /api/users': (req: Request, res: Response) => {
        const data = mockjs.mock({
          'data|100': [{ name: '@cname', 'value|1-100': 50, 'type|0-2': 1 }],
        });
        res.json({
          data: data,
          code: 0,
          msg: 'success',
        });
      },
      '/api/users/1': { id: 1 },
  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req: Request, res: Response) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json([1, 2, 3, 4, 5]);
  },
  'delete /api/user/:id': (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ code: 0 });
  },
  'put /api/user/:id': (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ code: 1 });
  },
  'POST /api/users/login': (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (Math.random() > 0.5) {
      res.json({ code: 0 });
    } else {
      res.json({ code: 1 });
    }
  },
    

    }