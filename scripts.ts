const colordisplay = document.getElementById('colorhere');
const credits = document.getElementById('anajo3an');
const button = document.getElementById('gencolor');

const everything = document.getElementById('stuff');

let randomcolor:string;

let colorname:any;

let GetRandomColor = () : string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

async function GetColorName(hexcolor: string): Promise<string> {
    const cleanedhex = hexcolor.replace("#", " ").toUpperCase();
    const result = await fetch(`https://www.thecolorapi.com/id?hex=${cleanedhex}`);
    let data = await result.json();

    if (!data.name || !data.name.value) {
        console.error("Invalid API response:", data);
        return "Unknown Color";
    }
    return data.name.value;
}


button?.addEventListener('click', async function() {
    if (colordisplay) {
        randomcolor = GetRandomColor();
        colorname = await GetColorName(randomcolor);
        colordisplay.style.display = "flex";
        colordisplay.style.alignItems = "center"; // Styling the buttons
        colordisplay.style.justifyContent = "center";
        colordisplay.style.textAlign = "center";
        colordisplay.style.backgroundColor = randomcolor;
        if (everything) {
            everything.style.backgroundColor = randomcolor;
        }
        colordisplay.innerText = `${randomcolor} ${colorname}`
    }
});
if (credits) {
    let today = new Date();
    let date = ('0' + today.getDate()).slice(-2) + '/' + ('0' + (today.getMonth()+1)).slice(-2) + '/' + today.getFullYear();
    credits.innerHTML += ` <br><span id="skibidi">${date}</span>`;
}