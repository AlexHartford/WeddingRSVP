const express = require('express');
const router = express.Router();

const card_controller = require('../controllers/card.controller');

router.post('/create', card_controller.create_card);
router.get('/:code', card_controller.card_details);
router.get('/', card_controller.all_card_details);
router.put('/update/:code', card_controller.update_card);


module.exports = router;