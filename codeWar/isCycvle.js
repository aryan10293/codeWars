var hasCycle = function(head) {
    let fast = head
    let slow = head
    while(fast && fast.next){
         fast = fast.next.next
         slow = slow.next
         if(slow === fast) return true
    }
    return false
};

// ionn really get the question to this problem but the code isnt that bas to implement if i see it in a interview
