#include<stdio.h>


int main()
{
   int n = 10;
   unsigned long long int first = 0, second = 1, next, c;


   for ( c = 0 ; c < n ; c++ )
   {
      if ( c <= 1 )
         next = c;
      else
      {
         next = first + second;
         first = second;
         second = next;
      }
   }


   printf("%llu\n",next);
}
