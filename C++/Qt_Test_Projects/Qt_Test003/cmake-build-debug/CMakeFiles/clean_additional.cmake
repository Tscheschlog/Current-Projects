# Additional clean files
cmake_minimum_required(VERSION 3.16)

if("${CONFIG}" STREQUAL "" OR "${CONFIG}" STREQUAL "Debug")
  file(REMOVE_RECURSE
  "CMakeFiles\\Qt_Test003_autogen.dir\\AutogenUsed.txt"
  "CMakeFiles\\Qt_Test003_autogen.dir\\ParseCache.txt"
  "Qt_Test003_autogen"
  )
endif()
