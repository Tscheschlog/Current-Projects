cmake_minimum_required(VERSION 3.10)
project(Qt_Test004)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_INCLUDE_CURRENT_DIR ON)
set(DCMAKE_PREFIX_PATH=~"/Qt/6.1.2/gcc_64")


set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTORCC ON)

add_executable(Qt_Test004 main.cpp )
target_link_libraries(Qt_Test004 Qt::Widgets)
