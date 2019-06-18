axios({
    method :'get',
    url : 'http://10.9.46.236/item/php/fylist8.php',
    data : {}
}).then(function(data){
    var obody = document.querySelector('.bodyone .listbody7')
    var str = ""
    for(var i = 0; i<18;i++){
        str += `
        <div class="listbody-1">
            <img src="${data[i].scr}" alt="">
            <h1>${data[i].h1}</h1>
            <h2>${data[i].h2}</h2>
            <p><span>${data[i].span}</span>${data[i].p}<b>${data[i].b}</b></p>
            <div class="zi">${data[i].div}</div>
        </div>
        `
    }
    obody.innerHTML =str
}).catch(function(info){
    console.log(info)
})