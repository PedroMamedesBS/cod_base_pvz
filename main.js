var canvas = document.getElementById('canvas').getContext("2d")
canvas.imageSmoothingEnabled = false

document.addEventListener("click", (e)=>{
  if(cenaCorrente.click){
    cenaCorrente.click()
  }
});

document.addEventListener('keydown',(e)=>{
  if(cenaCorrente.moveplanta){
    cenaCorrente.moveplanta(e)
}
})

document.addEventListener('keyup', (e)=>{
  if(cenaCorrente.moveplanta){
    cenaCorrente.moveplanta(e)
}
})

let cenaCorrente = {}
function mudaCena(cena){
  
}

let pts = 0 

let groupShoot = []
let shoots = {
  draw(){
    
  },
  update(){
    
  },
}

let grupoZumbis = []
let zumbis ={
  
  spawZumbi(){
    
  },
  destroyZumbi(){
    groupShoot.forEach((shoot)=>{
      grupoZumbis.forEach((zumbi)=>{
        if(shoot.collide(zumbi)){
          groupShoot.splice(groupShoot.indexOf(shoot),1)
          grupoZumbis.splice(grupoZumbis.indexOf(zumbi),1)
          bullets = 15
          pts += 1
          
          
        }
      })
    })
  },

  draw(){
    
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
  
  draw(){
    
  },

}

let menu = {
   
  click(){
    mudaCena(game)
  },

  draw(){
    
  },
  update(){
    
  },
}

let game = {
  placar_txt: new Text("Pontos: "),
  placar: new Text(pts),
  

  click(){
    if(bullets > 0){
      bullets -= 1
      
      groupShoot.push(new Shoot((this.planta.x+60),(this.planta.y+this.planta.h/2)-30,30,30, "assets/tiro.png"))
    }
  },

  moveplanta(event){
    const speed = 60;
    if (event.key === "w" && this.planta.y > 40) {
        this.planta.y -= speed;
      } else if (event.key === "s" && this.planta.y < 561 - this.planta.h) {
        this.planta.y += speed;
      }console.log(event)
  },

  draw(){
    infinityBg.draw()
    this.placar_txt.draw_text(30,"Tahoma",1100,50,"white")
    this.placar.draw_text(30,"Tahoma",1210,50,"white")
    this.planta.draw()
    shoots.draw()
    zumbis.draw()
  },
  
  update(){
    shoots.update()
    zumbis.update()
    this.placar.update_text(pts)
  },
}

let game_over_img = {
  
  draw(){
    
  }
}

let gameOver = {
  placar_txt: new Text("Pontos: "),
  placar: new Text(pts),
  
  

  draw(){
    
  },
  update(){
    
  },

  limpa_cena(){
   
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