const position = document.documentElement;
position.addEventListener("mousemove", e=> {
    position.style.setProperty('--x',e.clientX + 'px')
})


// 
function showSidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
