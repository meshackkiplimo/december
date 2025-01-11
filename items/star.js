function drawStar(ctx,x,y,size){
    const top = y - size /2
    const left = x - size / 2
    ctx.strokeRect(top,left,size,size)

    const radius = size / 2
    const pointCount = 5;

    ctx.beginPath()
    for(let i = 0; i < pointCount; i++){
        const angle = (i/pointCount) * Math.PI * 2 ;
        const surfacex = x+Math.cos(angle ) * radius 
        const surfacey = y+Math.sin(angle ) * radius
        ctx.lineTo(surfacex, surfacey)

      
    }
    ctx.fill()

    }

