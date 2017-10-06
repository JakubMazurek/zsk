#include <iostream>
#include <cstdlib>

using namespace std;

int main()
{
    double a, b, x;
    cout<<"Podaj wartosc a"<<endl;
    cin>>a;
    cout<<"Podaj wartosc b"<<endl;
    cin>>b;
    if (a!=0){
        x=-b/a;
        cout<<"x wynosi: "<<x<<endl;
    }else if (b==0){

            cout<<"Nieskonczenie wiele rozwiazan"<<endl;
        }
     else{
            cout<<"Rownanie jest sprzeczne"<<endl;
        }

    return 0;
}
