#include <iostream>
#include <cstdlib>
#include <math.h>

using namespace std;

int main()
{
    double x=0, y=1;
    if (x) x++;
    else if (x+y) y*=x+3;
        else if (y) x-= y*3;
    x+=y;
    cout <<"x = "<<x<<"\ty = "<<y<<endl;

    return 0;
}
