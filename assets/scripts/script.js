document.addEventListener("DOMContentLoaded", function() {
    let startLife = 3;

    let phases = {
        firstPhase: document.querySelector(".text .fraseInicial"),
        secondPhase: document.querySelector(".text .buscandoLeia"),
        thirdPhase: document.querySelector(".text .robertoResposta1"),
        fourthPhase: document.querySelector(".text .patrickResposta"),
        fifthPhase: document.querySelector(".text .robertoResposta2"),
        sixthPhase: document.querySelector(".text .patrickResposta2"),
        seventhPhase: document.querySelector(".text .missionBuscandoLeia"),
        eighthPhase: document.querySelector(".text .mendigo"),
        ninthPhase: document.querySelector(".text .robertoRespostaMendigo"),
        tenthPhase: document.querySelector(".text .lutaBeto"),
        eleventhPhase: document.querySelector(".text .betoFrase"),
        twelfthPhase: document.querySelector(".text .robertoFraseBeto"),
        thirteenthPhase: document.querySelector(".text .betoFrase2"),
        fourteenthPhase: document.querySelector(".text .robertoFraseBeto2"),
        fifteenthPhase: document.querySelector(".text .betoFrase3"),
        sixteenthPhase: document.querySelector(".text .betoDefendeu"),
        seventeenthPhase: document.querySelector(".text .betoTomou"),
        eighteenthPhase: document.querySelector(".text .robertoDefendeu"),
        nineteenthPhase: document.querySelector(".text .robertoTomou"),
        twentiethPhase: document.querySelector(".text .quantidadeAtaque"),
        twentiethFirstPhase: document.querySelector(".text .semAtaque"),
        perdeu: document.querySelector(".text .perdeu"),
        ganhou: document.querySelector(".text .venceu"),
    };
    
    const allPhrases = Object.values(phases);
    let currentPhraseIndex = 0;
    let selectedPhrase = allPhrases[currentPhraseIndex];
    console.log(selectedPhrase)

    function changingTextType() {
        allPhrases.forEach(phrase => {
            phrase.style.display = "none"; // Escondendo as frases
        });

        selectedPhrase.style.display = "block";
        selectedPhrase.style.cssText = `
            height: 70px;
            font-weight: bold;
            font-size: 35px;
            text-align: center;
            margin: auto;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        `;
    }
    
    function changingTextType() {
        allPhrases.forEach(phrase => {
            phrase.style.display = "none"; // Ocultar todas as frases
        });
    
        selectedPhrase.style.display = "block";
        selectedPhrase.style.cssText = `
        height: 70px;
        font-weight: bold;
        font-size: 35px;
        text-align: center;
        margin: auto;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        `;
    }

    changingTextType();

    function typeAndErase(selectedPhrase) {
        const originalText = selectedPhrase.textContent;
        let charIndex = 0;
        let isTyping = true;
        const interval = 75; // Velocidade de digitação e apagamento original (ajuste conforme necessário)
    
        function typeNextCharacter() {
            selectedPhrase.textContent = originalText.substring(0, charIndex);
            charIndex++;
    
            if (charIndex <= originalText.length) {
                setTimeout(typeNextCharacter, interval);
            }
        }
    
        function eraseTextForPhrase() {
            let charIndex = originalText.length;
    
            function eraseNextCharacter() {
                selectedPhrase.textContent = originalText.substring(0, charIndex);
                charIndex--;
    
                if (charIndex >= 0) {
                    setTimeout(eraseNextCharacter, interval);
                } else {
                    isTyping = true;
                    charIndex = 0;
                    setTimeout(typeNextCharacter, interval); // Esperar antes de digitar novamente
                }
            }
    
            eraseNextCharacter();
        }
    
        function startTypingOrErasing() {
            if (isTyping) {
                typeNextCharacter()
            }
        }
    
        startTypingOrErasing();
    }
    
    typeAndErase(selectedPhrase);

    let walk = true;
    let activate = 0;
    let activateB = 0;
    let changeMapActivated = false;
    let mapa = 1;

    function movimentos(valueA, valueB) {
        let mapaAtual = mapa;
        let roberto = document.querySelector(".robertoStatic");
        let up = document.querySelector(".subir");
        let down = document.querySelector(".descer");
        let left = document.querySelector(".esquerda");
        let right = document.querySelector(".direita");
    
        let positionX = valueA; // Posição X
        let positionY = valueB; // Posição Y
        let step = 30; // Quantidade de espaço ao andar
    
        up.addEventListener("click", function () {
            let targetY = positionY - step; // Verificação onde será o próximo passo
    
            function animate() {
                if (!walk) {
                    return;
                }
                else if (positionY > targetY && positionY > -118 && mapaAtual == mapa) {
                    positionY -= 1;
                    roberto.style.transform = `translate(${positionX}px, ${positionY}px)`;
                    console.log(`translate(${positionX}px, ${positionY}px)`)
                    requestAnimationFrame(animate);
                    checkPosition(activate, 280, 319, 317, 357, 0, 6); // Verificando a posição após cada etapa da animação
                    checkPosition(activateB, -6, 44, 101, 127, 7, 8);
                    if (mapa === 2) {
                        checkPosition(activate, 809, 895, -24, -4 , 9, 14)
                    }
                }
                changeMap();
                if (changeMapActivated) {
                    positionX = 119;
                    positionY = 277;
                    changeMapActivated = false;
                    return;
                }
            }
    
            animate();
        });
    
        down.addEventListener("click", function () {
            let targetY = positionY + step;
    
            function animate() {
                if (!walk) {
                    return;
                }
                else if (positionY < targetY && positionY < 411 && mapaAtual == mapa) {
                    positionY += 1;
                    roberto.style.transform = `translate(${positionX}px, ${positionY}px)`;
                    console.log(`translate(${positionX}px, ${positionY}px)`)
                    requestAnimationFrame(animate);
                    checkPosition(activate, 280, 319, 317, 357, 0, 6); // Verificando a posição após cada etapa da animação
                    checkPosition(activateB, -6, 44, 101, 127, 7, 8);
                    if (mapa === 2) {
                        checkPosition(activate, 809, 895, -24, -4 , 9, 14)
                    }
                }
                changeMap();
                if (changeMapActivated) {
                    positionX = 119;
                    positionY = 277;
                    changeMapActivated = false;
                    return;
                }
            }
    
            animate();
        });
    
        left.addEventListener("click", function () {
            let targetX = positionX - step;
    
            function animate() {
                if (!walk) {
                    return;
                }
                else if (positionX > targetX && positionX > -29 && mapaAtual == mapa) {
                    positionX -= 1;
                    roberto.style.transform = `translate(${positionX}px, ${positionY}px)`;
                    console.log(`translate(${positionX}px, ${positionY}px)`)
                    requestAnimationFrame(animate);
                    checkPosition(activate, 280, 319, 317, 357, 0, 6); // Verificando a posição após cada etapa da animação
                    checkPosition(activateB, -6, 44, 101, 127, 7, 8);
                    if (mapa === 2) {
                        checkPosition(activate, 809, 895, -24, -4 , 9, 14)
                    }
                }
                changeMap();
                if (changeMapActivated) {
                    positionX = 119;
                    positionY = 277;
                    changeMapActivated = false;
                    return;
                }
            }
    
            animate();
        });
    
        right.addEventListener("click", function () {
            let targetX = positionX + step;
    
            function animate() {
                if (!walk) {
                    return;
                }
                else if (positionX < targetX && positionX < 931 && mapaAtual == mapa) {
                    positionX += 1;
                    roberto.style.transform = `translate(${positionX}px, ${positionY}px)`;
                    console.log(`translate(${positionX}px, ${positionY}px)`)
                    requestAnimationFrame(animate);
                    checkPosition(activate, 280, 319, 317, 357, 0, 6); // Verificando a posição após cada etapa da animação
                    checkPosition(activateB, -6, 44, 101, 127, 7, 8);
                    if (mapa === 2) {
                        checkPosition(activate, 809, 895, -24, -4 , 9, 14)
                        // checkPosition(activateB, 809, 895, -24, -4 , 9, 14)
                    }
                }
                changeMap();
                if (changeMapActivated) {
                    positionX = 119;
                    positionY = 277;
                    changeMapActivated = false;
                    return;
                }
            }
    
            animate();
        });
        // Função para verificar a posição e executar ações conforme necessário
        let interval; // Declarando a variável de intervalo

        function retornarLayoutAnterior(numPhraseStart, originalContent) {
            let fase = document.querySelector('.fase');
            fase.innerHTML = originalContent;
            if (numPhraseStart === 0) {
                activate = 1;
                return activate;
            }
            activateB = 1;
            activate = 0;
            return activate;
        }

        function checkPosition(activate, numX, numY, numXa, numXb, numPhraseStart, numPhraseEnd) {
            if (activate === 0) {
                if (positionX >= numX && positionX <= numY && positionY >= numXa && positionY <= numXb) {
                    walk = false;
                    if (selectedPhrase.textContent === '') {
                        currentPhraseIndex = numPhraseStart;
                        let fase = document.querySelector('.fase');
                        // Limpando todos os intervalos existentes para evitar sobreposição
                        clearInterval(interval);
            
                        // Guarde o conteúdo original da div 'fase'
                        const originalContent = fase.innerHTML;
            
                        // Limpando o conteúdo da div 'fase'
                        fase.innerHTML = '';
            
                        // Removendo a imagem de fundo definindo o estilo de fundo como vazio
                        fase.style.background = 'none';
            
                        // Criando um elemento de imagem
                        let imgLoading = document.createElement('img');
                        imgLoading.src = 'img/Jogo/Animações/Loading.gif';
                        imgLoading.style.zIndex = '5'; // Z-index como string
                        imgLoading.style.width = '1000px'; // Largura como string com 'px'
                        imgLoading.style.height = '600px'; // Altura como string com 'px'
            
                        // Adicionando a imagem diretamente à div 'fase'
                        fase.appendChild(imgLoading);
            
                        interval = setInterval(() => {
                            if (currentPhraseIndex >= numPhraseStart && currentPhraseIndex <= numPhraseEnd) {
                                // Verificando se o elemento imgLoading ainda está presente
                                if (fase.contains(imgLoading)) {
                                    fase.removeChild(imgLoading);
                                }
                                // Restaurando o conteúdo original da 'fase'
                                retornarLayoutAnterior(numPhraseStart, originalContent);
                                selectedPhrase = allPhrases[currentPhraseIndex];
                                changingTextType();
                                typeAndErase(selectedPhrase);
                                currentPhraseIndex++;
                            } else {
                                clearInterval(interval); 
                                retornarLayoutAnterior(numPhraseStart, originalContent);
                                walk = true;
                                positionStart(positionX, positionY)
                                if (mapa === 2) {
                                    battle();
                                }
                                return;
                            }
                        }, 3500);
                    } 
                    else {
                        if (selectedPhrase.textContent === 'Missão: Em busca de Leia!') {
                            return;
                        } else {
                            selectedPhrase.textContent = '';
                            checkPosition(activate, numX, numY, numXa, numXb, numPhraseStart, numPhraseEnd);
                        }
                    }
                }
            } else {
                return;
            }
        }
    }

    function utensilios() {
        let selecionarUtensilios = document.querySelector(".selecionarUtensilios");
        let utensilioImagem = document.querySelector(".item.bolsa");
    
        let imagensAdicionais = [
            { className: 'botas', src: 'img/Items/Botas.png', alt: 'Botas' },
            { className: 'camera', src: 'img/Items/Camera.png', alt: 'Camera' },
            { className: 'escudo', src: 'img/Items/Escudo.png', alt: 'Escudo' },
            { className: 'fish', src: 'img/Items/Fish.png', alt: 'Fish' },
            { className: 'knife', src: 'img/Items/knife.png', alt: 'Knife' },
            { className: 'reviver', src: 'img/Items/Reviver.png', alt: 'Reviver' }
        ];
    
        utensilioImagem.addEventListener("click", function() {
            let adicionouImagens = selecionarUtensilios.querySelector(".adicionou-imagens");
            if (adicionouImagens) {
                adicionouImagens.remove();
            } else {
                let divAdicionais = document.createElement("div");
                divAdicionais.classList.add("adicionou-imagens");
                for (let imagem of imagensAdicionais) {
                    let img = document.createElement("img");
                    img.classList.add("item", imagem.className);
                    img.src = imagem.src;
                    img.alt = imagem.alt;
    
                    img.addEventListener("click", function() {
                        mudarPersonagem(img.alt);
                    });
    
                    divAdicionais.appendChild(img);
                }
                selecionarUtensilios.appendChild(divAdicionais);
            }
        });
    }

    function start(minutes) {
        let timeLapse = document.querySelector(".timelapse");

        function updateTimer() {
            if (minutes <= 0) {
                clearInterval(timerInterval);
                timeLapse.innerHTML = "0:00";
            } else {
                const mins = Math.floor(minutes / 60);
                const secs = minutes % 60;

                const formattedTime = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
                timeLapse.innerHTML = formattedTime;
                timeLapse.style.color = "white";
                timeLapse.style.backgroundColor = "black";
                timeLapse.style.borderBottomRightRadius = "10px";
                timeLapse.style.width = "100px";
                timeLapse.style.fontWeight = "bold";
                timeLapse.style.fontSize = "20px";
                timeLapse.style.textAlign = "center";

                minutes -= 1;
            }
        }

        updateTimer();
        const timerInterval = setInterval(updateTimer, 1000);
    }
    
    function mudarPersonagem(alt) {
        let robertoStatic = document.querySelector(".fase .robertoStatic");
        let timeLapse = document.querySelector(".timelapse");
        if (timeLapse.innerHTML === "") {
            switch (alt) {
                case "Botas":
                    start(20);
                    robertoStatic.src = "img/Roberto/RobertoNoite.png";
                    robertoStatic.style.width = "160px"
                    robertoStatic.style.height = "100px"
                    setTimeout(function() {
                        robertoStatic.src = "img/Roberto/RobertoDePe.png";
                        timeLapse.innerHTML = '';
                        robertoStatic.style.width = "100px"
                        robertoStatic.style.height = "100px"
                    }, 20000);
                    break;
                case "Camera":
                    start(20);
                    robertoStatic.src = "img/Roberto/RobertoCameras.png";
                    setTimeout(function() {
                        robertoStatic.src = "img/Roberto/RobertoDePe.png";
                        timeLapse.innerHTML = '';
                    }, 20000);
                    break;
                case "Escudo":
                    start(20);
                    robertoStatic.src = "img/Roberto/RobertoEscudo.png";
                    setTimeout(function() {
                        robertoStatic.src = "img/Roberto/RobertoDePe.png";
                        timeLapse.innerHTML = '';
                    }, 20000);
                    break;
                case "Fish":
                    start(4);
                    robertoStatic.src = "img/Roberto/Animations/RobertoFishPower.gif";
                    robertoStatic.style.width = "180px"
                    robertoStatic.style.height = "150px"
                    setTimeout(function() {
                        robertoStatic.src = "img/Roberto/RobertoDePe.png";
                        timeLapse.innerHTML = '';
                        robertoStatic.style.width = "100px"
                        robertoStatic.style.height = "100px"
                    }, 4000);
                    break;
                case "Knife":
                    start(20);
                    robertoStatic.src = "img/Roberto/RobertoMaldade.png";
                    setTimeout(function() {
                        robertoStatic.src = "img/Roberto/RobertoDePe.png";
                        timeLapse.innerHTML = '';
                    }, 20000);
                    break;
                case "Reviver":
                    start(1,3);
                    robertoStatic.src = "img/Roberto/Animations/RobertoVoltando.gif";
                    setTimeout(function() {
                        robertoStatic.src = "img/Roberto/RobertoDePe.png";
                        timeLapse.innerHTML = '';
                    }, 1300);
                    break;
                default:
                    robertoStatic.src = "img/Roberto/RobertoDePe.png";
                    break;
            }
        }
    }
    
    utensilios();

    function lifesImage() {
        let lifeHeart = document.querySelector(".heart");

        for (let i = 0; i < startLife; i ++) {
            lifeHeart.innerHTML += `<img class="coracao ${i}" src="img/Jogo/Life/Life.png">`
        }
    }
    
    lifesImage();

    let coracaoBeto = 5;

    function lifeImageBeto() {
        let lifeHeart = document.querySelector(".heartBeto")

        for (let i = 0; i < coracaoBeto; i++) {
            lifeHeart.innerHTML += `<img class="coracao ${i}" src="img/Jogo/Life/Life.png">`
        }
    }

    function musicSong() {
        let audio = document.querySelector(".music");
        let playButton = document.querySelector("#playButton");
    
        if (audio.paused || audio.ended) {
            audio.play();
            playButton.innerHTML = "Pausar";
        } else {
            audio.pause();
            playButton.innerHTML = "Reproduzir";
        }
    
        audio.addEventListener("ended", function() {
            audio.currentTime = 0;
            audio.play();
        });
    }
    
    document.getElementById("playButton").addEventListener("click", musicSong);


    function positionStart(numX, numY) {
        let roberto = document.querySelector(".robertoStatic");
        positionX = numX;
        positionY = numY;
        roberto.style.transform = `translate(${positionX}px, ${positionY}px)`;
        movimentos(positionX, positionY)
    }

    positionStart(119, 277);


    let ativacaoVez = 0;

    function changeMap() {
        let roberto = document.querySelector(".robertoStatic");
        let imagemFundoMissao = document.querySelector(".backgroundImage");
    
        // Verifique se o elemento roberto foi encontrado
        if (roberto) {
            let audioBattle = document.querySelector(".music")
            let computedStyle = window.getComputedStyle(roberto);
            let transformValue = computedStyle.getPropertyValue("transform");
            let matrix = new DOMMatrix(transformValue);
    
            // Obtenha o valor de X a partir da matriz de transformação
            let positionX = matrix.m41;
    
            if (activate === 1 && positionX === 931) {
                imagemFundoMissao.src = "img/Jogo/Mapa/parteDoisMissao.jpg";
                mapa++;
                activate = 0;
                activateB = 0;
                positionStart(119,277);
                return changeMapActivated = true;
            } else if (mapa === 2 && positionX >= 426 && ativacaoVez === 0) {
                imagemFundoMissao.src = "img/Jogo/Mapa/lutaBeto/lutaBetoJedi.png";
                audioBattle.src = "songs/BattleSong.mp4";
                ativacaoVez++;
            } else if (mapa === 2 && positionX === -29) {
                imagemFundoMissao.src = "img/Jogo/Mapa/parkImage.png";
                audioBattle.src = "songs/OfficialMusic.mp4"
            }
        }
    }

    let buttonDefesaActivate = false;

    function battle() {
        let fase = document.querySelector(".fase");
        let menuInterativo = document.querySelector(".menuInterativo");
        let selecionarUtensilios = document.querySelector(".selecionarUtensilios");
    
        menuInterativo.innerHTML = '';
        selecionarUtensilios.innerHTML = '';
    
        fase.innerHTML = `
        <div class="heart"></div>
        <div class="heartBeto"></div>
        <img class="backgroundImage" src="img/Jogo/Mapa/batalhaFinal.png" alt="park">
        <img class="robertoBattle" src="img/Roberto/RobertoNoiteBatalha.png" alt="roberto">
        <img class="betoBattle" src="img/Viloes/Beto/betoJedi.png" alt="beto">`;
    
        menuInterativo.innerHTML = '<button class="batalha atacar">Atacar</button> <button class="batalha defender">Defender</button>';
    
        lifesImage();
        lifeImageBeto();
    
        atacar();
    
        let defesaButton = document.querySelector(".batalha.defender");
        defesaButton.addEventListener("click", () => {
            buttonDefesaActivate = true;
        });
    
        ataqueBeto();
    }


    function betoTomarDano() {
        // Gera um número aleatório entre 0 (inclusive) e 1 (exclusivo)
        var randomNumber = Math.random();
    
        // Se o número gerado for menor que 0.5, retorne true; caso contrário, retorne false
        return randomNumber < 0.5;
    }


    function mensagemBatalha(currentPhraseIndex) {
        selectedPhrase = allPhrases[currentPhraseIndex];
        changingTextType();
        typeAndErase(selectedPhrase);
    }


    let attack = true;

    //Função para que o ataque só seja válido após 10 segundos
    function secondsStart() {
      // Defina attack como false
        attack = false;
    
      // Conta até 10 segundos (10000 milissegundos)
        setTimeout(function() {
            // Após 10 segundos, defina attack como true novamente
            attack = true;
        }, 3000);
    }


    let quantidadeAtaque = 15;
    let valorAtaque = document.getElementById('valorAtaque');
    
    function atacar() {
        let atacarButton = document.querySelector(".batalha.atacar");
        let fase = document.querySelector(".fase");
    
        atacarButton.addEventListener("click", () => {
            if (attack) {
                if (quantidadeAtaque > 0 && pegarImagemCachorro() != null) {
                    secondsStart();
                    quantidadeAtaque--;
                    selectedPhrase = allPhrases[19];
                    selectedPhrase.textContent = `${quantidadeAtaque} Ataques`;
                    valorAtaque.textContent = quantidadeAtaque;
                    console.log(quantidadeAtaque);
                    console.log(valorAtaque.textContent);
                    console.log(selectedPhrase)
                    mensagemBatalha(19);
                    if (coracaoBeto >= 0) {
                        fase.innerHTML += `<img class="jogavel peixe" src="img/Jogo/Batalha Final/peixeJogavel.gif" alt="peixeBatalha">`;
                        setTimeout(() => {
                            fase.innerHTML = `<div class="heart"></div>
                            <div class="heartBeto"></div>
                            <img class="backgroundImage" src="img/Jogo/Mapa/batalhaFinal.png" alt="park">
                            <img class="robertoBattle" src="img/Roberto/RobertoNoiteBatalha.png" alt="roberto">
                            <img class="betoBattle" src="img/Viloes/Beto/betoJedi.png" alt="beto">`;
        
                            let betoBattle = document.querySelector(".betoBattle");
        
                            if (betoTomarDano()) {
                                mensagemBatalha(16);
                                coracaoBeto--;
                            } else {
                                mensagemBatalha(15);
                            }
        
                            lifesImage();
                            lifeImageBeto();
        
                            if (coracaoBeto <= 2 && coracaoBeto != 0) {
                                betoBattle.src = "img/Viloes/Beto/betoSith.png";
                            } else if (coracaoBeto === 0) {
                                console.log("aqui!")
                                fase.innerHTML = '<img class="backgroundImage" src="img/Jogo/Mapa/fim.png" alt="fim">';
                                mensagemBatalha(22);
                                return;
                            } else if (startLife === 0) {
                                fase.innerHTML = '<img class="backgroundImage" src="img/Jogo/Mapa/fim-2.png" alt="fim">';
                                mensagemBatalha(21);
                                return;
                            }
                        }, 1000);
                    } else {
                        mensagemBatalha(20);
                    }
                } else if (coracaoBeto === 0) {
                    return;
                }
                else{
                    fase.innerHTML = '<img class="backgroundImage" src="img/Jogo/Mapa/fim-2.png" alt="fim">';
                    mensagemBatalha(21);
                    return;
                }
            } else {
                return;
            }
        });
    }


    function pegarImagemCachorro() {
        let betoBattle = document.querySelector(".betoBattle");
        return betoBattle != null ? betoBattle.src : null;
    }
    
    let animationInProgress = false;
    let defesaButtonClicked = false;
    
    function ataqueBeto() {
        let fase = document.querySelector(".fase");
    
        if (coracaoBeto > 0 && startLife > 0) {
            setInterval(() => {
                if (pegarImagemCachorro() != null) {
                    if (coracaoBeto > 2) {
                        fase.innerHTML += `<img class="jogavel sabre" src="img/Jogo/Batalha Final/lightSaber.gif" alt="sabreBatalha">`;
                    } else {
                        fase.innerHTML += `<img class="jogavel sabre" src="img/Jogo/Batalha Final/lightSaberRed.gif" alt="sabreBatalha">`;
                    }
    
                    let jogavelSabre = document.querySelector(".jogavel.sabre");
    
                    jogavelSabre.addEventListener("animationstart", () => {
                        console.log("A animação começou");
                        animationInProgress = true;
                    });
    
                    animationTimeout = setTimeout(() => {
                        if (animationInProgress && defesaButtonClicked === false && buttonDefesaActivate === false) {
                            console.log("A animação terminou e o botão de defesa não foi clicado. Aplicando dano.");
                            startLife--;
                            mensagemBatalha(18);
                            return;
                        }
                        buttonDefesaActivate = false;
                        mensagemBatalha(17);
                        return;
                    }, 1000);
    
                    setTimeout(() => {
                        fase.innerHTML = `<div class="heart"></div>
                            <div class="heartBeto"></div>
                            <img class="backgroundImage" src="img/Jogo/Mapa/batalhaFinal.png" alt="park">
                            <img class="robertoBattle" src="img/Roberto/RobertoNoiteBatalha.png" alt="roberto">
                            <img class="betoBattle" src="${pegarImagemCachorro()}" alt="beto">`;
    
                        lifesImage();
                        lifeImageBeto();
                    }, 1000);
                } else {
                    if (coracaoBeto === 0) {
                        fase.innerHTML = '<img class="backgroundImage" src="img/Jogo/Mapa/fim.png" alt="fim">';
                        mensagemBatalha(22);
                        return;
                    } else if (startLife === 0) {
                        fase.innerHTML = '<img class="backgroundImage" src="img/Jogo/Mapa/fim-2.png" alt="fim">';
                        mensagemBatalha(21);
                        return;
                    }
                }
            }, 5000);
        }
    }
    

});