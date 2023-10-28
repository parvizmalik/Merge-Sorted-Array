const merge = (nums1, m, nums2, n) => {
    let p1 = m - 1, p2 = n - 1, p = m + n - 1;

    while (p1 >= 0 && p2 >= 0) {
        nums1[p--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
    }

    while (p2 >= 0) {
        nums1[p--] = nums2[p2--];
    }
};

// Test
const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);  // [1,2,2,3,5,6]
