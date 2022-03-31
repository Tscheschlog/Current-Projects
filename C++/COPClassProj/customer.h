//
// Created by 12676 on 2/9/2022.
//

#ifndef COPCLASSPROJ_CUSTOMER_H
#define COPCLASSPROJ_CUSTOMER_H

#include <array>
#include <utility>
#include "groceryInventory.h"

class Customer : public inventory {

private:
    void checkItem(int&, int&);
    void updateGroceryItem(int&, int&);
    double discount = 0;
    struct groceryGrabber {
    private:
        int amount;
        groceryItem grocery;
    public:
        int getAmount(){
            return amount;
        }
        void setAmount(int newAmount){
            amount = newAmount;
        }
        groceryItem getGrocery(){
            return grocery;
        }
        groceryGrabber(groceryItem &inputGrocery, int amount){
            this->grocery = inputGrocery;
            this->amount = amount;
        }
    };
public:
    void printCart();
    std::vector<groceryGrabber> groceryList;
    void setDiscount();
    double getDiscount() {
        return discount;
    }
    void addToShoppingList(std::string& name, std::string& amount);

    std::vector<groceryGrabber> getCurrentGroceryList(){
        return ( std::vector<groceryGrabber> &) groceryList;
    }
};

#endif //COPCLASSPROJ_CUSTOMER_H
