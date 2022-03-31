#include <iostream>
#include <string>
#include <vector>

using std::string;
using std::vector;
using std::cin;
using std::cout;

struct drink {
public:
    string name = "error_in_assignment";
    string material = "error_in_assignment";
    double size = -1;
    bool sealable = false;
    int sugar = -1;
    int calories = -1;
    double caffeine = -1;

    void to_string() const{
        std::cout << "\nName: " << name << "\nMaterial: "<< material << "\nSize: "<< size << "\nSealable: "<< sealable
            << "\nSugar: "<< sugar << "\nCalories: "<< calories << "\nCaffeine: " << caffeine
                << "\n--------------------------------------------";
    }
};

std::vector<drink> allDrinks;

void setDrinkName(string &currName){
    cout << "\nSet the drink name: ";
    cin >> currName;
}
void setDrinkMaterial(string &currMaterial){
    cout << "\n- - - Plastic, Aluminum, Glass, etc - - -\n";
    cout << "Set the material of the container: ";
    cin >> currMaterial;
}
void setDrinkSize(double &size){
    cout << "Set the drink size (LITERS): ";
    cin >> size;
}
void setSealable(bool &seal){

    string currSeal;

    cout << "Can the drink be resealed? (y/n): ";
    cin >> currSeal;

    if(currSeal[0] == 'Y' || currSeal[0] == 'y')
        seal = true;
    else
        seal = false;

}
void setSugar(int &sugar){
    cout << "Set the sugar amount (GRAMS): ";
    cin >> sugar;
}
void setCalories(int &calories){
    cout << "Set the amount of calories: ";
    cin >> calories;
}
void setCaffeine(double &caffeine){
    cout << "Set the amount of caffeine: ";
    cin >> caffeine;
}
void setDrinkAttributes(drink &currDrink){
    setDrinkName(currDrink.name);
    setDrinkMaterial(currDrink.material);
    setDrinkSize(currDrink.size);
    setSealable(currDrink.sealable);
    setSugar(currDrink.sugar);
    setCalories(currDrink.calories);
    setCaffeine(currDrink.caffeine);
}


void print_drinks() {

    int index = 1;

    for(const auto& item : allDrinks){
        cout << "\nDrink #" << index;
        item.to_string();
        index++;
    }
}

void add_drink() {
    drink newDrink;
    allDrinks.push_back(newDrink);

    unsigned long currIndex = allDrinks.size()-1;

    setDrinkAttributes(allDrinks[currIndex]);
}

void change_sugar() {
    int index;

    cout << "\nWhat is the drink number you would like to edit the sugar content of? : ";
    cin >> index;

    setSugar(allDrinks[index - 1].sugar);
}

void change_calories() {
    int index;

    cout << "\nWhat is the drink number you would like to edit the calorie content of? : ";
    cin >> index;

    setCalories(allDrinks[index - 1].calories);
}