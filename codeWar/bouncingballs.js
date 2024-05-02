function bouncingBall(h, bounce, window) {
  // your code here
  let answer = 0
  if (h <= 0 || (bounce <= 0 || bounce >= 1) || window >= h) return -1
  for (let i = 1; h > window; i++) {
    h = h * bounce
    answer++
  }
  return answer * 2 - 1
}

function bouncingBall(h, bounce, window) {
  // your code here
  let count = 0
  if (h <= 0 || (bounce <= 0 || bounce >= 1) || window >= h) return -1
  while (h > window) {
    count++
    h = h * .66
    if (h > window) count++
  }
  return count
}
///lwnewrepgrob[kp]l[fewretinpgo4[kpeo