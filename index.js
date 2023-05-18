// Array
/*
let arr = [3,4,2,1,5]; // unsorted array

// iteration of array using loop
for(var i=0; i<arr.length; i++){
	document.write(arr[i]+" ");
}
document.write("<br><br>")
// Basic operations of array
// 1. Searching:
// 		a. Linear Search
// 		b. Binary Search		
// 2. Sorting
//		a. Bubble Sort
//---------------------------------------
// Linear Search

var key = parseInt(prompt("Enter the key to find...")) // String-->integer
var flag = false;

for(var i=0; i<arr.length; i++){
	if(arr[i] == key){
		flag = true; // key found
		break;
	}
}

if(flag == true)
	document.write("<br>Key "+key+" found at index "+i);
else
	document.write("<br>Key not found");
*/
//--------------------------------------------------------

// Binary Search: sorted array is required
let ar = [1,2,3,4,5];

for(var i=0; i<ar.length; i++){
	document.write(ar[i]+" ");
}

document.write("<br>Binary Search: <br>")

var low = 0;
var high = ar.length-1;
var flag = false;
var mid;
var key = parseInt(prompt("Enter the key to find:"))
var count=0;
while(low<=high){
	++count;
	mid = parseInt((low+high)/2);
	if(key==ar[mid]){
		flag = true;
		break;
	} else {
		if(key<ar[mid]){
			high = mid-1;
		} else if(key>ar[mid]){
			low = mid+1;
		}
	}
}

if(flag == true){
	document.write("<br>No of interation is "+ count);
	document.write("<br>Key found at index "+mid);
} else {
	document.write("<br>Key not found");
}