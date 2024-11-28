import { useParams } from "react-router-dom";


const BookDetails = () => {

    const {bookId} = useParams()
    console.log(bookId)

    return (
        <div>
            <p>book details {bookId} </p>
        </div>
    );
};

export default BookDetails;