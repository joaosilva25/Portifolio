
/*cursor script */ 

let customCursor = document.querySelector('.customCursor')
let mainPage = document.querySelector('.mainPage')

document.addEventListener('mousemove',e=> {
    customCursor.style.top=e.pageY+'px'
    customCursor.style.left=e.pageX+'px'
})


/*scroll script */

let containerScroll = document.querySelector(".containerScroll")
let rightSide=document.querySelector('.rightSide')


let scrollBarText1=document.querySelector(".scrollBar1 p")
let scrollBarText2=document.querySelector(".scrollBar2 p")
let scrollBarText3=document.querySelector(".scrollBar3 p")
let scrollBarText4=document.querySelector(".scrollBar4 p")

let astro1=document.querySelector(".astro1")
let astro2=document.querySelector(".astro2")
let astro3=document.querySelector(".astro3")
let astro4=document.querySelector(".astro4")

function scrollBarActived() {

    scrollBarText1.style.fontWeight="400"
    scrollBarText2.style.fontWeight="400"
    scrollBarText3.style.fontWeight="400"
    scrollBarText4.style.fontWeight="400"

    astro1.style.display="none"
    astro2.style.display="none"
    astro3.style.display="none"
    astro4.style.display="none"


    if(rightSide.scrollTop>=0 && rightSide.scrollTop<800) {
        astro1.style.display='flex'
        astro1.setAttribute('src','assets/images/astronautaBoost.png')
        astro1.style.animation='astroGravity 1.5s linear infinite'
        scrollBarText1.style.fontWeight="bold"
    }
    else if(rightSide.scrollTop>=800 && rightSide.scrollTop<1500) {
        astro2.style.display='flex'
        astro2.setAttribute('src','assets/images/astronautaBoost.png')
        astro2.style.animation='astroGravity 1.5s linear infinite'
        scrollBarText2.style.fontWeight="bold"
    }

    else if(rightSide.scrollTop>=1500 && rightSide.scrollTop<3000) {
        astro3.style.display='flex'
        astro3.setAttribute('src','assets/images/astronautaBoost.png')
        astro3.style.animation='astroGravity 1.5s linear infinite'
        scrollBarText3.style.fontWeight="bold"
    }

    else if(rightSide.scrollTop>=3000) {
        astro4.style.display='flex'
        astro4.setAttribute('src','assets/images/astronautaBoost.png')
        astro4.style.animation='astroGravity 1.5s linear infinite'
        scrollBarText4.style.fontWeight="bold"
    }
}

window.onload= ()=> { scrollBarActived() }
rightSide.addEventListener('wheel', scrollBarActived);
rightSide.addEventListener('scroll', scrollBarActived);


scrollBarText1.addEventListener('click',()=> {
    rightSide.scrollTo(0,0)
})

scrollBarText2.addEventListener('click',()=> {
    rightSide.scrollTo(0,800)
})

scrollBarText3.addEventListener('click',()=> {
    rightSide.scrollTo(0,1700)
})

scrollBarText4.addEventListener('click',()=> {
    rightSide.scrollTo(0,3500)
})



/*screenMode script*/

let toogleScreenMode =document.querySelector('.toogleScreenMode')


function screenMode() {
    const rootStyle=document.documentElement.style


    if(toogleScreenMode.classList.contains('fa-toggle-off')) {
        toogleScreenMode.classList.replace('fa-toggle-off','fa-toggle-on')
        rootStyle.setProperty('--cor-primary','white')
        rootStyle.setProperty('--cor-text','#02162e')
        rootStyle.setProperty('--cor-text-opacity','#02162e')
        rootStyle.setProperty('--cor-hover-opacity','FBFBFB')
        rootStyle.setProperty('--cor-languageUsed-bg','#02162e')
        rootStyle.setProperty('--cor-languageUsed-p','rgb(91, 255, 206)')
    }
    else if (toogleScreenMode.classList.contains('fa-toggle-on')) {
        toogleScreenMode.classList.replace('fa-toggle-on','fa-toggle-off')
        rootStyle.setProperty('--cor-primary','#02162e')
        rootStyle.setProperty('--cor-text','white')
        rootStyle.setProperty('--cor-text-opacity','rgba(255, 255, 255, 0.5)')
        rootStyle.setProperty('--cor-hover-opacity','rgba(0, 0, 0, 0.253)')
        rootStyle.setProperty('--cor-languageUsed-bg','rgba(8, 148, 106, 0.384)')
        rootStyle.setProperty('--cor-languageUsed-p','rgb(91, 255, 206)')
    }

}

toogleScreenMode.addEventListener('click',screenMode)


/* translate to ING script */

let languageSelect=document.querySelector('.languageSelect')

let subtitle=document.querySelector('.titleArea p')

let boxAboutMeP=document.querySelector('.boxAboutMe p')

let skillBoxSubtitle=document.querySelector('.skillBoxSubtitle')

let resumeText=document.querySelector('.resumeComponents p')

let chapter1H1=document.querySelector('.chapter1 h2')
let chapter2H1=document.querySelector('.chapter2 h2')
let chapter3H1=document.querySelector('.chapter3 h2')
let chapter4H1=document.querySelector('.chapter4 h2')
let chapter1P=document.querySelector('.chapter1 p')
let chapter2P=document.querySelector('.chapter2 p')
let chapter3P=document.querySelector('.chapter3 p')
let chapter4P=document.querySelector('.chapter4 p')

let box1ProjectText=document.querySelector('.box1ProjectText')
let box2ProjectText=document.querySelector('.box2ProjectText')
let box3ProjectText=document.querySelector('.box3ProjectText')
let box4ProjectText=document.querySelector('.box4ProjectText')
let box5ProjectText=document.querySelector('.box5ProjectText')
let othersProjectText=document.querySelector('.othersProject p')

let congratsTextH1=document.querySelector('.congratsText h1');
let congratsTextP=document.querySelector('.congratsText p');
let iconsGameAreaH3=document.querySelectorAll('.iconsGameArea h3');

let gameInstructionsH3=document.querySelector('.gameInstructions h3');

let rightInstructionTxt=document.querySelector('.rightInstructionTxt');
let leftInstructionTxt=document.querySelector('.leftInstructionTxt');
let jumpInstructionTxt=document.querySelector('.jumpInstructionTxt');

let thanksTxt=document.querySelector('.thanksTxt');
let socialMediaTxt=document.querySelector('.socialMediaTxt p');


function translatePage () {
    if(languageSelect.value==='ingles'){
        subtitle.innerHTML='I am a <span class="distacWord">Fullstack</span> developer, passionate about learning and building. I develop projects with enthusiasm and dedication. Feel free to explore and learn more about my work.'

        scrollBarText1.innerText='About Me'
        scrollBarText2.innerText='Journey'
        scrollBarText3.innerText='Projects'
        scrollBarText4.innerText='Contact'

        boxAboutMeP.innerHTML=`My name is  <span class="distacWord">João Vitor</span>, <span class="distacWord">I am 22 years old, and I am a student of Systems Analysis and Development at Uninter</span>. Since always, my passion for technology has guided my path, and it was in programming that I found my true purpose. Creating code and finding solutions is not just a skill, but an incredible experience that drives me to seek innovation. I am excited to contribute my enthusiasm and knowledge to the world of technology.     </br>
        </br>I am someone who admires <span class="distacWord">humility</span> because I believe it is through it that space is opened to learn and grow. My <span class="distacWord">enthusiasm</span> for life and learning is something that always drives me. I face challenges with a <span class="distacWord">strong</span> will and <span class="distacWord">determination</span> that knows no bounds. For me, <span class="distacWord">character</span> is the foundation of everything - it guides my decisions, always seeking to act with <span class="distacWord">integrity and respect in everything I do.</span>`
    
        skillBoxSubtitle.innerText='Below are some of the technologies I use, hover over the icons and learn more'

        resumeText.innerText="Check out my skills and experiences"
    
        chapter1H1.innerText='Chapter 1: The Beginning';
        chapter1P.innerText="I am here to share a bit of my journey. At the age of 15, I decided that my future would be in medicine. But as life loves to surprise, at 17, after much study, an opportunity crossed my path: studying in Argentina. That's when I embarked on this adventure."     
        chapter2H1.innerText='Chapter 2: The Pandemic';
        chapter2P.innerText="However, in early 2020, the pandemic hit and turned my plans upside down. Faced with uncertainties, my parents asked me to return to Brazil. Back there, I immersed myself again in my studies, seeking a spot at a public university."
        chapter3H1.innerText='Chapter 3: Discoveries';
        chapter3P.innerText="It was during this period that a spark of creativity and entrepreneurship ignited in my life. Along with a friend, I embarked on the journey of opening a clothing brand. And it was in the midst of this process that I discovered a new, yet old passion: the digital world. Messing around with websites and design, I realized that technology had always been present in my life; after all, I had always been a gaming and computer enthusiast. This revelation was responsible for completely changing the course of my journey."
        chapter4H1.innerText='Chapter 4: New Horizons';
        chapter4P.innerText="I am currently finishing my degree in Systems Analysis and Development and taking courses focused on programming and improving my skills."
    
        box1ProjectText.innerText="Using Node.js, the application is responsible for displaying picture links only to registered users."
        box2ProjectText.innerText="Chat developed using SOCKET.IO with user registration and login."
        box3ProjectText.innerText="A simple project for developing skills in data filtering and database integration."
        box4ProjectText.innerText="Game developed in React Native using gravitational laws with user login and registration through an external API."
        box5ProjectText.innerText="Translator developed using JavaScript API requests translating from English to Brazilian Portuguese."
        othersProjectText.innerText="Others projects"


        congratsTextH1.innerText="Congratulations"
        congratsTextP.innerText="Click on the icons and connect with me"
        
        iconsGameAreaH3.forEach((e)=> {
            e.innerText='Link enabled +'
        })

        gameInstructionsH3.innerText="Hit the boxes to access my social media links"
        rightInstructionTxt.innerText="D - Right"
        leftInstructionTxt.innerText="E - Left"
        jumpInstructionTxt.innerText="W - Jump"

        socialMediaTxt.innerText="Click on the icons to connect with my social media networks."

        thanksTxt.innerText='Thanks to my entire family for providing me with all the support in my studies, to my dear wife for the support and trust she has placed in everything I do.'
    
    }

    else if(languageSelect.value==='portugues') {
        subtitle.innerHTML='Eu sou desenvolvedor  <span class="distacWord">Fullstack</span>, Apaixonado por aprender e construir. Desenvolvo projetos com entusiasmo e dedicação, navegue e conheça mais sobre meu trabalho.'

        scrollBarText1.innerText='Sobre Mim'
        scrollBarText2.innerText='Jornada'
        scrollBarText3.innerText='Projetos'
        scrollBarText4.innerText='Contato'

        boxAboutMeP.innerHTML=`Meu nome é <span class="distacWord">João Vitor</span>, tenho <span class="distacWord"> 22 anos e sou estudante de Análise e Desenvolvimento de Sistemas na Uninter</span>. Desde sempre, minha paixão pela tecnologia guiou meu caminho, e foi na programação que encontrei meu verdadeiro propósito. Criar códigos e encontrar soluções não é apenas uma habilidade, mas uma experiência incrível que me impulsiona a buscar inovação. Estou animado para contribuir com meu entusiasmo e conhecimento no mundo da tecnologia.
        <br><br>Sou alguém que admiro a <span class="distacWord">humildade</span>, pois acredito que é através dela que se abre espaço para aprender e crescer. Meu <span class="distacWord">entusiasmo</span> pela vida e pelo aprendizado é algo que sempre me impulsiona. Encaro os desafios com uma <span class="distacWord">vontade firme</span> e uma <span class="distacWord">determinação</span> que não conhece limites. Para mim, o <span class="distacWord">caráter</span> é a base de tudo - é ele que orienta minhas decisões, sempre buscando agir com <span class="distacWord">integridade e respeito em tudo o que faço.</span>`
    
        skillBoxSubtitle.innerText='Abaixo estão algumas das tecnologias que utilizo passe pelos icones e saiba mais.'
    
        resumeText.innerText="Confira minhas habilidades e experiências"

        chapter1H1.innerText='Capítulo 1: O Início';
        chapter1P.innerText="Estou aqui para compartilhar um pouco da minha jornada. Aos 15 anos, decidi que meu futuro estaria na medicina. Mas como a vida adora surpreender, aos 17, após muito estudo uma oportunidade cruzou meu caminho: estudar na Argentina. Foi aí que embarquei nessa aventura."     
        chapter2H1.innerText='Capítulo 2: A Pandemia';
        chapter2P.innerText="No entanto, no início de 2020 a pandemia chegou e virou meus planos de cabeça para baixo. Diante as incertezas, meus pais me pediram para retornar ao Brasil. Onde de volta, mergulhei novamente nos estudos, buscando uma vaga em uma universidade pública."
        chapter3H1.innerText='Capítulo 3: Descobertas';
        chapter3P.innerText="Foi nesse período então que uma faísca de criatividade e empreendedorismo acendeu em minha vida. Junto com um amigo, embarquei na jornada de abrir uma marca de roupas. E foi no meio desse processo que descobri uma nova paixão já antiga: o mundo digital. Mexendo com sites e design, percebi que a tecnologia sempre esteve presente em minha vida, afinal, sempre fui um aficionado por games e computadores. Sendo essa revelação responsável por mudar completamente o rumo da minha trajetória."
        chapter4H1.innerText='Capítulo 4: Novos Horizontes';
        chapter4P.innerText="Atualmente estou finalizando a universidade de Análise e Desenvolvimento de Sistemas e realizando cursos voltados para programação e aprimoramento das minhas skills."
    
        box1ProjectText.innerText="Utilizando NodeJS a aplicação é responsável por exibir link de pictures somente para usuários cadastrados"
        box2ProjectText.innerText="Chat desenvolvido usando SOCKET.IO com cadastro e login de usuário."
        box3ProjectText.innerText="Projeto simples para desenvolvimento em habilidades como filtragem de dados e vinculação com banco de dados."
        box4ProjectText.innerText="Game desenvolvido em ReactNative utilizando leis gravitacionais com login e cadastro de usuário por API externa."
        box5ProjectText.innerText="Tradutor desenvolvido utilizando requisições de API javascript traduzindo de ING para PT-BR."
        othersProjectText.innerText="Outros projetos"
    
        congratsTextH1.innerText="Parabéns"
        congratsTextP.innerText="Clique nos icones e se conecte comigo"

        iconsGameAreaH3.forEach((e)=> {
            e.innerText='Link ativado +'
        })

        gameInstructionsH3.innerText="Acerte as caixas para acessar os links de minhas redes sociais"
        rightInstructionTxt.innerText="D - Direita"
        leftInstructionTxt.innerText="E - Esquerda"
        jumpInstructionTxt.innerText="W - Pular"

        socialMediaTxt.innerText="Clique nos icones para se conectar com as minhas redes sociais"

        thanksTxt.innerText='Agradecimento para toda a minha familia que me deu todo apoio em meus estudos, a minha querida esposa pelo suporte e confiança depositada em tudo o que faço.'
    
    }
}

languageSelect.addEventListener('change',translatePage)



/* Game script */

let astro=document.querySelector('.astroGame');
let gameArea=document.querySelector('.gameArea');
let iconsGameArea=document.querySelector('.iconsGameArea');
let playGame=document.querySelector('.playGame');
let githubIcon=document.querySelector('.gitHub');
let whatsAppIcon=document.querySelector('.wpp');
let linkedin=document.querySelector('.linkedin');
let email=document.querySelector('.email');

let iconGameBox1=document.querySelector('.iconGameBox1');
let iconGameBox2=document.querySelector('.iconGameBox2');
let iconGameBox3=document.querySelector('.iconGameBox3');
let iconGameBox4=document.querySelector('.iconGameBox4');

let linkText1=document.querySelector('.linkText1');
let linkText2=document.querySelector('.linkText2');
let linkText3=document.querySelector('.linkText3');
let linkText4=document.querySelector('.linkText4');

let link1=document.querySelector('.iconGameBox1 a');
let link2=document.querySelector('.iconGameBox2 a');
let link3=document.querySelector('.iconGameBox3 a');
let link4=document.querySelector('.iconGameBox4 a');


let congratsText=document.querySelector('.congratsText');


function detectColision (el1, el2,color,link,linkHref,linkText) { 
    let coinSound=new Audio('assets/images/coin.mp3');
    let rect1 = el1.getBoundingClientRect();
    let rect2 = el2.getBoundingClientRect();

    let colision = !(
        rect1.bottom < rect2.top || 
        rect1.top > rect2.bottom || 
        rect1.right < rect2.left || 
        rect1.left > rect2.right
    ); 

    if(colision) {
        el2.style.color = color;
        link.setAttribute('href',linkHref)
        linkText.style.display = 'flex';
        setTimeout(()=> {
            linkText.style.display='none';
        },1000)
        coinSound.play()
    }

    console.log(colision)
}


    let moveAstroX=0;
    let moveAstroY=0;
    
    let linkGitGub='https://github.com/joaosilva25';
    let linkWpp='https://wa.me/11999053670';
    let linkLinkedin='https://www.linkedin.com/in/jo%C3%A3o-vitor-silva-907618275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    let linkEmail='mailto:joaosilva2505@outlook.com'

    let colision1=link1.hasAttribute('href')
    let colision2=link2.hasAttribute('href')
    let colision3=link3.hasAttribute('href')
    let colision4=link4.hasAttribute('href')

    let jumpSound=new Audio('assets/images/jump.mp3');
    jumpSound.volume=0.2;
    let winSound=new Audio('assets/images/win.mp3');

    function astroMove(e) {

        if(e.key==='d' && moveAstroX<=gameArea.clientWidth*0.85) {
            moveAstroX+=10;
            astro.style.transform='scaleX(1)';
            astro.style.left=`${moveAstroX}px`;
        }
        else if(e.key==='a' && moveAstroX>=0) {
            moveAstroX-=10;
            astro.style.transform='scaleX(-1)';
            astro.style.left=`${moveAstroX}px`;
        }
        else if(e.key==='w' && moveAstroY>=-20) {
            moveAstroY-=20;
            astro.style.top=`${moveAstroY}px`;

            detectColision(astro,githubIcon,"black",link1,linkGitGub,linkText1)
            colision1=link1.hasAttribute('href')
            detectColision(astro,whatsAppIcon,"#25D366",link2,linkWpp,linkText2)
            colision2=link2.hasAttribute('href')
            detectColision(astro,linkedin,"#0e76a8",link3,linkLinkedin,linkText3)
            colision3=link3.hasAttribute('href')
            detectColision(astro,email,"red",link4,linkEmail,linkText4)
            colision4=link4.hasAttribute('href')


            let gravityInterval=setInterval(()=> {
                if (moveAstroY <0) {
                    moveAstroY += 2;
                    astro.style.top = `${moveAstroY}px`;
                    jumpSound.play();
                }
                else {
                    clearInterval(gravityInterval)
                }
                console.log(moveAstroY)
            },10)

        }
        console.log(moveAstroX)

        if(colision1 && colision2 && colision3 && colision4) {
            congratsText.style.display='block'
            winSound.play()
        }

    }

    
/*joystickPlay */

let btnLeft=document.querySelector('.btnLeft');
let btnRight=document.querySelector('.btnRight');
let btnJump=document.querySelector('.btnJump');

function astroMoveRight() {
    if(moveAstroX<=gameArea.clientWidth*0.85) {
        moveAstroX+=20
        astro.style.transform='scaleX(1)';
        astro.style.left=`${moveAstroX}px`;
    }
}

function astroMoveLeft() {
    if(moveAstroX>=0) {
        moveAstroX-=20
        astro.style.transform='scaleX(-1)';
        astro.style.left=`${moveAstroX}px`;
    }
}

function astroJump() {
    moveAstroY-=20;
    astro.style.top=`${moveAstroY}px`;

    detectColision(astro,githubIcon,"black",link1,linkGitGub,linkText1)
    colision1=link1.hasAttribute('href')
    detectColision(astro,whatsAppIcon,"#25D366",link2,linkWpp,linkText2)
    colision2=link2.hasAttribute('href')
    detectColision(astro,linkedin,"#0e76a8",link3,linkLinkedin,linkText3)
    colision3=link3.hasAttribute('href')
    detectColision(astro,email,"red",link4,linkEmail,linkText4)
    colision4=link4.hasAttribute('href')

    if(colision1 && colision2 && colision3 && colision4) {
        congratsText.style.display='block'
        winSound.play()
    }


    let gravityInterval=setInterval(()=> {
        if (moveAstroY <0) {
            moveAstroY += 2;
            astro.style.top = `${moveAstroY}px`;
            jumpSound.play();
        }
        else {
            clearInterval(gravityInterval)
        }
        console.log(moveAstroY)
    },10)
}







let moveGitHub=0
let moveWpp=0
let moveLinkedin=0
let moveEmail=0

const iconSong=new Audio('assets/images/bonus.mp3');



playGame.addEventListener('click',()=> {
    playGame.style.display='none';


        let githubIconInterval=setInterval(()=> {
            githubIcon.style.opacity='1.0'
            
            if(moveGitHub<200) {
                moveGitHub+=20;
                iconGameBox1.style.transform=`translateY(${moveGitHub}px)`

            }
            else {
                moveGitHub=0
                iconGameBox1.style.transform=`translateY(${moveGitHub}px)`
            }

            if(moveGitHub===200 && moveAstroX <= 10) {
                clearInterval(githubIconInterval);
                githubIcon.style.cursor='pointer'
                iconSong.play();
            }


        },200)


    let whatsAppIconInterval=setInterval(()=> {

        whatsAppIcon.style.opacity='1.0'

        if(moveWpp<200) {
            moveWpp+=20;
            iconGameBox2.style.transform=`translateY(${moveWpp}px)`
        }
        else {
            moveWpp=0
            iconGameBox2.style.transform=`translateY(${moveWpp}px)`
        }

        if(moveWpp===200  && moveAstroX >= 100 && moveAstroX <= 170) {
            clearInterval(whatsAppIconInterval)
            whatsAppIcon.style.cursor='pointer'
            iconSong.play();
        }

    },270)

    let linkedinInterval=setInterval(()=> {

        linkedin.style.opacity='1.0'
        
        if(moveLinkedin<200) {
            moveLinkedin+=20;
            iconGameBox3.style.transform=`translateY(${moveLinkedin}px)`
        }
        else {
            moveLinkedin=0
            iconGameBox3.style.transform=`translateY(${moveLinkedin}px)`
        }

        if(moveLinkedin===200  && moveAstroX >= 230 && moveAstroX <= 320) {
            clearInterval(linkedinInterval)
            linkedin.style.cursor='pointer'
            iconSong.play();
        }
    },250)

    let emailInterval=setInterval(()=> {

        email.style.opacity='1.0'
        
        if(moveEmail<200) {
            moveEmail+=20;
            iconGameBox4.style.transform=`translateY(${moveEmail}px)`
        }
        else {
            moveEmail=0
            iconGameBox4.style.transform=`translateY(${moveEmail}px)`
        }

        if(moveEmail===200  && moveAstroX >= 360) {
            clearInterval(emailInterval)
            email.style.cursor='pointer'
            iconSong.play();
        }
       

    },230)

  

})


document.addEventListener('keydown',astroMove);


/*icon mobile devices script */ 

