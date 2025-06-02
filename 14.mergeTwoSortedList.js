  
//    You are given the heads of two sorted linked lists list1 and list2.

//    Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
   
//    Return the head of the merged linked list.
   
    
   
//    Example 1:
   
   
//    Input: list1 = [1,2,4], list2 = [1,3,4]
//    Output: [1,1,2,3,4,4]
//    Example 2:
   
//    Input: list1 = [], list2 = []
//    Output: []
//    Example 3:
   
//    Input: list1 = [], list2 = [0]
//    Output: [0]
   

function NodeList(val,next=null){
    this.val = val;
    this.next = next;
}

function arrToList(arr){
    if(!arr.length) return null;

    let head = new NodeList(arr[0]);
    let current=head;
    for(let i=1; i<arr.length; i++){
        current.next = new NodeList(arr[i]);
        current = current.next;
    }
    return head;
}

function updatedArray(head){
    let result = [];
    while(head !== null){
        result.push(head.val);
        head = head.next;
    }
    return result;
}

function mergeTwoSortedLists(list1,list2){
    if(list1 === null) return list2;
    if(list2 === null) return list1;

    if(list1.val < list2.val){
        list1.next = new mergeTwoSortedLists(list1.next,list2);
        return list1;
    }else{
        list2.next = new mergeTwoSortedLists(list1,list2.next);
        return list2;
    }
}


let list1 = arrToList([]);
let list2 = arrToList([]);
let num = mergeTwoSortedLists(list1,list2);
console.log(updatedArray(num));

