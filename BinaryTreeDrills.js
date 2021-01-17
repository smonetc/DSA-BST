const BinarySearchTree =  require('./binarytree')

//Create a BST class
function main() {
   let bst = new BinarySearchTree();
   let values = [3, 1, 4, 6, 9, 2, 5, 7];
   for (let value of values) {
     bst.insert(value, null);
   }
   console.log(bst);
 }

 main()

 //What does this program do?
function tree(t){
   //if empty return 0
   if(!t){
       return 0;
   }
   //sums up all the nodes of the tree
   return tree(t.left) + t.value + tree(t.right)
}

  // Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.
  
  function isItBST(bst) {
   if (!bst) {
     return null;
     // no tree
   }
   if (bst.left === null && bst.right === null) {
     return null; //there are no children...does that make it a binary search tree? if so, return true;
   }
   if (bst.left !== null && bst.right === null) {
     return isItBST(t.left);
   }
   if (bst.right !== null && bst.left === null) {
     return isItBST(bst.right);
   }
   if (bst.left !== null && bst.right !== null) {
     if (bst.left.value < bst.right.value) { //if the left node value is less than the right node value
       return isItBST(bst.left) && isItBST(bst.right);
     } else {
       return false;
     }
   }
 }

// ^^ this answer I feel is almost correct needs tweaking. 


//Are they the same BSTs? 
//use example number sequences: 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 
//I believe time complexity is Logarithmic Time O(log(n))
function identicalBST(arrA, arrB) {
   // will not work if numbers are sorted as strings!
   arrA.sort();
   arrB.sort();
   if (arrA.length !== arrB.length) {
     // if the lengths of the arrays are not equal, then they can't be identical
     return false;
   }
   for (let i = 0; i < arrA.length; i++) {
     //I believe if I iterate over each item in arrA and compare that item with the corresponding item in arrB 
     if (arrA[i] !== arrB[i]) {
       return false;
     } else {
       return true;
     }
   }
 }