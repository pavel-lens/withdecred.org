import axios from 'axios'
import consola from 'consola'
import express, { Request, Response, NextFunction } from 'express'
// import { Container } from 'typedi'
const cache = require('route-cache')

const router = express.Router()

router.get(
  '/last-block',
  cache.cacheSeconds(720), // 12 minutes
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await axios.get(
        'https://explorer.dcrdata.org/api/block/best/hash'
      )
      const lastBlockHash = response.data

      res.send(lastBlockHash)
    } catch (err) {
      consola.error(err)
      next(err)
    }
  }
)

export default router
