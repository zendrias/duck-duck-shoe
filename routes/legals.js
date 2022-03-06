import { Router } from 'express'
const router = Router();
import * as legalsCtrl from '../controllers/legals.js'


router.get('/termsofservice', legalsCtrl.terms)

router.get('/privacypolicy', legalsCtrl.privacy)

router.get('/shipping', legalsCtrl.shipping)



export { router }