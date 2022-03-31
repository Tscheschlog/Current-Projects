/*Carlos Medina, 02/05/2022, COP2003
Scheduler Assignment*/
#include <iostream>
#include "SchedulerFunctions.h"
#include "User_Iterations.h"

//members of std namespace
using std::cout;
using std::cin;

currentSchedule schedule;

// Prints out Menu
void print_menu() {
	cout << "\n\t\t\tPlease select an option from the following choices:\n\n";
	for (int i = 0; i <= choices.size() - 1; i++) {
		cout << "\t[" << i << "] " << choices[i] << "\n";
	}
	cout << "\tEnter selection [ ]\b\b";
}



//main function to run schedule program.
int main() {
					//Initializing main vector currentEvents to store our information.
	string menuOpen;									//String used to decide if user wants to open menu again.
	cout << "Would you like to open the menu?: ";
	cin >> menuOpen;

	//Loop that will open menu if user selects yes
	while (menuOpen[0] == 'y' || menuOpen[0] == 'Y') {

		print_menu();											//Function which prints our menu to the user.
		int choice = get_verify_choice();						//calls function get_verify_choice and stores info in choice.
		if (choice == 0) {										//if users choice is zero then schedule function will display.
			displaySchedule(schedule.currentEvents);
			cout << "\n\t\t\tWould you like to go back to the menu?: ";			
			cin >> menuOpen;
		}
		else if (choice == 1) {									//If users choice is one then system will ask for the items needed to build schedule using vector.
			bool y = true;										//bool variable used to find out if user wants to add more items to schedule.
			while (y) {									//while true we will call function vectorBuilder and allow user to build schedule.
				string userInput = vectorBuilder();
                schedule.currentEvents.push_back(userInput);				//pushes user schhedule items to back of vector to make room for more items if needed.
				y = continueOrNot();							//calls function continueOrNot which finds out if user would like to continue or not.
				if (y) {								//if continueOrNot returns true then user will get to continue creating their schedule.
					continue;
				}
				else if (!y) {							//if continueOrNot returns false then system displays the schedule and exits this loop
					displaySchedule(schedule.currentEvents);
					break;
				}
				else {											
					cout << "\t\t\tYou did not enter a valid response please try again.\n";		//if continueOrNot does not come back as true or false
					y = continueOrNot();														//system will run continueOrNot again because user input was invalid.
				}					
			}
			cout << "Would you like to go back to the menu?: ";			//Allows user to go back to the menu. If not is selected then program will end.
			cin >> menuOpen;
		}
		else if (choice == 2) {											//If users choice is two then the system will call function myEdit
			myEdit(schedule.currentEvents);										//and allow user to edit the schedule.
			displaySchedule(schedule.currentEvents);								//After they are done function displaySchedule will be called.
			cout << "\t\t\tWould you like to go back to the menu?: ";
			cin >> menuOpen;											//Allows user to go back to the menu. If not is selected then program will end.
		}
		else {															//If users choice is the last available option which is three then the system
			myErase(schedule.currentEvents);										//will call function myErase to allow user to erase a vector element.
			displaySchedule(schedule.currentEvents);								//After they are done function displaySchedule will be called.
			cout << "\t\t\tWould you like to go back to the menu?: ";	
			cin >> menuOpen;											//Allows user to go back to the menu. If not is selected then program will end.
		}
	}
}