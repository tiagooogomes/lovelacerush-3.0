const carrinho =  {
    "popular": {
        "maxima" : {"min": 180, "max": 200},
        "minima" : {"min": 110, "max": 130},
        "derrapagem": {"min": 1 - 0.03, "max": 1 - 0.04}
    },
    "esporte": {
        "maxima" : {"min": 195, "max": 215}, 
        "minima": {"min": 125, "max": 145}, 
        "derrapagem": {"min": 1 - 0.02, "max": 1 - 0.03}
    },
    "super" : {
        "maxima": {"min": 210, "max": 230}, 
        "minima": {"min": 140, "max": 160}, 
        "derrapagem": {"min": 1 - 0.01, "max": 1 - 0.0175}
    }
}

const carRunning = [
    {
        "jogador": "pedro",
        "carro": {"velMin": 0, "velMax": 0, "skid": 0},
        "pontos": 0,
        "nivel": 0,
        "nivelHTML": 0
    },
    {   
        "jogador": "juca",
        "carro": {"velMin": 0, "velMax": 0, "skid": 0},
        "pontos": 0,
        "nivel": 0,
        "nivelHTML": 0
    },
    {
        "jogador": "edna",
        "carro": {"velMin": 0, "velMax": 0, "skid": 0},
        "pontos": 0,
        "nivel": 0,
        "nivelHTML": 0
    }
]

let pedroPrimeiro = false;
let pedroSegundo = false;
let pedroTerceiro = false;
let jucaPrimeiro = false;
let jucaSegundo = false;
let jucaTerceiro = false;
let ednaPrimeiro = false;
let ednaSegundo = false;
let ednaTerceiro = false;
let modo = "";
console.log(pedroPrimeiro);
console.log(pedroSegundo);
console.log(pedroTerceiro);


function preencherArray(){
    const carrinhoPedro = sorteioCarrinhos();
    const carrinhoJuca = sorteioCarrinhos();
    const carrinhoEdna = sorteioCarrinhos();

    carRunning[0].carro.velMin = carrinhoPedro[0];
    carRunning[0].carro.velMax = carrinhoPedro[1];
    carRunning[0].carro.skid = carrinhoPedro[2];
    carRunning[1].carro.velMin = carrinhoJuca[0];
    carRunning[1].carro.velMax = carrinhoJuca[1];
    carRunning[1].carro.skid = carrinhoJuca[2];
    carRunning[2].carro.velMin = carrinhoEdna[0];
    carRunning[2].carro.velMax = carrinhoEdna[1];
    carRunning[2].carro.skid = carrinhoEdna[2];
}



function teste(item, index){
    if(index === 0){
        if(pedroPrimeiro == true){
            if(modo == "rapida"){
                carRunning[0].pontos += 200 
            }else if(modo == "premio"){
                carRunning[0].pontos += 220 
            }else{
                carRunning[0].pontos += 250 
            }
        }else if(pedroSegundo == true){
            if(modo == "rapida"){
                carRunning[0].pontos += 120 
            }else if(modo == "premio"){
                carRunning[0].pontos += 130 
            }else{
                carRunning[0].pontos += 150 
            }
        }else{
            if(modo == "rapida"){
                carRunning[0].pontos += 50 
            }else if(modo == "premio"){
                carRunning[0].pontos += 75
            }else{
                carRunning[0].pontos += 90
            }
        }
    }

    if(index === 1){
        if(jucaPrimeiro == true){
            if(modo == "rapida"){
                carRunning[1].pontos += 200 
            }else if(modo == "premio"){
                carRunning[1].pontos += 220 
            }else{
                carRunning[1].pontos += 250 
            }
        }else if(jucaSegundo == true){
            if(modo == "rapida"){
                carRunning[1].pontos += 120 
            }else if(modo == "premio"){
                carRunning[1].pontos += 130 
            }else{
                carRunning[1].pontos += 150 
            }
        }else{
            if(modo == "rapida"){
                carRunning[1].pontos += 50 
            }else if(modo == "premio"){
                carRunning[1].pontos += 75
            }else{
                carRunning[1].pontos += 90
            }
        }
    }

    if(index === 2){
        if(ednaPrimeiro == true){
            if(modo == "rapida"){
                carRunning[2].pontos += 200 
            }else if(modo == "premio"){
                carRunning[2].pontos += 220 
            }else{
                carRunning[2].pontos += 250 
            }
        }else if(ednaSegundo == true){
            if(modo == "rapida"){
                carRunning[2].pontos += 120 
            }else if(modo == "premio"){
                carRunning[2].pontos += 130 
            }else{
                carRunning[2].pontos += 150 
            }
        }else{
            if(modo == "rapida"){
                carRunning[2].pontos += 50 
            }else if(modo == "premio"){
                carRunning[2].pontos += 75
            }else{
                carRunning[2].pontos += 90
            }
        }
    }  
}

function calcularNiveis(){

    let pontosPedro = carRunning[0].pontos;
    let pontosJuca = carRunning[1].pontos;
    let pontosEdna = carRunning[2].pontos;
    let nivelPedro = carRunning[0].nivel;

    if(pontosPedro >= 450 && pontosPedro < 900){
        carRunning[0].nivel = 0.01;
        carRunning[0].nivelHTML = 1
    }else if(pontosPedro >= 900 && pontosPedro < 1350){
        carRunning[0].nivel = 0.02;
        carRunning[0].nivelHTML = 2
    }else if(pontosPedro >= 1350 && pontosPedro < 1800){
        carRunning[0].nivel = 0.03
        carRunning[0].nivelHTML = 3
    }else if(pontosPedro >= 1800 && pontosPedro < 2550){
        carRunning[0].nivel = 0.04;
        carRunning[0].nivelHTML = 4
    }else if(pontosPedro >= 2550 && pontosPedro < 2700){
        carRunning[0].nivel = 0.05
        carRunning[0].nivelHTML = 5
    }else if(pontosPedro >= 2700 && pontosPedro < 3150){
        carRunning[0].nivel = 0.06;
        carRunning[0].nivelHTML = 6
    }else if(pontosPedro >= 3150 && pontosPedro < 3600){
        carRunning[0].nivel = 0.07
        carRunning[0].nivelHTML = 7
    }else if(pontosPedro >= 3600 && pontosPedro < 4050){
        carRunning[0].nivel = 0.08;
        carRunning[0].nivelHTML = 8
    }else if(pontosPedro >= 4050 && pontosPedro < 4500){
        carRunning[0].nivel = 0.09
        carRunning[0].nivelHTML = 9
    }else if(pontosPedro >= 4500){
        carRunning[0].nivel = 0.1;
        carRunning[0].nivelHTML = 10
    }

    if(pontosJuca >= 450 && pontosJuca < 900){
        carRunning[1].nivel = 0.01;
        carRunning[1].nivelHTML = 1
    }else if(pontosJuca >= 900 && pontosJuca < 1350){
        carRunning[1].nivel = 0.02;
        carRunning[1].nivelHTML = 2
    }else if(pontosJuca >= 1350 && pontosJuca < 1800){
        carRunning[1].nivel = 0.03
        carRunning[1].nivelHTML = 3
    }else if(pontosJuca >= 1800 && pontosJuca < 2550){
        carRunning[1].nivel = 0.04;
        carRunning[1].nivelHTML = 4
    }else if(pontosJuca >= 2550 && pontosJuca < 2700){
        carRunning[1].nivel = 0.05
        carRunning[1].nivelHTML = 5
    }else if(pontosJuca >= 2700 && pontosJuca < 3150){
        carRunning[1].nivel = 0.06;
        carRunning[1].nivelHTML = 6
    }else if(pontosJuca >= 3150 && pontosJuca < 3600){
        carRunning[1].nivel = 0.07
        carRunning[1].nivelHTML = 7
    }else if(pontosJuca >= 3600 && pontosJuca < 4050){
        carRunning[1].nivel = 0.08;
        carRunning[1].nivelHTML = 8
    }else if(pontosJuca >= 4050 && pontosJuca < 4500){
        carRunning[1].nivel = 0.09
        carRunning[1].nivelHTML = 9
    }else if(pontosJuca >= 4500){
        carRunning[1].nivel = 0.1;
        carRunning[1].nivelHTML = 10
    }

        if(pontosEdna >= 450 && pontosEdna < 900){
        carRunning[2].nivel = 0.01;
        carRunning[2].nivelHTML = 1
    }else if(pontosEdna >= 900 && pontosEdna < 1350){
        carRunning[2].nivel = 0.02;
        carRunning[2].nivelHTML = 2
    }else if(pontosEdna >= 1350 && pontosEdna < 1800){
        carRunning[2].nivel = 0.03
        carRunning[2].nivelHTML = 3
    }else if(pontosEdna >= 1800 && pontosEdna < 2550){
        carRunning[2].nivel = 0.04;
        carRunning[2].nivelHTML = 4
    }else if(pontosEdna >= 2550 && pontosEdna < 2700){
        carRunning[2].nivel = 0.05
        carRunning[2].nivelHTML = 5
    }else if(pontosEdna >= 2700 && pontosEdna < 3150){
        carRunning[2].nivel = 0.06;
        carRunning[2].nivelHTML = 6
    }else if(pontosEdna >= 3150 && pontosEdna < 3600){
        carRunning[2].nivel = 0.07
        carRunning[2].nivelHTML = 7
    }else if(pontosEdna >= 3600 && pontosEdna < 4050){
        carRunning[2].nivel = 0.08;
        carRunning[2].nivelHTML = 8
    }else if(pontosEdna >= 4050 && pontosEdna < 4500){
        carRunning[2].nivel = 0.09
        carRunning[2].nivelHTML = 9
    }else if(pontosEdna >= 4500){
        carRunning[2].nivel = 0.1;
        carRunning[2].nivelHTML = 10
    }
}

function sorteioRaridade(){

    let raridade = 0;
    let sorteio = Math.random();

    if(sorteio <= 0.6){
        raridade = 1;
    }else if(sorteio > 0.6 && sorteio<=0.95){
        raridade = 2;
    }else{
        raridade = 3;
    }
    
    return raridade;
}

function sorteioCarrinhos(){

    const random = (min, max) => (Math.random() * (max- min) + min);
    let tipoDaRaridade = sorteioRaridade();
    let velocidadeMinima;
    let velocidadeMaxima
    let derrapagem;
    const caracteristicas = new Array();

    if(tipoDaRaridade == 1){
        velocidadeMinima = random(carrinho.popular.minima.min, carrinho.popular.minima.max);
        velocidadeMaxima = random(carrinho.popular.maxima.min, carrinho.popular.maxima.max);
        derrapagem = random(carrinho.popular.derrapagem.min, carrinho.popular.derrapagem.max);
    }else if(tipoDaRaridade == 2){
        velocidadeMinima = random(carrinho.esporte.minima.min, carrinho.esporte.minima.max);
        velocidadeMaxima = random(carrinho.esporte.maxima.min, carrinho.esporte.maxima.max);
        derrapagem = random(carrinho.esporte.derrapagem.min, carrinho.esporte.derrapagem.max);
    }else{
        velocidadeMinima = random(carrinho.super.minima.min, carrinho.super.minima.max);
        velocidadeMaxima = random(carrinho.super.maxima.min, carrinho.super.maxima.max);
        derrapagem = random(carrinho.super.derrapagem.min, carrinho.super.derrapagem.max);
    }

    caracteristicas.push(velocidadeMinima);
    caracteristicas.push(velocidadeMaxima);
    caracteristicas.push(derrapagem);
    
    return caracteristicas;
}

function menosRodada(){

    let totalPedro = 0;
    let totalJuca = 0;
    let totalEdna = 0;
    modo = "rapida";

    preencherArray();

   for(i = 1; i<=10; i++){

        const random = (min, max) => (Math.random() * (max- min) + min);

        let voltaPedro = random(carRunning[0].carro.velMin + carRunning[0].nivel * carRunning[0].carro.velMin, carRunning[0].carro.velMax + carRunning[0].nivel * carRunning[0].carro.velMax) * carRunning[0].carro.skid;
        let voltaJuca = random(carRunning[1].carro.velMin + carRunning[1].nivel * carRunning[1].carro.velMin, carRunning[1].carro.velMax + carRunning[1].nivel * carRunning[1].carro.velMax) * carRunning[1].carro.skid;
        let voltaEdna = random(carRunning[2].carro.velMin + carRunning[2].nivel * carRunning[2].carro.velMin, carRunning[2].carro.velMax + carRunning[2].nivel * carRunning[2].carro.velMax) * carRunning[2].carro.skid;

        if(voltaPedro > voltaJuca && voltaPedro > voltaEdna){
            totalPedro = totalPedro + 1;
        }else if(voltaJuca > voltaPedro && voltaJuca > voltaEdna){
            totalJuca = totalJuca + 1;
        }else if(voltaEdna > voltaPedro && voltaEdna > voltaJuca){
            totalEdna = totalEdna + 1;
        }

        if(i == 10){

            pedro.innerHTML = totalPedro;
            juca.innerHTML = totalJuca;
            edna.innerHTML = totalEdna;
            nivelPedro.innerHTML = carRunning[0].nivelHTML;
            nivelJuca.innerHTML = carRunning[1].nivelHTML;
            nivelEdna.innerHTML = carRunning[2].nivelHTML;

            if(totalPedro > totalJuca && totalPedro > totalEdna){
                texto.innerHTML = "Ninguém segura o PEDRO";
                pedroPrimeiro = true
                if(totalJuca > totalEdna){
                    jucaSegundo = true;
                    ednaTerceiro = true;
                }else{
                    ednaSegundo = true;
                    jucaTerceiro = true;
                }
            }else if(totalJuca > totalPedro && totalJuca > totalEdna){
                texto.innerHTML = "Isso é mamão com açucar para o JUCA";
                jucaPrimeiro = true;
                if(totalPedro > totalEdna){
                    pedroSegundo = true;
                    ednaTerceiro = true;
                }else{
                    ednaSegundo = true;
                    pedroTerceiro = true;
                }
            }else if(totalEdna > totalPedro && totalEdna > totalJuca){
                texto.innerHTML = "EDNA está botando pra quebrar";
                ednaPrimeiro = true;
                if(totalPedro > totalJuca){
                    jucaTerceiro = true;
                    pedroSegundo = true;
                }else{
                    pedroTerceiro = true
                    jucaSegundo = true;
                }
            }
            carRunning.forEach(teste);
            calcularNiveis();
            pedroPrimeiro = false
            pedroSegundo = false
            pedroTerceiro = false
            jucaPrimeiro = false;
            jucaSegundo = false;
            jucaTerceiro = false;
            ednaPrimeiro = false;
            ednaSegundo = false;
            ednaTerceiro = false;
        }
    }
}

function mediaRodada(){

    let totalPedro = 0;
    let totalJuca = 0;
    let totalEdna = 0;
    modo = "premio";
  
    preencherArray();

    for(i = 1; i<=70; i++){

        const random = (min, max) => (Math.random() * (max- min) + min);

        let voltaPedro = random(carRunning[0].carro.velMin + carRunning[0].nivel * carRunning[0].carro.velMin, carRunning[0].carro.velMax + carRunning[0].nivel * carRunning[0].carro.velMax) * carRunning[0].carro.skid;
        let voltaJuca = random(carRunning[1].carro.velMin + carRunning[1].nivel * carRunning[1].carro.velMin, carRunning[1].carro.velMax + carRunning[1].nivel * carRunning[1].carro.velMax) * carRunning[1].carro.skid;
        let voltaEdna = random(carRunning[2].carro.velMin + carRunning[2].nivel * carRunning[2].carro.velMin, carRunning[2].carro.velMax + carRunning[2].nivel * carRunning[2].carro.velMax) * carRunning[2].carro.skid;

        if(voltaPedro > voltaJuca && voltaPedro > voltaEdna){
            totalPedro = totalPedro + 1;
        }else if(voltaJuca > voltaPedro && voltaJuca > voltaEdna){
            totalJuca = totalJuca + 1;
        }else if(voltaEdna > voltaPedro && voltaEdna > voltaJuca){
            totalEdna = totalEdna + 1;
        }

        if(i == 70){

            pedro.innerHTML = totalPedro;
            juca.innerHTML = totalJuca;
            edna.innerHTML = totalEdna;
            nivelPedro.innerHTML = carRunning[0].nivelHTML;
            nivelJuca.innerHTML = carRunning[1].nivelHTML;
            nivelEdna.innerHTML = carRunning[2].nivelHTML;

            if(totalPedro > totalJuca && totalPedro > totalEdna){
                texto.innerHTML = "Pedro não está para brincadeira";
                pedroPrimeiro = true
                if(totalJuca > totalEdna){
                    jucaSegundo = true;
                    ednaTerceiro = true;
                }else{
                    ednaSegundo = true;
                    jucaTerceiro = true;
                }

            }else if(totalJuca > totalPedro && totalJuca > totalEdna){
                texto.innerHTML = "Para o JUCA, vencer é uma obrigação";
                jucaPrimeiro = true;
                if(totalPedro > totalEdna){
                    pedroSegundo = true;
                    ednaTerceiro = true;
                }else{
                    ednaSegundo = true;
                    pedroTerceiro = true;
                }

            }else if(totalEdna > totalPedro && totalEdna > totalJuca){
                texto.innerHTML = "EDNA se tornou lendária";
                ednaPrimeiro = true;
                if(totalPedro > totalJuca){
                    jucaTerceiro = true;
                    pedroSegundo = true;
                }else{
                    pedroTerceiro = true
                    jucaSegundo = true;
                }
            }
            calcularNiveis();
            carRunning.forEach(teste);
            pedroPrimeiro = false
            pedroSegundo = false
            pedroTerceiro = false
            jucaPrimeiro = false;
            jucaSegundo = false;
            jucaTerceiro = false;
            ednaPrimeiro = false;
            ednaSegundo = false;
            ednaTerceiro = false;
        }
    }
}

function maximaRodada(){

    let totalPedro = 0;
    let totalJuca = 0;
    let totalEdna = 0;
    modo = "enduro";
        
    preencherArray()

    for(i = 1; i<=160; i++){

        const random = (min, max) => (Math.random() * (max- min) + min);

        let voltaPedro = random(carRunning[0].carro.velMin + carRunning[0].nivel * carRunning[0].carro.velMin, carRunning[0].carro.velMax + carRunning[0].nivel * carRunning[0].carro.velMax) * carRunning[0].carro.skid;
        let voltaJuca = random(carRunning[1].carro.velMin + carRunning[1].nivel * carRunning[1].carro.velMin, carRunning[1].carro.velMax + carRunning[1].nivel * carRunning[1].carro.velMax) * carRunning[1].carro.skid;
        let voltaEdna = random(carRunning[2].carro.velMin + carRunning[2].nivel * carRunning[2].carro.velMin, carRunning[2].carro.velMax + carRunning[2].nivel * carRunning[2].carro.velMax) * carRunning[2].carro.skid;

        if(voltaPedro > voltaJuca && voltaPedro > voltaEdna){
            totalPedro = totalPedro + 1;
        }else if(voltaJuca > voltaPedro && voltaJuca > voltaEdna){
            totalJuca = totalJuca + 1;
        }else if(voltaEdna > voltaPedro && voltaEdna > voltaJuca){
            totalEdna = totalEdna + 1;
        }

        if(i == 160){

            pedro.innerHTML = totalPedro;
            juca.innerHTML = totalJuca;
            edna.innerHTML = totalEdna;
            nivelPedro.innerHTML = carRunning[0].nivelHTML;
            nivelJuca.innerHTML = carRunning[1].nivelHTML;
            nivelEdna.innerHTML = carRunning[2].nivelHTML;

            if(totalPedro > totalJuca && totalPedro > totalEdna){
                texto.innerHTML = "Se tiver PEDRO como adversario, desista";
                pedroPrimeiro = true
                if(totalJuca > totalEdna){
                    jucaSegundo = true;
                    ednaTerceiro = true;
                }else{
                    ednaSegundo = true;
                    jucaTerceiro = true;
                }

            }else if(totalJuca > totalPedro && totalJuca > totalEdna){
                texto.innerHTML = "Se tiver PEDRO como adversario, desista";
                jucaPrimeiro = true;
                if(totalPedro > totalEdna){
                    pedroSegundo = true;
                    ednaTerceiro = true;
                }else{
                    ednaSegundo = true;
                    pedroTerceiro = true;
                }

            }else if(totalEdna > totalPedro && totalEdna > totalJuca){
                texto.innerHTML = "É o superman? O batman? A não, é a EDNA";
                ednaPrimeiro = true;
                if(totalPedro > totalJuca){
                    jucaTerceiro = true;
                    pedroSegundo = true;
                }else{
                    pedroTerceiro = true
                    jucaSegundo = true;
                }
            }
            calcularNiveis();
            carRunning.forEach(teste);
            pedroPrimeiro = false
            pedroSegundo = false
            pedroTerceiro = false
            jucaPrimeiro = false;
            jucaSegundo = false;
            jucaTerceiro = false;
            ednaPrimeiro = false;
            ednaSegundo = false;
            ednaTerceiro = false;
        }
    }
}