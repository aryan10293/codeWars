def missing_no(nums):
    nums.sort()
    print(nums)
    for i in range(len(nums)):
        print(i+1, len(nums))
        if i+1 == len(nums):
            if nums[i] + 1 == 101:
                return 0
            else:
                return nums[i] + 1
        next_num = nums[i+1]
        if next_num != nums[i] + 1:
            return nums[i] + 1

    #  Your code her
