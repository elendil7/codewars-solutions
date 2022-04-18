def stray(nums):
    arr = sorted(nums)
    if(arr[0] == arr[1]): return arr[len(arr)-1]
    else: return arr[0]
