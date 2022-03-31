#include <iostream>
#include <iomanip>
#include <fstream>
#include <string>
#include <vector>
#include "groceryInventory.h"

void printFullInventory(inventory &storeInventory){

    for(int i = 0; i < storeInventory.getFullInventory().size();i++){
        std::cout << "ITEM #"<<i+1<<" ";
        std::cout << storeInventory.getFullInventory()[i].getName();

        std::cout  << std::fixed << std::setprecision(2)<< "\n\tPrice: $"
            <<storeInventory.getFullInventory()[i].getPrice() << "\n\n";
    }
}

void readFromMenu(inventory& storeInv) {

    std::ifstream file;
    file.open("../menu_items.csv");

    if(!file.is_open()){
        std::cout << "FILE COULDNT OPEN ERROR\n";
    }

    std::string line;
    while(getline(file,line)){

        const int separatorIndex = line.find(',');

        std::string name = line.substr(0,separatorIndex);
        std::string cost = line.substr(separatorIndex + 1);

        storeInv.addToInventory(name, std::stod(cost));

    }
    file.close();
}

inventory initInventory() {

    auto storeInventory = new inventory();

    readFromMenu(*storeInventory);

    return *storeInventory;
}
