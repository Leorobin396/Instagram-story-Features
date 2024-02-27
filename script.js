var arr = [{
    dp:"https://images.unsplash.com/photo-1682687982183-c2937a74257c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stories:"https://media.istockphoto.com/id/1272710044/photo/performance-muscle-car.jpg?s=1024x1024&w=is&k=20&c=c8ArlE6to9YAZ5tXjImbJrVcVNrAAS9BF4govg586B4="},
    {dp:"https://images.unsplash.com/photo-1706999131259-33d9417c7524?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stories:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1659737419997-10be04c876c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stories:"https://plus.unsplash.com/premium_photo-1706626270683-96ce29b74b6d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1706394765561-59f5e40bece0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
    stories:"https://plus.unsplash.com/premium_photo-1673002094407-a72547fa791a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1707336669830-ece4474e77a8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stories:"https://images.unsplash.com/photo-1705669230343-f88115998d65?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];


var stories = document.querySelector("#stories")
var clutter = "";
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt=""> 
</div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].stories})`;

    // document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
    // console.log(arr[dets.target.id].story)
})