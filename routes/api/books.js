const router = require("express").Router();
const booksController = require("../../likeControlla/controlla");

// Matches with "/api/books"
router.route("/")
    .get(booksController.findAll)
//   .post(booksController.create);

router.route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
    .post(booksController.create)
    .delete(booksController.remove);

module.exports = router;
