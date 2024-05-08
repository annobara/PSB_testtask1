const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

function merge(nums1, m, nums2, n) {
    let pointer = n + m - 1
    let i1 = m - 1
    let i2 = n - 1
    while (i1 >= 0 && i2 >= 0) {
        if (nums1[i1] > nums2[i2]) {
            nums1[pointer] = nums1[i1];
            i1--;
        } else {
            nums1[pointer] = nums2[i2];
            i2--;
        }
        pointer--;
    }
    while (i2 >= 0) {
        nums1[pointer] = nums2[i2];
        i2--;
        pointer--;
    }
}
merge(nums1, m, nums2, n)
alert(nums1)