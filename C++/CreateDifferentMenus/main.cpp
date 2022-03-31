#include <iostream>
#include <windows.h>   // WinApi header
#include <string>


/// SetConsoleTextAttribute(hConsole, k); < - - - > How to change the console color
struct outputTextEditor {
private:
    HANDLE  hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
public:

    // DEFAULT TEXT IS CODE 7
    int color_code = 7;

    HANDLE get_hConsole(){
        return hConsole;
    }
    void applyColorCode(){
        SetConsoleTextAttribute(hConsole, color_code);
    }
    void resetColorCode(){
        color_code = 7;
        applyColorCode();
    }
};

void createBorderLine(std::string& line){

    line += "\n+";
    for(int i = 0; i < 118; i++){
        line += "-";
    }
    line += "+";

}


int main() {

    std::string border;
    createBorderLine(border);

    outputTextEditor editor;
    editor.color_code = 10;
    editor.applyColorCode();

    std::cout << border;

    editor.resetColorCode();

    return 0;
}


//How wide is Console ? - - - > |||  120  |||

//Proper Spacing ?

/// The Different Menus / UIs - - - > DO NOT WORRY ABOUT FUNCTIONALITY
    // Main Menu

    // Map Menu

    // Player Menus
        // Battle
        // Inventory
        // Level-up

