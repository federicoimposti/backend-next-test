import { books } from "../../../data";

export default (req, res) => {
    const bookId = req.query.bookId;
    const book = books.find((book) => book.id === parseInt(bookId));
    
    if(!book) { 
        res.status(404).json({error: `El book ${bookId} no existe.`});

        return;
    }
    res.status(200).json(book);
}