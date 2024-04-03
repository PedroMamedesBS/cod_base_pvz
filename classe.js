class Obj{

    set_visible = true
  
    constructor(x,y,w,h, image){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = image
    }
  
    draw(){
        if (this.set_visible) {
            var img = new Image()
            img.src = this.image
            canvas.drawImage(img, this.x, this.y, this.w, this.h)
          }
    }
  
    collide(obj){
     
    }
  }
  
  class Text{
   
    constructor(text){
     
    }
    draw_text(size, font, x, y, color){
      
    }
    update_text(valor){
      this.texto = valor
    }
  }
  
  class Shoot extends Obj{
    move(){
      this.x +=10
    }
  }
  
  class Zumbi extends Obj{
    
    move(){
     
    }
  }
  class Img extends Obj{
    
  }