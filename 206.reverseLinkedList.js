/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head, counter=0) {

    // if(!head) return head;
    
    // if(!head.next) {
    //     if(counter === 0) return head
    //     head.next = head;
    //     return [head, head];
    // }
    
    // const [next, list1] = reverseList(head.next, counter+1)

    // head.next = null;
    // next.next = head;

    // if(counter === 0){
    //     return list1
    // } 
    // return [next.next, list1];

    if(!head || !head.next) return head;
    
    const list1 = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return list1;

};
