#include <iostream>
#include <cstdlib>
#include <math.h>

using namespace std;

int main()
{
    double a, b, c, delta, x, x1, x2;
    cout<<"Podaj a";
    cin>>a;
    cout<<"Podaj b";
    cin>>b;
    cout<<"Podaj c";
    cin>>c;
    if (a==0){
        cout<<"To nie jest równanie kwadratowe";
    }else {
        delta=b*b-4*a*c;
        if (delta < 0){
            cout<<"Równanie nie ma pierwiastków";
        }else {
            if (delta==0){
               x=-b/(2*a);
               cout<<"x= "<<x<<endl;
            }else{
                x1=(-b-sqrt(delta))/(2*a);
                x2=(-b+sqrt(delta))/(2*a);
                cout<<"x1= "<<x1<<endl;
                cout<<"x2= "<<x2<<endl;
            }
        }
    }
    return 0;
}
