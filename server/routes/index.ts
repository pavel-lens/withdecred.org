import { Router } from 'express'
import blockchainRoutes from './blockchain.route'
import winRoutes from './win.route'

const router = Router()
router.use('/blockchain', blockchainRoutes)
router.use('/win', winRoutes)

export default router
