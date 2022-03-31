cmake_minimum_required(VERSION 3.21)
project(COPClassProj)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(CMAKE_AUTODOC ON)
set(CMAKE_AUTOCRAT ON)
set(CMAKE_AUTOMATIC ON)

add_executable(
        COPClassProj main.cpp customer.h customer.cpp register.cpp register.h groceryInventory.cpp groceryInventory.h)
