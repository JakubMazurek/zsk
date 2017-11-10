#include <iostream>
#include <cstdlib>
#include <cmath>
#include <ctime>

using namespace std;

int main(){

    int n = 12;

    for(int i = 0; i < 6; i++){
        if(n != 0){
            if(i != 5)
                cout << n << ", ";
            else
                cout << n;
        }else{
            n -= 4;
            cout << n << ", ";
        }
        n -= 4;


    }

return 0;
}


    //system("pause");


