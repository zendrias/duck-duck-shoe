import { Router } from 'express'
const router = Router();
import * as shoesCtrl from '../controllers/shoes.js'


router.get('/', shoesCtrl.index)

router.get('/new', shoesCtrl.new)

router.get('/update/:id', shoesCtrl.updateForm)

router.post('/update', shoesCtrl.update)

router.get('/mylistings', shoesCtrl.myListings)

router.post('/create', shoesCtrl.create)

export { router }