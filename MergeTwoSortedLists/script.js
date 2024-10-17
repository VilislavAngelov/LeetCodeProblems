/**
 * This function merges two sorted linked lists into one sorted linked list.
 * It takes two linked lists (list1 and list2) and returns a new merged list.
 * The merged list contains all the nodes from both input lists, sorted in ascending order.
 * 
 * @param {ListNode} list1 - The first sorted linked list.
 * @param {ListNode} list2 - The second sorted linked list.
 * @return {ListNode} - The head node of the merged, sorted linked list.
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node and will be skipped when we return the result
    let mergedList = new ListNode();

    // 'curr' is a pointer that will help us build the merged list.
    let curr = mergedList;

    // Loop until we have processed all nodes in both list1 and list2.
    while (list1 !== null && list2 !== null) {
        // Compare the values of the current nodes and add the smaller one to the merged list.
        if (list1.val < list2.val) {
            // If list1's value is smaller, link list1's current node to 'curr.next'.
            curr.next = list1;

            // Move list1 to the next node since we've added the current one to the merged list.
            list1 = list1.next;
        } else {
            // If list2's value is smaller or equal, link list2's current node to 'curr.next'.
            curr.next = list2;

            // Move list2 to the next node since we've added the current one to the merged list.
            list2 = list2.next;
        }

        // Move the 'curr' pointer forward to the node we just added.
        curr = curr.next;
    }

    // Once one of the lists is fully processed, link the remaining nodes of the other list to the merged list.
    // If list1 is not null, it means it still has nodes left, so they will be added. Otherwise, list2 will be added (if not null).
    curr.next = list1 || list2;

    // Return the head of the merged list, which is 'mergedList.next'.
    // We skip the dummy node ('mergedList') and return the actual start of the merged list.
    return mergedList.next;
};
