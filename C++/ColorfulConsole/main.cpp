// color your text in Windows console mode
// colors are 0=black 1=blue 2=green and so on to 15=white  
// color attribute = foreground + background * 16
// to get red text on yellow use 4 + 14*16 = 228
// light red on yellow would be 12 + 14*16 = 236
// a Dev-C++ tested console application by  vegaseat  07nov2004

/// Maybe try to figure out bold another time, Windows is pretty wierd

#include <iostream>
#include <windows.h>   // WinApi header

struct outputTextEdit {
private:
    HANDLE  hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
public:
    int color_code = 7;

    HANDLE get_hConsole(){
        return hConsole;
    }
};


int main()
{
    outputTextEdit editTXT;

    editTXT.color_code = 15;


  for(int k = 1; k < 255; k++)
  {
    // pick the color attribute k you want
    SetConsoleTextAttribute(editTXT.get_hConsole(), editTXT.color_code);

    std::cout << k << " I want to be nice today!" << std::endl;
  }
  
  std::cin.get(); // wait
  return 0;
}

/*
 * All Color codes I want:
 * 1    -   Blue
 * 2    -   Green
 * 3    -   Teal
 * 4    -   Red
 * 5    -   Purple
 * 6    -   Gold
 * 7    -   White
 * 8    -   Gray


 NOTE: Add '8' to any of the number keys to get the color in a bolder/brighter format.

    !!!IMPORTANT: THIS DOES NOT WORK FOR COLOR KEY CODE '8'!!!


    #include <windows.h>   // WinApi header

    HANDLE  hConsole;
    int k;

    hConsole = GetStdHandle(STD_OUTPUT_HANDLE);

    SetConsoleTextAttribute(hConsole, 2); // '2' is a color key code


    ^^^ Maybe create a struct to store the two values, so it would be easier to swap ^^^


 */

