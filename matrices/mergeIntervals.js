// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

function mergeIntervals(intervals) {
  if (!intervals.length) return intervals // if no matrix
  intervals.sort((a, b) => a[0] - b[0]) // sort the array
  var prev = intervals[0] //[1,3]
  var res = [prev] // [[1,3]]
  for (var curr of intervals) { // for each item in the matrix
    if (curr[0] <= prev[1]) { // if the next item fits inside of previous
      prev[1] = Math.max(prev[1], curr[1]) // change the range to be the max between the two
    } else {
      res.push(curr) // push the current as it does not overlap
      prev = curr // update the starting point to the next item in the array that doesn't overlap.
    }
  }
  return res // Why are things so much easier after you see the code? 
}