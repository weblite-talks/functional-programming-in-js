#include<stdio.h>


int main()
{
   int n = 20, c;
   unsigned long long int temp;


   for ( c = 1 ; c <= n ; c++ )
   {
      if ( c <= 1 )
         temp = c;
      else
      {
         temp = temp * c;
      }
   }


   printf("%llu\n",temp);
}
