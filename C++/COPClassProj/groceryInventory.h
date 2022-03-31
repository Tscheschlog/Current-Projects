#include <string>
#include <utility>
#include <vector>

#ifndef COPCLASSPROJ_GROCERYINVENTORY_H
#define COPCLASSPROJ_GROCERYINVENTORY_H


class inventory {

public :
    struct groceryItem {
    private:
        std::string name;
        double price{};
    public:

        groceryItem(std::string name = "", double cost = 0 ) {
            this->name = std::move(name);
            price = cost;
        }
        std::string getName() {
            return name;
        }
        double getPrice() {
            return price;
        }
    };

private:
    std::vector<groceryItem> fullInventory;

public:

    void addToInventory(std::string name, double price){
        groceryItem item = groceryItem(std::move(name), price);
        fullInventory.push_back(item);
    };

    std::vector<groceryItem> getFullInventory(){
        return fullInventory;
    };

};


inventory initInventory();
void printFullInventory(inventory&);


#endif //COPCLASSPROJ_GROCERYINVENTORY_H
