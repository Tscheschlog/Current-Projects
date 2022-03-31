//
// Created by 12676 on 3/18/2022.
//

#include "gameTextHelper.h"


void displayGameText(){

    std::ifstream file;

    file.open("../gameText.txt");

    // Clear the console of prior output
    consoleWhiteSpace(0);


    // 'fileLength' starts at -1 to fix output line spacing
    int fileLength = -1;

    std::string line;
    while(std::getline(file,line)){

        std::cout << line << "\n";
        fileLength++;

    }

    consoleWhiteSpace(fileLength);
    wipeGameText();
}


void editGameText(std::string& newText){

    std::ofstream file;

    //std::ofstream file;
    //file.open("../ejournal.csv", std::fstream::app);


    file.open("../gameText.txt", std::fstream::app);

    file << newText;

    file.close();

}


// std::ofstream::trunc - "Any contents that existed in the file before it is open are discarded." - - - - - - - - - - -
void wipeGameText(){
    std::fstream file;
    file.close();
    file.open("../gameText.txt", std::ofstream::out | std::ofstream::trunc);
    file.close();
}


// Takes in a vector of strings, separates them with '\n', then returns it as a single string - - - - - - - - - - - - -
std::string customBlockText(std::vector<std::string>& textBlocks){

    std::string finalBlock;

    for(auto& item : textBlocks){
        finalBlock += (item + "\n");
    }

    return finalBlock;
}


// Best current fix to 'Clear' console screen - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const int MAX_CONSOLE_SCROLL = 38;

void consoleWhiteSpace(int filledLines){

    for(int i = 0;i < MAX_CONSOLE_SCROLL - filledLines; i++)
        std::cout << "\n";

}
