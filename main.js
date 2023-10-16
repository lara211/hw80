document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('olympicSymbol');
    const ctx = canvas.getContext('2d');

    
    canvas.width = 400;
    canvas.height = 400;

    
    ctx.lineWidth = 6;

    
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2);
    ctx.strokeStyle = '#0074D9';
    ctx.stroke();

    
    ctx.beginPath();
    ctx.arc(150, 75, 50, 0, Math.PI * 2);
    ctx.strokeStyle = '#111111';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(225, 75, 50, 0, Math.PI * 2);
    ctx.strokeStyle = '#FF4136';
    ctx.stroke();

   
    ctx.beginPath();
    ctx.arc(112, 110, 50, 0, Math.PI * 2);
    ctx.strokeStyle = '#FFDC00';
    ctx.stroke();

    
    ctx.beginPath();
    ctx.arc(187, 110, 50, 0, Math.PI * 2);
    ctx.strokeStyle = '#2ECC40';
    ctx.stroke();
});