var isPalindrome = function(head) {
    let currently = head
        let prev = null;
        let current = head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

    while(currently !== null && prev !== null){
        if( currently.val !== prev.val) return false
        currently = currently.next
        prev = prev.next
    }
    return true
};