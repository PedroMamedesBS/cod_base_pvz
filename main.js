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
   
  click(){
   
  },

  draw(){
    
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
    pts = 0
    bullets = 15
    grupoZumbis = []
    groupShoot = []   
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