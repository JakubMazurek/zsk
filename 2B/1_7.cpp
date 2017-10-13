#include <iostream>
#include <cstdlib>
#include <math.h>

using namespace std;

int main()
{
  int a,b,c,najwieksza;
  cout<<"Podaj a: ";
  cin>>a;
  cout<<"Podaj b: ";
  cin>>b;
  cout<<"Podaj c: ";
  cin>>c;
  najwieksza=a;
  if(b>najwieksza){
    najwieksza=b;
  }
  if (c>najwieksza){
    najwieksza=c;
  }

  cout<<endl<<"Najwieksza liczba wynosi: "<<najwieksza;




    return 0;
}
