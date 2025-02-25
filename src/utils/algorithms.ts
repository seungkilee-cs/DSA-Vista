interface Algorithm {
    name: string;
    code: string;
    language: string;
    sampleInput: any;
    sampleOutput: any;
    explanation: string;
  }
  
  export const algorithms: { [key: string]: Algorithm } = {
    binarySearch: {
      name: "Binary Search",
      code: `
  def binary_search(arr, target):
      left, right = 0, len(arr) - 1
      while left <= right:
          mid = (left + right) // 2
          if arr[mid] == target:
              return mid
          elif arr[mid] < target:
              left = mid + 1
          else:
              right = mid - 1
      return -1
      `,
      language: "python",
      sampleInput: [1, 3, 5, 7, 9, 11, 13, 15],
      sampleOutput: 3,
      explanation: `
  Binary search is an efficient algorithm for searching a sorted array by repeatedly dividing the search interval in half. 
  
  Key steps:
  1. Compare the target value to the middle element of the array.
  2. If they are equal, the search is successful.
  3. If the target is less than the middle element, repeat the search on the lower half.
  4. If the target is greater, repeat the search on the upper half.
  5. Continue until the target is found or it's clear the target is not in the array.
  
  Time complexity: O(log n)
      `
    },
    // Add other algorithms here
  };
  