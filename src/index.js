function longestIncreasingSubsequence(arr) {
    if (arr.length === 0) return 0;

    let dp = new Array(arr.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

console.log(longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])); // 6
console.log(longestIncreasingSubsequence([3, 4, -1, 0, 6, 2, 3])); // 4
console.log(longestIncreasingSubsequence([])); // 0
console.log(longestIncreasingSubsequence([5])); // 1
console.log(longestIncreasingSubsequence([1, 2, 3, 4, 5])); // 5
