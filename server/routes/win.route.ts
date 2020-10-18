import axios from 'axios'
import consola from 'consola'
import express, { Request, Response, NextFunction } from 'express'
import { Container } from 'typedi'
const cache = require('route-cache')

const router = express.Router()

function wait(ms = 500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Promise.all([wait()])

    const lastBlockHash = (
      await axios.get(`${process.env.DOMAIN}/api/blockchain/last-block`)
    ).data

    const url = `${process.env.DOMAIN}/r/${lastBlockHash}`
    // consola.info({ lastBlockHash })
    // consola.info({ url })

    res.send({
      lastBlockHash,
      url,
    })
  } catch (err) {
    consola.error(err)
    next(err)
  }
})

export default router
