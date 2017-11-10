#include <iostream>
#include <cstdlib>
#include <cmath>
#include <ctime>

using namespace std;

int main()
{
    /*int a;
    while(a != 0){
        cout<<"Podaj a";
        cin>>a;
    }*/

    /*int i;
    for(i=1; i<11; i++){
        cout<<"i=";
        cout<<i<<" ";
    }
    cout<<endl;*/

    /*int i;
    for(i=1; i<=20; i++){
        if(i!=6){
            cout<<i<<" ";
        }else{
            cout<<"nie wyswietlam liczby";
        }
    }
    cout<<endl;*/

    /*for(int i=1; i<=30; i++){
        if(i%2==0){
           cout<<i<<" ";
        }
    }
    cout<<endl;*/

    /*for(int i=1; i<=30; i++){
        if(i%2!=0){
           cout<<i<<" ";
        }
    }
    cout<<endl;*/

    /*int i,j;
    for(i=1; i<=3; i++){
        for(j=1; j<=10; j++){
            cout<<"*";
        }
        cout<<endl;
    }*/

    //char symbol;
    /*string symbol;
    int i,j,wiersze,ilosc;
    cout<<"Podaj ilosc wierszy: ";
    cin>>wiersze;
    cout<<"Podaj symbol: ";
    cin>>symbol;
    cout<<"Ile symboli: ";
    cin>>ilosc;
    for(i=1; i<=wiersze; i++){
        for(j=1; j<=ilosc; j++){
            cout<<symbol<<" ";
        }
        cout<<endl;
    }*/

    int i,j;
    cout<<"Podaj poczatek: ";
    cin>>i;
    cout<<"Podaj koniec: ";
    cin>>j;
    cout<<endl;

    if(i<j){
        for(i; i<=j;i++){
            if(i%2==0)
                cout<<i<<" - l. parzysta"<<endl;
            else
                cout<<i<<" - l. nieparzysta"<<endl;
    }
    }else{
        cout<<"Bledne dane!";
    }
    cout<<endl;
//zad.dom.
/*u¿ytkownik poaje z klawiatury iloœæ liczb
 do wyœwietlania oraz przedzia³ z
jakiego liczby maj¹ byæ wylosowane*/
    system("pause");
    return 0;
}
