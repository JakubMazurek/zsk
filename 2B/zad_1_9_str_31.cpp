#include <iostream>
#include <cstdlib>
#include <cmath>
#include <ctime>

using namespace std;

int main()
{
    int s=0, a=0;

    do{
        s+=a;
        cout<<"Podaj a: ";
        cin>>a;
    }
        while(a<=50);{
    }
    cout<<"s wynosi: "<<s<<endl;

    //system("pause");
    return 0;
}
