var Agora = new Date()

var AgoraDia = Agora.getDate()
var AgoraMes = Agora.getMonth() + 1 
var AgoraAno = Agora.getFullYear()
var AgoraHoras = Agora.getHours()
var AgoraMinutos = Agora.getMinutes()

var Hoje = document.getElementById('hoje')

Hoje.innerHTML = `<p> Hoje Dia ${AgoraDia} Mes ${AgoraMes} do Ano ${AgoraAno} as ${AgoraHoras} e  ${AgoraMinutos} </p>`

function Verificar() {
    var AniversarioDia = Number(14)
    var AniversarioMes = Number(9)

    var AgoraJuntos = AgoraDia + AgoraMes
    var AniversarioJutos = AniversarioDia + AniversarioMes

    var sub  = AgoraJuntos - AniversarioJutos

    var res = document.getElementById('resposta')

    if (sub == 0 ) {
       

        res.innerHTML = '<h1> SIM !!</h1>'

        var foto = document.getElementById('foto')

        foto.innerHTML = '<img src="img/aniversario.jpeg" alt="">'
    }

    else{
         res.innerHTML = '<h1> NẪO !!</h1>'
    
    }
}
