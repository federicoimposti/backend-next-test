import { books } from "../../../data";

export default (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json(books);
      break;
    case "POST":
      const book = req.body;
      books.push(book);
      res.status(201).json(book);
      break;
  }
};