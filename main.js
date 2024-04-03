var canvas = document.getElementById('canvas').getContext("2d")
canvas.imageSmoothingEnabled = false

document.addEventListener("click", (e)=>{
  
});

document.addEventListener('keydown',(e)=>{
  
})

document.addEventListener('keyup', (e)=>{
  
})

let cenaCorrente = {}
function mudaCena(cena){
    cenaCorrente = cena
}


let bullets = 15

let groupShoot = []
let shoots = {
  draw(){
    groupShoot.forEach((shoot)=>{
        shoot.draw()
      })
  },
  update(){
    groupShoot.forEach((shoot)=>{
        shoot.move()
        if(shoot.x>=1400){
          groupShoot.splice(shoot[0],1)
        }
      })
  },
}

let grupoZumbis = []
let zumbis ={
  spawZumbi(){
    this.time +=1
    pos_Y = Math.random() *(500 - 80) + 80
    if(this.time>=60){
      grupoZumbis.push(new Zumbi(1400, pos_Y, 150, 150, "assets/zumbidesenhado.png"))
      this.time=0
    }
  },
  destroyZumbi(){
    
  },

  draw(){
    grupoZumbis.forEach((zumbi)=>{
        zumbi.draw()
      })
  },
  update(){
    this.spawZumbi()
    this.destroyZumbi()
    grupoZumbis.forEach((zumbi)=>{
      zumbi.move()
      if(zumbi.x < 220){
        grupoZumbis.splice(grupoZumbis.indexOf(zumbi),1)
        mudaCena(gameOver)
      }
    })
  }
}

let infinityBg = {
    bg: new Obj(0,0,1300,600,"assets/fundojogo.png"),
 
    bg3: new Obj(-2600,0,1300,600,"assets/fundo.png"),
  draw(){
    this.bg.draw()
  },

}

let menu = {
    titulo: new Text("Plantas vs Zumbis"),
    titulo2: new Text("Click para Iniciar"),
    planta: new Obj(320,350,80,120, "assets/planta.png"),
    gamestart: new Obj(0,0,1300,600,"assets/GAMESTART.jpeg"),
    
  click(){
   
  },

  draw(){
    infinityBg.draw()
    this.titulo.draw_text(80,"Tahoma",430,200,"white")
    this.titulo2.draw_text(40,"Verdana",550,400,"white")
    this.planta.draw()
    this.gamestart.draw()
  },
  update(){
    
  },
}

let game = {
  

  click(){
    
  },

  moveplanta(event){
    
  },

  draw(){
    
  },
  
  update(){
    
  },
}

let game_over_img = {
    bg : new Obj(0,0,1300,600,"assets/GAMEOVER.jpeg"),
  draw(){
    this.bg.draw()
  }
}

let gameOver = {
    placar_txt: new Text("Pontos: "),
    placar: new Text(pts),
    lbl_game_over: new Text("OS ZUMBIS COMERAM SEU CÉREBRO🧟"),
  

  draw(){
    infinityBg.draw()
    this.placar_txt.draw_text(30,"Tahoma",1100,50,"white")
    this.placar.draw_text(30,"Tahoma",1210,50,"white")
    this.lbl_game_over.draw_text(50,"Tahoma",320,300,"white")
    game_over_img.draw()
    som1.pause()
    som2.play()
    som3.pause()
  },
  update(){
    infinityBg.moveBg()
    this.placar.update_text(pts)
  },

  limpa_cena(){
    pts = 0
    bullets = 15
    grupoZumbis = []
    groupShoot = []    
  },

  click(){
    this.limpa_cena()
    mudaCena(menu)

  }
}

function main(){
  canvas.clearRect(0,0,1300,600)
  cenaCorrente.draw()
  cenaCorrente.update()
  requestAnimationFrame(main)
}

mudaCena(menu)
main()