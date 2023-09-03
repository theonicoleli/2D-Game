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
        eighthPhase: document.querySelector(".text .lutaBeto"),
        ninthPhase: document.querySelector(".text .lutaSnape"),
        tenthPhase: document.querySelector(".text .lutaFinal"),
        ganhou: document.querySelector(".text .venceu"),
        perdeu: document.querySelector(".text .perdeu"),
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

    function movimentos(valueA, valueB) {
        let roberto = document.querySelector(".robertoStatic");
        let up = document.querySelector(".subir");
        let down = document.querySelector(".descer");
        let left = document.querySelector(".esquerda");
        let right = document.querySelector(".direita");
    
        let positionX = valueA; // Posição X
        let positionY = valueB; // Posição Y
        let step = 20; // Quantidade de espaço ao andar
    
        up.addEventListener("click", function () {
            if (!walk) return;
            let targetY = positionY - step; // Verificação onde será o próximo passo
    
            function animate() {
                if (positionY > targetY && positionY > -118) {
                    positionY -= 1;
                    roberto.style.transform = `translate(${positionX}px, ${positionY}px)`;
                    console.log(`translate(${positionX}px, ${positionY}px)`)
                    requestAnimationFrame(animate);
                    checkPosition(); // Verificando a posição após cada etapa da animação
                }
            }
    
            animate();
        });
    
        down.addEventListener("click", function () {
            if (!walk) return;
            let targetY = positionY + step;
    
            function animate() {
                if (positionY < targetY && positionY < 411) {
                    positionY += 1;
                    roberto.style.transform = `translate(${positionX}px, ${positionY}px)`;
                    console.log(`translate(${positionX}px, ${positionY}px)`)
                    requestAnimationFrame(animate);
                    checkPosition(); // Verificando a posição após cada etapa da animação
                }
            }
    
            animate();
        });
    
        left.addEventListener("click", function () {
            if (!walk) return;
            let targetX = positionX - step;
    
            function animate() {
                if (positionX > targetX && positionX > -29) {
                    positionX -= 1;
                    roberto.style.transform = `translate(${positionX}px, ${positionY}px)`;
                    console.log(`translate(${positionX}px, ${positionY}px)`)
                    requestAnimationFrame(animate);
                    checkPosition(); // Verificando a posição após cada etapa da animação
                }
            }
    
            animate();
        });
    
        right.addEventListener("click", function () {
            if (!walk) return;
            let targetX = positionX + step;
    
            function animate() {
                if (positionX < targetX && positionX < 931) {
                    positionX += 1;
                    roberto.style.transform = `translate(${positionX}px, ${positionY}px)`;
                    console.log(`translate(${positionX}px, ${positionY}px)`)
                    requestAnimationFrame(animate);
                    checkPosition(); // Verificando a posição após cada etapa da animação
                }
            }
    
            animate();
        });
    
        // Função para verificar a posição e executar ações conforme necessário
        let interval; // Declarando a variável de intervalo

        function checkPosition() {
            if (positionX >= 280 && positionX <= 319 && positionY >= 317 && positionY <= 357) {
                walk = false;
                if (selectedPhrase.textContent === '') {
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
                        if (currentPhraseIndex <= 6) {
                            // Verificando se o elemento imgLoading ainda está presente
                            if (fase.contains(imgLoading)) {
                                fase.removeChild(imgLoading);
                            }
                            // Restaurando o conteúdo original da 'fase'
                            fase.innerHTML = originalContent;

                            selectedPhrase = allPhrases[currentPhraseIndex];
                            changingTextType();
                            typeAndErase(selectedPhrase);
                            currentPhraseIndex++;
                        } else {
                            clearInterval(interval); 
                            walk = true;
                            movimentos(positionX, positionY);
                        }
                    }, 3500);
                } 
                else {
                    if (selectedPhrase.textContent === 'Missão: Em busca de Leia!') {
                        return;
                    } else if (selectedPhrase.textContent === "Chegue até o circulo verde!") {
                        selectedPhrase.textContent = '';
                        checkPosition();
                    }
                }
            }
        }
    }
    movimentos();

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


    function positionStart() {
        let roberto = document.querySelector(".robertoStatic");
        positionX = 119;
        positionY = 277;
        roberto.style.transform = `translate(${positionX}px, ${positionY}px)`;
        movimentos(positionX, positionY)
    }

    positionStart()

});