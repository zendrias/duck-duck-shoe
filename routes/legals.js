import { Router } from 'express'
const router = Router();
import * as legalsCtrl from '../controllers/legals.js'
import { isLoggedIn } from '../middleware/middleware.js'



router.get('/termsofservice/:id', legalsCtrl.terms)

router.get('/privacypolicy/:id', legalsCtrl.privacy)

router.get('/privacypolicy/new/:id', isLoggedIn, legalsCtrl.newPrivacy)

router.get('/shipping/:id', legalsCtrl.shipping)

router.post('/privacy/:id', legalsCtrl.createPrivacy)

export { router }