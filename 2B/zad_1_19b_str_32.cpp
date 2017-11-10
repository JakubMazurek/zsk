#include <iostream>
#include <cstdlib>
#include <cmath>
#include <ctime>

using namespace std;

int main()
{
    int n=-4, i=1;

    for(i; i<=5; i++){
        if(n!=2 && n!=8){
            cout<<n<<"\n";
        }else{
            n+=3;
            cout<<n<<endl;
        }
        n+=3;
    }

return 0;
}


    //system("pause");


