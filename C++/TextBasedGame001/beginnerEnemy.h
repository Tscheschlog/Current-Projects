//
// Created by 12676 on 3/21/2022.
//

#ifndef TEXTBASEDGAME001_BEGINNERENEMY_H
#define TEXTBASEDGAME001_BEGINNERENEMY_H

#include "entity.h"
#include "gameEvents.h"
#include <cstdlib>
#include <string>


class beginnerEnemy : entity {

private:
    int statCap;

public:
    beginnerEnemy(std::string name, std::vector<std::string> choices, int healthPoints, int manaPoints, int attackStat,
    int defenseStat) : entity(std::move(name), std::move(choices), healthPoints % statCap,
                              manaPoints % statCap,attackStat % statCap, defenseStat % statCap) {};

    int setStatRangeCap() {
        srand(time(0));
        statCap = rand() % 5;
    }

};


#endif //TEXTBASEDGAME001_BEGINNERENEMY_H
