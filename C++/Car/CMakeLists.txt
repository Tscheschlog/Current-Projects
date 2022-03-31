cmake_minimum_required(VERSION 3.21)
project(Car)

set(CMAKE_CXX_STANDARD 14)

include_directories(.)

add_executable(Car
        .idea/.gitignore
        .idea/Car.iml
        .idea/modules.xml
        .idea/workspace.xml
        User_Iterations.cpp
        User_Iterations.h
        main.cpp
        SchedulerFunctions.cpp
        SchedulerFunctions.h)
