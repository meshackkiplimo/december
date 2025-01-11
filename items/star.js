function drawStar(ctx,x,y,size,hue){
    // const top = y - size /2
    // const left = x - size / 2
    // ctx.strokeRect(top,left,size,size)

    const outerRadius = size / 2
    const innerRadius = outerRadius / 2
    const pointCount = 10;

    ctx.beginPath()
    for(let i = 0; i < pointCount; i++){
        const radius = i % 2 === 0 ? outerRadius : innerRadius
        const angle = (i/pointCount) * Math.PI * 2 ;
        const surfacex = x+Math.sin(angle ) * radius 
        const surfacey = y-Math.cos(angle ) * radius
        ctx.lineTo(surfacex, surfacey)

      
    }
    ctx.fillStyle = color.normal(hue)
    ctx.fill()

    }

