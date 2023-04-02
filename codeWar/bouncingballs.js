function bouncingBall(h,  bounce,  window) {
    // your code here
    let answer = 0
    if(h<=0 || (bounce <= 0 || bounce >= 1) || window >= h) return -1
    for(let i = 1; h>window; i++){
      h = h*bounce
      answer++
    }
    return answer*2-1
  }