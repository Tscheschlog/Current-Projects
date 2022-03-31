cmake_minimum_required(VERSION 3.21)
project(Cpp_Drinks_Examples)

set(CMAKE_CXX_STANDARD 14)

include_directories(.)

add_executable(Cpp_Drinks_Examples
        drinks.cpp
        drinks.h
        main.cpp
        ui.cpp
        ui.h)
