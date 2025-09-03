import { Book } from "./Bai6";
import { User } from "./Bai7";

export class Library {
    books: Book[] = [];
    users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }
}
