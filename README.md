# SortingAlgorithms
Specifications for this assignment: https://gist.github.com/jaywon/7b03aa19e53852d090fe

Viewing the Data Visualization

    http-server
    
    navigate into website 
    
#Bubble Sort
Bubble Sort compares two indexes and swaps them if the one closer to the beginning of the array is greater than the one closest to the end of the array. This continues until no swaps are performed through an interation of the array.

Best Case Scenario for this type of sorting method would be that all the indexes of the array are in order. 

>O(n)

Worst Case Scenario would be that all the indexes of the array are completely in the opposite order.

>O(n^2)


    Declare a function.
      Takes the array to be sorted as a parameter.
  
      Initiate an Array.
    
      Loop through the Array.
    
       IF the current index is less than next index.
       
         Swap the values of the indexes.
         
         break out the loop IF
         
          index is NaN OR no swaps are performed.
    End function.
  
#Insertion Sort
Insertion sort inserts the values of the original array into itself, putting it in its right place.

Best Case for this type of sorting method would be that it is in order.

>O(n)

Worst Case would be that it is in the exact opposite order.

>O(n^2)

    Declare a function.
      Takes the array to be sorted as a parameter.
  
      Initiate an Array with its value being the first value of the array passed in, shifted off.
        
        Loop through the array, with its ending condition being the original length of the array passed in.
          
          IF the value of the last index of the initiated Array is 
          
            Less
                
              Push the value of the first index of the original array to the initiated Array, shifting it off.
                
            Greater Or Equal
            
              Find the index in the initiated Array where it is greater than the value of the index that is before it, but lesser than the one ahead of it, and splice it in while removing it from the original array.
              
        Continue loop until ending condition is met.
      End function.
  
#Merge Sort
Merge Sort splits the original array into two separate arrays until there is only one element in the arrays, and puts them back into a new Array while comparing them to each other. 

Best Case: None.

>O(n log(n))

Worst Case: None or that would be that there are too many indexes in the array passed in, taking a long time to reach only one index.

>O(n log(n))

    Declare two functions, one will split the values, and the other will compare them while merging them together.
    
      Splitting Function
      
        Takes the array to be sorted as a parameter.
      
        Declare a 'Left' and 'Right' variables as arrays.
      
        Put the first half of numbers of the array passed in into the 'Left' array.
        
          reassign the variable 'Left' to equal the Splitting function, passing in itself as a parameter
        
        Put the second half of numbers of the array passed in into the 'Right' array.
        
          reassign the variable 'Right' to equal the Splitting function, passing in itself as a parameter
        
        Return a call of the merging function, passing in the 'Left' and 'Right' variables as parameters.
      End function.
      
      Merging Function
        
        Takes two values as parameters, 'A' and 'B', these values will be arrays.
      
        Create a temporary variable as an array.
          
          Loop through parameters 'A' and 'B', with the ending condition being that both arrays are empty.
          
            IF the first index of 'A' is greater than the first index of 'B'
            
              Push the first value of 'B' into the temporary variable, shifting it off.
              
            ELSE 
              
              Push the first value of 'A' into the temporary variable, shifting it off.
        
          End loop if ending conditions are met.
          
        Loop through parameter 'A' with the ending condition being that 'A' is empty.
        
          Push the first value of 'A' into the temporary variable, shifting it off.
          
        End loop if ending conditions are met.
        
        Loop through parameter 'B' with the ending condition being that 'B' is empty.
        
          Push the first value of 'B' into the temporary variable, shifting it off.
          
        End loop if ending conditions are met.
        
        Return the temporary variable.
      End function.
    
#QuickSort
Quick Sort creates a 'Pivot' point, and splits the original array into two arrays, with one being all the numbers less than the pivot point, and the other being all the numbers greater than it, and returns them if arrays have only one element.

Best Case for this type of sorting method would be that the 'Pivot' point would be exactly in the middle of the array to be split every time.

>O(n log(n))

Worst Case would be that the pivot would always be the highest or lowest value consistently in the array, decrementing the array by only one value each time.

>O(n^2)

    Declare a function.
      Takes the array to be sorted as a parameter.
      
        IF the array passed in has less than or only one element.
        
          Return the array
      
        Create a 'Pivot' point, shifting or popping it off the original array.
        
        Create a 'Left' and a 'Right' variable.
        
        In the 'Left' variable
        
          Put all the values of the indexes smaller or equal to the pivot point.
          
        In the 'Right' variable
        
          Put all the values of the indexes greater than the pivot point.
          
        Return 
        
          A call to itself, with 'Left' passed in as a parameter
          
            Added to
            
          the 'Pivot' point
          
            Added to
            
          A call to itself, with 'Right' passed in as a parameter.
    End function.
    
#Selection Sort
Selection Sort takes the smallest value on the original array and pushes it into a new Array, and continues looping until there are no values left in the original array.

Best Case: None. It must iterate through all the indexes in the original array.

>O(n^2)

Worst Case: None. It must iterate through all the inedxes in the original array.

>O(n^2)

    Declare a function.
      Takes the array to be sorted as a parameter.
      
      Initiate a new Array.
      
      Loop through the array passed in, with the ending condition being that it is empty.
      
        Get the smallest value in that array and push it to the new Array, removing it from the original array.
        
      Continue loop until ending condition is met.
    End function.
