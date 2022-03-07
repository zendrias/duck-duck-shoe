import { Router } from "express";
const router = Router()
import * as shopCtrl from '../controllers/shops.js';

router.get('/', shopCtrl.index)

router.get('/all', shopCtrl.all)

router.get('/:id', shopCtrl.show)

router.get('/profiles/:id', shopCtrl.profile)
export { router }