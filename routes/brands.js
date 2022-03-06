import { Router } from 'express'
import * as brandCtrl from '../controllers/brands.js'
const router = Router()


router.get('/', brandCtrl.index)

export { router }