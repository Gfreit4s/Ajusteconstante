function sensor() {
    var pegar1 = document.getElementById('n1')
    var pegar2 = document.getElementById('n2')
    var pegar3 = document.getElementById('n3')
    var res1 = document.getElementById('res1')
    var n1 = Number(pegar1.value)
    var n2 = Number(pegar2.value)
    var n3 = Number(pegar3.value)
    var s = n1 / n2 * n3
    var int = Number.parseInt(s)
    res1.innerHTML = s
}


function can() {
    var pegar1 = document.getElementById('can1')
    var pegar2 = document.getElementById('can2')
    var pegar3 = document.getElementById('can3')
    var res2 = document.getElementById('res2')
    var can1 = Number(pegar1.value)
    var can2 = Number(pegar2.value)
    var can3 = Number(pegar3.value)
    var c = can1 * can2 / can3
    var int = Number.parseInt(c)
    res2.innerHTML = c
}