//
// Created by 12676 on 3/18/2022.
//

#ifndef TEXTBASEDGAME001_GAMETEXTHELPER_H
#define TEXTBASEDGAME001_GAMETEXTHELPER_H

#include <iostream>
#include <Windows.h>
#include <fstream>
#include <string>
#include <vector>
#include <array>
#include "menuUI.h"

void displayGameText();
void editGameText(std::string&);
void consoleWhiteSpace(int);
void wipeGameText();
std::string formatEventText(std::array<std::string, 3>, int);
std::string formatEventText(std::array<std::string, 4>, int);
std::string customBlockText(std::vector<std::string>&);

#endif //TEXTBASEDGAME001_GAMETEXTHELPER_H
