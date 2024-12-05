const Router = require('express');
const router = new Router();
const TokenController = require('../controllers/token_working');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: `Hello, ${req.user.email}!` });
});

router.post('/auth-user', TokenController.AuthUser);
// router.post('/logout', TokenController);

module.exports = router;