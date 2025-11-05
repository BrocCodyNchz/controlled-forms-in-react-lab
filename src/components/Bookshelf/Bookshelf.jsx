import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({
        title: ``,
        author: ``,
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({
            ...newBook,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        setBooks([...books, newBook]);
        setNewBook({ title: ``, author: `` });
    };

    return (
        <div className='bookshelfDiv'>
            <div className='formDiv'>
                <h3>Add a Book</h3>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='title'>Title: </label>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            value={newBook.title}
                            onChange={handleInputChange}
                            placeholder='Enter book title'
                        />
                    </div>

                    <div>
                        <label htmlFor='author'>Author: </label>
                        <input
                            type='text'
                            id='author'
                            name='author'
                            value={newBook.author}
                            onChange={handleInputChange}
                            placeholder='Enter author name'
                        />
                    </div>
                    
                    <button type='submit'>Add to Bookshelf</button>

                </form>
            </div>

            <div className='bookCardsDiv'>
                {books.length === 0 ? (
                    <p>No books on the shelf yet!</p>
                ) : (
                    books.map ((book, index) => (
                        <div key={index} className='bookCard'>
                            <h4>{book.title}</h4>
                            <p>
                                <em>by {book.author}</em>
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Bookshelf;
