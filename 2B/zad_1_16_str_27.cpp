#include <iostream>
#include <cstdlib>
#include <cmath>

using namespace std;

int main()
{
   int x;
   double y;
   cout << "Podaj x" << endl;
   cin >> x;
   if(x<1){
    y=2*x;
   }else{
   switch(x){
    case 1:
        y = -10;
        break;
    case 3:
        y = pow(x-1,4);
        break;
    case 6:
        y = sqrt(x-4);
        break;
    default:
        y = 0;
   }
   }
   cout << "Funkcja f(x) wynosi " << y << endl;

    system("pause");
    return 0;
}
