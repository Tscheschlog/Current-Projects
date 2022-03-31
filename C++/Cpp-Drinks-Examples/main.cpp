#include <iostream>
#include <array>
#include "ui.h"
#include "drinks.h"

int main() {
  /* Create a program which tracks different drinks for our inventory:
  struct will have two arrays (one which provides the available sizes & one which lists available containers)
  Students will add the struct and vector then
  Then print them out.
  */

  bool exit_check = true;
  std::array<std::string, 5> choices {"Add a new drink", "Change the calorie content",
                                      "Change the sugar content", "Display current inventory",
                                      "Quit"};

  std::cout << "Enter the inventory items:\n";
  do {
    // vector should push_back in function (this is a void)
    switch (get_menu_choice(choices)) {
        case 0: 
          add_drink();
          break;
        case 1: 
          change_calories();
          break;
        case 2: 
          change_sugar();
          break;
        case 3: 
          print_drinks();
          break;
        case 4: 
          exit_check = false;
          break;
    }
  } while (exit_check);
}