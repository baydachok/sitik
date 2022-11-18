var running = false;

function handleMouseMove(event) {
      if(!running) return;
      var dot, eventDoc, doc, body, pageX, pageY;
      event = event || window.event; // IE-ism
      if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
        event.pageX = event.clientX +(doc && dc.scrollLeft || body && body.scrollLeft || 0) -(doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +(doc && doc.scrollTop  || body && body.scrollTop  || 0) -(doc && doc.clientTop  || body && body.clientTop  || 0 );
      }
      dot = document.createElement('div');
      dot.className = "dot";
      dot.style.left = event.pageX + "px";
      dot.style.top = event.pageY + "px";
      document.body.appendChild(dot);
}
function clearAllDot() {
    let elements = document.getElementsByClassName("dot");
    while(elements.length > 0) {
        elements[0].parentElement.removeChild(elements[0]);
    }
}
function draw() {  
    running = !running;
    if(!running) clearAllDot();
}
window.onload = function() {
    document.onmousemove = handleMouseMove; 
}