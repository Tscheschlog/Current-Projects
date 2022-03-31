//
// Created by 12676 on 3/18/2022.
//

#include "gameEvents.h"
#include <random>
#include <array>

void beginGame() {

    player mc = initPlayer();

    std::vector<std::string> intro;

    intro.emplace_back("You awake on a beach.");
    intro.emplace_back("Why are you here? You like to think a lot so you contemplated how this happened. This begins "
                       "to hurt your head so you \ndecide it is best to stop.");
    intro.emplace_back(formatChoicesToString(mc.getChoices()));

    std::string introBlock = customBlockText(intro);
    editGameText(introBlock);

    displayGameText();

    rollingGameLoop(mc);
}

/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

std::array<std::string, 3> monsterEventsText = {"\nA Skeleton appeared!", "\nA wild boar appeared!"};

std::array<std::string, 2> treasureEventsText = {"\nYou found a chest of gold!", "\nYou've discovered an item!"};


// Either "You decided to head" or "You've chosen to" for better grammar in console print

void displayChoice(player& mc, int input){

    std::string choiceTextBlock = mc.getChoices()[mc.getChoices().size() - 1] + mc.getChoices()[input];
    editGameText(choiceTextBlock);

}

void rollingGameLoop(player& mc){

    int input = getPlayerInput(5);
    if(input == 5) return;

    displayChoice(mc, input);

    presentCurrentEvent(mc, input);

    rollingGameLoop(mc);
}

void presentCurrentEvent(player& mc, int input){

    // Random number to be used for rng of events of rooms
    srand(time(0));
    int num = rand() % 2;

    // Create a selectRandomEventFunction() - - - - - - - - - - - - - - - - - - - - - - -
    // Get random number using mt "something"
    if(num == 0){
        srand(time(0));
        num = rand() % 3;
        editGameText(monsterEventsText[num]);
        beginFightingEvent(mc, num);
    }
    else {
        srand(time(0));
        num = rand() % 2;
        editGameText(treasureEventsText[num]);
        beginTreasureEvent(mc, num);
    }
    // - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - -
}

void beginFightingEvent(player& mc,int eventID){

    mc.setCurrentState(false);

    std::string pChoices = formatChoicesToString(mc.getChoices());
    editGameText(pChoices);

    displayGameText();
}

void beginTreasureEvent(player& mc,int eventID) {

    mc.setCurrentState(true);

    std::string pChoices = formatChoicesToString(mc.getChoices());
    editGameText(pChoices);

    displayGameText();

}
