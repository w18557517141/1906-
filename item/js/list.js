axios({
    method : 'get',
    url :'http://10.9.46.236/item/php/list.php',
    data : {}
}).then(function(data){
    var olistbody = document.querySelector('.titlebody .listbody')
    var str =""
    for(var i =0;i<5;i++){
        str +=`
        <div class="listbody-1">
        <img src="${data[i].src}" alt="">
        <i>${data[i].i}</i>
        <h2>${data[i].h2}</h2>
        <p class="zi1">${data[i].zi1}</p>
    <p class="zi2"><span>${data[i].zi21}</span>${data[i].zi23}<span>${data[i].zi22}</span></p>
        <p class="zi3">${data[i].zi3}</p>
        <div>${data[i].div}</div>
    </div>
        `
    } 
    olistbody.innerHTML = str
}).catch(function(info){
    console.log(info)
})