#include <iostream>
#include <array>
#include <string>
#include <vector>

using std::array;
using std::vector;
using std::string;

// Need to create something to hold the vector so it can be accessed from other files goto line 11 of ScheduleFunctions.cpp
    struct currentSchedule {
        vector<string> currentEvents;
    };

//Array which holds menu options.
    const std::array<std::string, 4> choices = {"Display Schedule", "Add Event",
                                                "Edit Event", "Remove Event"};
//Array which holds event types.
     const array<string, 3> eventArr = {"Soccer game", "Movie watching", "Surfing"};


//Gets menu choice selection from user.
    int get_verify_choice();

//Funtion which validates if the user wants to continue adding more events or not.
    bool continueOrNot();

//Function which asks for the items needed to build the string to be added (event name, date, time, type of event)
//and returns the string and adds it to schedule(vector) in main.
    string vectorBuilder();

//function which displays the current schedule
//It displays a custom "There are no events scheduled" if vector is empty.
    void displaySchedule(vector<string> currentEvents);

//Function which allows one to remove an event from the current schedule.
    void myErase(vector<string> &currentEvents);

//Function which allows user to select and edit an event on the schedule. Works very similar to function vectorBuilder().
    void myEdit(vector<string> &currentEvents);

