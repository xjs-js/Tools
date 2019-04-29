#include <iostream>
#include <string>
#include <fstream>
#include <cstdlib>

using namespace std;

int main(int argc, char *argv[])
{
    string website = "https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all.txt";
    string command = "wget " + website;
    system(command.c_str());

    ifstream input;
    input.open("trackers_all.txt");

    //  open fails
    if (input.fail()) {
        cout << "open file fail!!!!" << endl;
        return 0;
    }
    //  open success
    string line;
    string result = "";
    while (getline(input, line)) {
        if (!line.empty())
            result += "," + line;
    }

    result = result.substr(1);

    cout << result << endl;

    input.close();
    return 0;
}
