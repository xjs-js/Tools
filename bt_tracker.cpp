#include <iostream>
#include <string>   
#include <fstream>     // for ifstream
#include <cstdlib>     // for system

using namespace std;

int main(int argc, char *argv[])
{
    // Target address
    string website = "https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all.txt";
    string command = "wget " + website;
    // wget https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all.txt
    system(command.c_str());

    //  open a file
    ifstream input;
    input.open("trackers_all.txt");

    //  open fail
    if (input.fail()) {
        cout << "fail!!!!" << endl;
        return 0;
    }

    //  open success, format the strings
    string line;
    string result = "";
    while (getline(input, line)) {
        if (!line.empty())
            result += "," + line;
    }

    //  remove the first comma
    result = result.substr(1);

    cout << result << endl;

    input.close();
    return 0;
}
