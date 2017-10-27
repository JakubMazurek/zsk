#include <iostream>
#include <cstdlib>
#include <math.h>

using namespace std;

int main()
{
    int a, b, c, d;
    cout << "Podaj 4 liczby calkowite" << endl;
    cin >> a >> b >> c >> d;
    if (a<5 && b<5 && c<5 && d<5){
        cout << "TAK" << endl;
    }else{
        cout << "NIE" << endl;
    }
    system("pause");
    return 0;
}
