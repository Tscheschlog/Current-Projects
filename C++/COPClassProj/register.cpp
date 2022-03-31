#include <iostream>
#include <string>
#include <fstream>
#include <windows.h>
#include <iomanip>
#include "register.h"
#include "groceryInventory.h"
#include "customer.h"

Customer thisGuy;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

void startRegister(){

    std::cout << "Hello welcome to checkout!";
    thisGuy.setDiscount();

}

void getOrder(){

    inventory storeInventory = initInventory();
    printFullInventory(storeInventory);

    std::string orderNumber;
    std::string amount;
    std::cout << "\nWhat item would you like to select? (Enter the accompanying Number)\n";
    std::cin >> orderNumber;
    std::cout << "\nHow many?\n";
    std::cin >> amount;
    thisGuy.addToShoppingList(orderNumber, amount);
    Sleep(500);
}

bool continueSelection(){

    std::string finish;

    std::cout << "\n----------------------------------------------\nIMPORTANT: Any other input will exit to checkout!"
                 "\nWould you like to checkout? (y/n) \n";
    std::cin >> finish;

    bool contin = (finish[0] == 'n' || finish[0] == 'N');


    return contin;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

void storeReceipt(double& total, double& discount, double& netTotal) {

    std::ofstream file;
    file.open("../ejournal.csv", std::fstream::app);

    double tax = (total-discount) * 0.06;

    file << std::setprecision(2) << std::fixed << "\nTotal Cost: \t$" << total
            << "\nDiscount: \t\t$" << discount
            << "\nTax: \t\t\t$" << tax
            << "\nTotal Bill: \t$" << netTotal
            << "\n=======================================";

    file.close();
}

void checkout(){

    thisGuy.printCart();

    double totalCost = 0;
    double totalDiscount;

    for(auto item : thisGuy.groceryList){

        totalCost += (item.getAmount() * item.getGrocery().getPrice());

    }

    totalDiscount = totalCost * thisGuy.getDiscount();
    std::cout << std::setprecision(2);
    std::cout << "\n\nTOTAL COST: $" << totalCost;
    std::cout << "\nDISCOUNT: $" << totalDiscount;
    std::cout << "\nTAX: $" << (totalCost - totalDiscount) * 0.06;

    double netCost = (totalCost - totalDiscount * 1.06);

    std::cout << "\nOwed Amount: $" << netCost;


    storeReceipt(totalCost, totalDiscount, netCost);

    getPayment(netCost);
}

void getPayment(double& total){

    double payment;
    std::cout << "\n\nEnter payment amount: $";
    std::cin >> payment;

    double leftOver = total - payment;

    if(checkOwedBalance(leftOver)){
        getPayment(leftOver);
    }
    else {
        std::cout.precision(2);
        std::cout << "\n\nChange: $" <<abs(total - payment);
        std::cout << "\nPayment Complete! Have a great Day!";
    }
}

bool checkOwedBalance(double& leftOver){

    if(leftOver >=0.01){
        std::cout << "New total: $" << leftOver;
        return true;
    }
    return false;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -