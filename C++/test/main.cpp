#include <iostream>
#include <ifstream>
#include "map_handler.h"




int main() {

    map worldMap;

    for(int y = 0; y < worldMap.getMapY();y++){

        for(int x = 0;x < worldMap.getMapX();x++){

            std::cout << "#-";

        }
        std::cout << "#\n";
    }


    std::cout << worldMap.getMapX() << "\n" << worldMap.getMapY();

    return 0;
}
