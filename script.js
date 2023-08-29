var upper = document.querySelector(".upper");
var istory = document.querySelector(".story");
var estory = document.querySelector(".estory")

var arr = [
  {
    dp: "https://images.unsplash.com/photo-1693202800776-43ab767b63ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://plus.unsplash.com/premium_photo-1692951205720-49f0832fcc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1692675369238-1f11d9a03e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1692964930171-1abe615d654e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1692527067684-7feb3826fe74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1693000911292-e0902cefb402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1692651955510-8b334577cff7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1692552061187-d89138afe30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1687544249497-d70f14b3fc9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://unsplash.com/photos/a-lightning-bolt-hitting-through-a-dark-sky-dyiV-cI9aD4https://unsplash.com/photos/a-lightning-bolt-hitting-through-a-dark-sky-dyiV-cI9aD4",
  },
  {
    dp: "https://images.unsplash.com/photo-1692204214490-1f0ae30bc927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1692675367622-8986dc700244?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1692394950102-34e14fafa12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1692460199516-d5c7854a83ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1683816354896-47abbb2b0015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    story: "https://images.unsplash.com/photo-1692120424000-73dad4ed7a7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

var clutter = "";
arr.forEach(function (elem, idx) {
    clutter += `<div " class="story"><img id="${idx}" src="${elem.dp}" alt=""></div>`;
});
upper.innerHTML = clutter;

upper.addEventListener("click",function(dets){
    console.log(dets.target.id)
    estory.style.display = "block"
    estory.style.backgroundImage =`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        estory.style.display = "none"
    }, 2000);
})

