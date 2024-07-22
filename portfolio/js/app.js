var spans =document.querySelectorAll("h1 span")
spans.forEach(span=> span.addEventListener('mouseover',function(e){
    span.classList.add("animate__animated", "animate__rubberBand")
}))
var spans =document.querySelectorAll("h1 span")
spans.forEach(span=> span.addEventListener('mouseout',function(e){
    span.classList.remove("animate__animated", "animate__rubberBand")
}))

var barhtml=document.querySelectorAll('.bar-html')
barhtml.forEach(bar=>window.addEventListener('load',glob(bar,95,2080)))

var barcss=document.querySelectorAll('.bar-css')
barcss.forEach(bar=>window.addEventListener('load',glob(bar,90,2160)))

var barjs=document.querySelectorAll('.bar-javascript')
barjs.forEach(bar=>window.addEventListener('load',glob(bar,80,2320)))


function glob(barr,size,TO){
    let width=0;
    let called = false;

    let interval=setInterval(()=>{

        if(width<size){
            barr.style.width = `calc(${width}% + 1%)`;
            width+=1;
            called =  false;
        }
        else if(called == false){
            
            setTimeout(()=>{
                console.log("CALL");
                width=-1;
                barr.style.width = `calc(${width}% + 1%)`;
                
            },TO)
            called = true;
        }

    },16)

}

