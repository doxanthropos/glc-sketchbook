function onGLC(glc) {
    glc.loop();
    // glc.size(400, 400);
    // glc.setDuration(5);
    // glc.setFPS(20);
    glc.setMode("single");
    glc.setEasing(true);
    // glc.setMaxColors(256);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    list.addLine({
        x0: 0,
        y0: [0,400],
        x1: [0,400],
        y1: 400
    });
    list.addLine({
        x0: [0,400],
        y0: 400,
        x1: 400,
        y1: [400,0]
    });
    list.addLine({
        x0: 400,
        y0: [400,0],
        x1: [400,0],
        y1: 0
    });
    list.addLine({
        x0: [400,0],
        y0: 0,
        x1: 0,
        y1: [0,400]
    })



}