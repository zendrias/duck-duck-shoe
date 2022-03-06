import { Router } from 'express'
const router = Router();
import * as shoesCtrl from '../controllers/shoes.js'


router.get('/', shoesCtrl.index)

router.get('/new', shoesCtrl.new)

export { router }