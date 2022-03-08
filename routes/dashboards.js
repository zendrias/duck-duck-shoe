import { Router } from 'express'
import * as dashboardsCtrl from '../controllers/dashboard.js'
// import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

router.get('/', dashboardsCtrl.index)
router.get('/analytics/:id', dashboardsCtrl.analytics)
export {
  router
}