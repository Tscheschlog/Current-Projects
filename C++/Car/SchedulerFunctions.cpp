#include <iostream>
#include "SchedulerFunctions.h"

//members of std namespace
using std::cout;
using std::cin;
using std::getline;
using std::string;
using std::endl;

// You do not need to put the struct in here or the vector since it does not need any values inserted -- main

string vectorBuilder() {
	string eventType;
	string eventName;
	string eventTime;
	string eventDate;
	string concat;
	cout << "\n\t\t\tChoose from the following types of events: ";

//for loop that prints array eventArr.
	for (auto i : eventArr) {
		cout << i << ", ";
	}
	cout << "\b\b.";
	cout << "\nEnter event type: ";
	cin.ignore();
	getline(cin, eventType);
	cout << "Enter event name: ";
	getline(cin, eventName);
	cout << "Enter time: ";
	getline(cin, eventTime);
	cout << "Enter date: ";
	getline(cin, eventDate);
	concat = eventName + ", " + eventDate + ", " + eventTime + ", " + eventType;			//Concatenates variables to then pass to vector.
	return concat;
}


void displaySchedule(vector<string> currEvents) {
	if (currEvents.empty()) {								//compares vector size and if less than 1 vector is considered empty.
		cout << "\nThere are no events scheduled." << endl;
	}
	else {
		cout << "\t\t\tYour current schedule is:\n ";
		for (auto it = currEvents.begin(); it < currEvents.end(); ++it) {			//Sets variable it to the first position of the vector
			std::cout << *it << ' ';													//While variable it's position is less than the ending position of vector.
			cout << endl;																//System will print the contents of each position(from start to end).
		}
	}
}


void myErase(vector<string> &currEvents) {
	string decide;
	cout << "\t\t\tWould you like to remove an event from the schedule?: ";
	cin >> decide;

	//If users input stored in variable decide, starts with y or Y.
	//System will find out which vector position the user wishes to erase.
	if (decide[0] == 'y' || decide[0] == 'Y') {
		int number;
		cout << "\t\t\tTo remove an event from the current schedule enter the position of an event. " << endl;
		cout << "\t\t\tThe first event position being 0, the second being 1, the third being 2, etc: ";
		cin >> number;
		currEvents.erase(currEvents.begin() + number);		//Erases (first vector position + number inputed by the user).
	}																//If the number user entered is 0 then first position is erased.
	else if (decide[0] == 'n' || decide[0] == 'N') {
		//return;														//if user does not select yes to erase vector then this function ends.
	}
	else {															//If anything other than y, Y, or n, N is entered then function will start all over.
		myErase(currEvents);
	}
}

void myEdit(vector<string> &currEvents) {
	string decide;
	cout << "\n\t\t\tWould you like to edit an event from the schedule? ";
	cin >> decide;
	if (decide[0] == 'y' || decide[0] == 'Y') {
		int number;
		string eventType;
		string eventName;
		string eventTime;
		string eventDate;
		string concat;
		cout << "\t\t\tTo edit an event from the current schedule enter the position of the event." << endl;
		cout << "\t\t\tThe first event being at position 0, the second being 1, the third being 2, etc: ";
		cin >> number;
		cout << "\t\t\tChoose from the following types of events: ";

		//for loop that prints array eventArr.
		for (auto i : eventArr) {
			cout << i << ", ";
		}
		cout << "\b\b.";
		cout << "\nEnter event type: ";
		cin.ignore();
		getline(cin, eventType);
		cout << "Enter event name: ";
		getline(cin, eventName);
		cout << "Enter time: ";
		getline(cin, eventTime);
		cout << "Enter date: ";
		getline(cin, eventDate);

		//Concatenates variables to then pass to vector.
		concat = eventName + ", " + eventDate + ", " + eventTime + ", " + eventType;

		currEvents[number] = concat;
	}

}
