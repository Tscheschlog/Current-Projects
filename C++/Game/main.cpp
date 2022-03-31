#include <iostream>
#include <fstream>
#include <string>


//for the sake of simplicity
using namespace std;


int main()
{
    ifstream file;
    file.open("../menu.csv");


    // File open error
    if(!file.is_open()){
        cout << "FILE COULDNT OPEN ERROR\n";
        return 0;
    }

    string line;

    // Get each line of the file, returns false if the line is empty
    while(getline(file,line)){

        int separatorIndex = line.find(',');

        string name = line.substr(0,separatorIndex);
        string cost = line.substr(separatorIndex + 1);

        int costToInt = stoi(cost);


        cout << line.find(',')<<endl;

        cout << name << " " << costToInt << endl;
    }

    file.close();


    return 0;
}
