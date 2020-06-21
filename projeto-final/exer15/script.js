function verificar() {
    var data = new Date();
    var ano = data.getUTCFullYear();
    var fano = window.document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente! ');
    } else {
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            alert(idade);
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'childh.jpg');
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'youngh.jpg');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'oldh.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'sr.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bbm.jpg');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'childf.jpg');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'youngf.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'sra.jpg');
            }

        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}