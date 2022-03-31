#include <vector>
#include <string>
#include <iostream>
#include <windows.h>
#include "customer.h"
#include "register.h"
#include "groceryInventory.h"


int getUserDiscount(){

    int input;

    std::cout << "\nPlease select discount group: \n [1] Senior Citizen\t (5%)\n"
                 " [2] Preferred Member\t (8%)\n"
                 " [3] Educator\t\t (2.5%)\n"
                 " [4] Veteran\t\t (4%)\n"
                 " [5] Non-Member\t\t (0%)\n"
                 "= = = Invalid Input will result in 'Non-Member' being applied = = =\n";
    std::cin >> input;

    return input;
}

void Customer::setDiscount(){

    int newDiscount;

    newDiscount = getUserDiscount();

    std::array<double, 4> discountGroups = {0.05, 0.08, 0.025, 0.04};
    std::array<std::string, 5> displayGroups = {"Senior Citizen","Preferred member","Educator","Veteran","Non-member"};

    if(newDiscount < 1 || newDiscount > 4){
        std::cout << "\nYou've selected: Non-member\n\n";
    }
    else {
        std::cout << "\nYou've selected: " << displayGroups[newDiscount - 1] << "\n\n";
        discount = discountGroups[newDiscount - 1];
    }
    Sleep(1000);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

void Customer::checkItem(int& orderNum, int& totalAmount){

    if(orderNum < 1 || orderNum > 11){
        std::cout << "\n !ERROR! - - - INVALID SELECTION - - - !ERROR! \n\n";
        getOrder();
    }
    else {
        updateGroceryItem(orderNum, totalAmount);
        printCart();
    }

}

void Customer::updateGroceryItem(int& orderNum, int& totalAmount){

    inventory storeInventory = initInventory();
    std::vector<groceryItem> fullInv = storeInventory.getFullInventory();

    bool addToList = true;

    for (auto &item: groceryList) {
        if (item.getGrocery().getName() == fullInv[orderNum - 1].getName()) {
            item.setAmount(totalAmount);
            addToList = false;
            break;
        }
    }
    if (addToList) {
        groceryGrabber currGroceryItem(fullInv[orderNum - 1], totalAmount);
        groceryList.push_back(currGroceryItem);
    }
}

void Customer::addToShoppingList(std::string& orderNumber, std::string& amount){

    int orderNum = std::stoi( orderNumber );
    int totalAmount = std::stoi( amount );

    checkItem( orderNum, totalAmount );
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

void Customer::printCart(){

    std::string separator = "\n";

    if(groceryList.size() > 1){
        separator = "\n= = = = = = = = = = = = = = = = = = = = =\n";
    }

    bool firstItemFormat = false;

    std::cout << "- - - - - - - - - CURRENT CART - - - - - - - - -\n\n";
    for(auto item : groceryList){

        if(firstItemFormat) std::cout << separator;

        std::cout << "Name: \t\t" <<item.getGrocery().getName() << "\n";
        std::cout << "Amount: \t" << item.getAmount() << "\n";
        std::cout << "Price: \t\t$" <<item.getGrocery().getPrice() * item.getAmount();
        firstItemFormat = true;

    }
    std::cout << "\n\n- - - - - - - - -  CART END - - - - - - - - - - \n";
}
