#include <iostream>
#include <cstdlib>
#include <cmath>
#include <ctime>

using namespace std;

int main()
{
   int x,p,q;
   double y;
   p=-5;
   q=10;
   srand(time(NULL));
   x = p + rand()%(q-p+1);

   if (x<7){
    y = pow(x,3) + 1;
   }else{
    switch (x){
        case 7:
            y = cos(x - 1);
            break;
        case 9:
            y = sqrt(3*x);
            break;
        default:
            y = -8 * x;
   }
   }

   cout << "Funkcja f(x) wynosi " << y << endl;

    system("pause");
    return 0;
}
