#include <iostream>
#include "register.h"

using std::cout;
using std::cin;


int main() {

    startRegister();

    do {

        getOrder();

    } while( continueSelection() );

    checkout();

    return 0;
}