#include <iostream>
#include <cstdlib>
#include <cmath>
#include <ctime>

using namespace std;

int main()
{
    int n, s, i;
    cout<<"Podaj n: ";
    cin>>n;
    s=1;
    i=3;
    while(i<=n+2){
        s=s*i;
        i=i+1;
    }
    cout<<s<<endl;

    system("pause");
    return 0;
}
