import { Router } from 'express'
const router = Router();
import * as legalsCtrl from '../controllers/legals.js'
import { isLoggedIn } from '../middleware/middleware.js'



router.get('/:id', isLoggedIn, legalsCtrl.index)

router.get('/settings/:id', isLoggedIn, legalsCtrl.newSettings)

router.post('/settings/:id', legalsCtrl.create)

export { router }