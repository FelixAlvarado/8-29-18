var singleNonDuplicate = function(nums) {
    console.log(nums);
    let mid = Math.floor(nums.length / 2);
    console.log('the mid it', mid);
    let current = nums[mid];
    let prev = nums[mid - 1];
    let next = nums[mid + 1];
    
    if (nums.length === 3) {
        if(current === prev){
            return next;
        }else{
            return prev;
        }
    }

    if((prev != current && next != current) || nums.length === 1){
        return current;
    }else if ((mid % 2 === 0 && current === next) || (mid % 2 != 0 && current === prev)){
        let x = mid % 2 === 0 ? 2 : 1;
        return singleNonDuplicate(nums.slice(mid + x, nums.length));
    } else{
         let x = mid % 2 === 0 ? 1 :0;
        return singleNonDuplicate(nums.slice(0,mid - x));
    }
};