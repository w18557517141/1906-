axios({
    method: 'get',
    url: 'http://10.9.46.236/item/php/shop.php',
    data: {}
}).then(function (data) {
    if (localStorage.getItem('data1')) {
        var obj = JSON.parse(localStorage.getItem('data1'));
        var olist = document.querySelector('#list');
        var str = ""
        for (i = 0; i < obj.length; i++) {
            for (var k = 0; k < data.length; k++) {
                if (obj[i].id == data[k].id){
                    str = `
                    <tr data-id =${data[k].id}>
                        <td><input type="checkbox" class="btn"><img src="${data[k].img1}" class="smallPic"></td>
                        <td class="danjia">${data[k].em}</td>
                        <td>
                            <button class="jian">-</button>
                            <input type="text" value="${obj[i].num}" class="num">
                            <button class="add">+</button>
                        </td>
                        <td class="zongjia">${data[k].em * obj[i].num} </td>
                        <td class="del">删除</td>
                    </tr>
                    `
                    olist.innerHTML += str
                    var onum = document.querySelector('.num');
                    var oadd = document.querySelector('.add')
                    var ojian = document.querySelector('.jian')
                    var id2 = oadd.parentNode.parentNode.getAttribute('data-id')
                    var count = onum.value
                    oadd.addEventListener('click',function(e){
                        e =e||event;
                        var k = JSON.parse(localStorage.data1)
                        for(var i =0;i<k.length;i++){
                            if(k[i].id = id2){
                                onum.value ++
                                // k[i].num=onum.value
                                // JSON.parse(localStorage.data1)[0].num
                                // console.log(localStorage.valueOf())
                                // localStorage.removeItem('num')
                                localStorage.setItem('data1',JSON.stringify([{id:id2,num:onum.value}]));
                                var price = ($('.danjia').text() * onum.value)
                                $(this).parent().next().text(price);
                            }
                        }
                    })

                    ojian.addEventListener('click',function(e){
                        e= e||event
                        if(onum.value == 1){
                            onum.value ==1
                        }else{
                            onum.value--
                            localStorage.removeItem('num')
                            localStorage.setItem('data1',JSON.stringify([{id:id2,num:onum.value}]));
                        };
                        var price = ($('.danjia').text() * onum.value)
                        $(this).parent().next().text(price)
                    })
                    // $('#list').on('click','.del',function(){
                    //     $(this).parent().remove()
                    // })
                }
            }
        }
    }
})
