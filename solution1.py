

def merge(nums1, m ,nums2, n):

    for p in range(m+n-1, -1, -1):
        if m==0 or (n>0 and nums2[n-1]>=nums1[m-1]):
            nums1[p] = nums2[n-1]
            n -=1 
        else:
            nums1[p] = nums1[m-1]
            m-=1
    return nums1

print (merge([1, 2, 3, 0, 0, 0],3,[2,5,6],3))