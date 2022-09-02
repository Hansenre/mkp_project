const {Router} = require("express");

const router = Router();

router.get("/", async (request, response) => {
  response.json({ ok: 'ok' })
});

module.exports = router;