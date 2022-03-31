cmake_minimum_required(VERSION 3.21)

project(Game VERSION 1.0.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(CMAKE_AUTODOC ON)
set(CMAKE_AUTOCRAT ON)
set(CMAKE_AUTOMATIC ON)

set(CMAKE_PREFIX_PATH "C:/Qt/6.2.3/mingw_64/lib/cmake/")

find_package(Qt6 COMPONENTS Widgets)


set(Vulkan_INCLUDE_DIR Vulkan_LIBRARIES)



add_executable(Game ${main.cpp}
        main.cpp)

target_link_libraries(Game PRIVATE Qt6::Widgets)
