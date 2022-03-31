cmake_minimum_required(VERSION 3.21)
project(randomNumber)

set(CMAKE_CXX_STANDARD 14)

add_executable(randomNumber main.cpp library.h library.cpp)
