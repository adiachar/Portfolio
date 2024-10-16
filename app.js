let intro = "My name is ADITHYA G, I am an under Graduate student at Mangalore Institute Of Technology And Engineering";
let h1 = document.querySelector("h1");

console.log("connected");

changeH1();

function changeH1()
{   
    let i = 0;
    let a = setInterval(()=> {
        h1.innerText = h1.innerHTML+ intro[i];
        i++;
        if( i == intro.length)
        {   
            clearInterval(a);
        }
    }, 50);
}


