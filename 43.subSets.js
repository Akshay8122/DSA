


 function subSets(nums) {
    let res = [];
    
    const backtrack = (start,currentSubset) => {
        res.push([...currentSubset]);

        for(let i = start; i < nums.length; i++) {
            currentSubset.push(nums[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }
    backtrack(0,[]);
    return res;
 }


 const nums = [1,2,3];

 const nums1 = [0];

 console.log(subSets(nums));

 console.log(subSets(nums1));
 