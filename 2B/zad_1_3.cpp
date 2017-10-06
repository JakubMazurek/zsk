#include <iostream>
#include <cstdlib>

using namespace std;

int main()
{
    double a, b, pole, obwod;
    cout<<"Podaj wartosci a i b"<<endl;
    cin>>a>>b;
    pole=a*b;
    obwod=2*(a+b);
    cout<<"Pole prostokata wynosi: "<<pole<<endl;
    cout<<"Obwod prostokata wynosi: "<<obwod<<endl;
    return 0;
}
