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
    
  },
  destroyZumbi(){
    
  },

  draw(){
    
  },
  update(){
    
  }
}

let infinityBg = {
  
  draw(){
    
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
  
  draw(){
    
  }
}

let gameOver = {
  
  

  draw(){
    
  },
  update(){
   
  },

  limpa_cena(){
      
  },

  click(){
    

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