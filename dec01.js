function onGLC(glc) {
    glc.loop();
    // glc.size(400, 400);
    // glc.setDuration(5);
    // glc.setFPS(20);
    glc.setMode("bounce");
    glc.setEasing(true);
    // glc.setMaxColors(256);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    for(i=0;i<400;i+=20){
        list.addLine({
            x0: 0,
            y0: [i,400],
            x1: [i,400],
            y1: 400
        });
        list.addLine({
            x0: 400,
            y0: [400-i,000],
            x1: [400-i,000],
            y1: 0
        });
    };
    list.addCircle({
        x: 200,
        y: 200,
        radius: [50,150]
    });
}