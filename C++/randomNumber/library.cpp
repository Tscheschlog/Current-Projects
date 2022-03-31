#include "library.h"
#include <fstream>
#include <random>
#include <chrono>
#include <iostream>

class library  {

private:

    /// Helps to organize the information we need from a book/student to store it - - - - - - - - - - - - - - - - - - -

    struct book {
        std::string m_name;
        std::string m_isbn;
        bool m_checkedOut;

        // Formats member variables into a single line string
        std::string to_string() const{
            return "Title: " + m_name + " ISBN: " + m_isbn + " Checked Out: " + std::to_string(m_checkedOut);
        }
    };

    // Sid is set to a random sid when student is created
    class student {
    public:
        void setFullName(){
            std::cout << "Enter your first name: ";
            std::cin >> m_firstName;
            std::cout << "Enter your last name: ";
            std::cin >> m_lastName;
        }

        std::string getFirstName(){
            return m_firstName;
        }

        void setFirstName(std::string& name){
            m_firstName = name;
        }

        std::string getLastName(){
            return m_lastName;
        }

        void setLastName(std::string& name){
            m_lastName = name;
        }

        long getSID(){
            return m_sid;
        }

        void setSID(long sid){
            m_sid = sid;
        }

        student(){
            generateSID();
        }

    private:
        long m_sid;
        std::string m_firstName;
        std::string m_lastName;

        void generateSID(){
            /// This will get the current time to use for our 'mersenne twister' --> (mt19937)
            unsigned int seed = std::chrono::system_clock::now().time_since_epoch().count();

            /// Pass the seed into the mt instance to generate the random number
            std::mt19937 g1 (seed);

            /// Stores the number generated into the member for Student ID
            m_sid = g1();
        }
    };

    /// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // Private Instance of the current student using the library -- Calls the sid setter when created
    student currStudent;

    // -1 --> NO VALUE HAS BEEN STORED BY THE STUDENT
    long targetISBN = -1;

public:

    int const TOTAL_BOOKS;

    /// Store a book in the Database
    void storeBooks(book& currBook){

        std::fstream file = accessDB();

        file << currBook.to_string();

        file.close();
    }


    /// Find out if a book is currently in the Database
    bool trackBooks(book& currBook){

        std::fstream file = accessDB();

        std::string line;
        while(std::getline(file, line)){

            if(currBook.to_string() == line){

                // The Book is currently in the Database
                return true;
            }

        }
        //The Book is not in the Database
        return false;
    }


    /// DB --> Database
    std::fstream accessDB(){

        std::fstream file;

        file.open("../database.csv");

        return file;
    }


    /// Checkin a book
    void checkInBook(book& currBook){

        std::fstream file = accessDB();

        file << currBook.to_string();

        file.close();

    }


    /// Checkout a book from the Database
    void checkOutBook(book& currBook){

        std::fstream file = accessDB();

        // Create a temp Database file
        std::ofstream temp;
        temp.open("../temp.csv");

        std::string line;
        while(std::getline(file, line)){

            // If the book in the Database is equal to the checkout book, set checkedOut to true and add to temp file
            if(currBook.to_string() == line){
                currBook.m_checkedOut = true;
                temp << currBook.to_string() << std::endl;
                continue;
            }

            // Pass all other books to the updated temp file
            temp << line << std::endl;
        }

        file.close();
        temp.close();

        // Remove the old Database
        remove("database.csv");

        // Rename the temp.csv to the live Database name
        rename("temp.csv","database.csv");

    }


    /// void bookStatus --> Overloaded - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // No parameters
    void bookStatus(){

        std::cout << "\nWe are searching for " + std::to_string(targetISBN);

    }

    // Search based on isbn
    void bookStatus(long isbn){

        std::cout << "\nWe are searching for the isbn " + std::to_string(isbn);

    }

    // Search based on book title
    void bookStatus(std::string bookTitle){

        std::cout << "\nWe are searching for the book " + bookTitle;

    }


    /// Default Constructor - inits TOTAL_BOOKS
    library() : TOTAL_BOOKS(100) {

    };


    ///Overloaded Constructor - student sets the sid and isbn; inits TOTAL_BOOKS
    library(long sid, long isbn) : TOTAL_BOOKS(100){

        currStudent.setFullName();
        currStudent.setSID(sid);
        targetISBN = isbn;

    };
};

