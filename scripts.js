var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const colordisplay = document.getElementById('colorhere');
const credits = document.getElementById('anajo3an');
const button = document.getElementById('gencolor');
const everything = document.getElementById('stuff');
let randomcolor;
let colorname;
let GetRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
function GetColorName(hexcolor) {
    return __awaiter(this, void 0, void 0, function* () {
        const cleanedhex = hexcolor.replace("#", " ").toUpperCase();
        const result = yield fetch(`https://www.thecolorapi.com/id?hex=${cleanedhex}`);
        let data = yield result.json();
        if (!data.name || !data.name.value) {
            console.error("Invalid API response:", data);
            return "Unknown Color";
        }
        return data.name.value;
    });
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (colordisplay) {
            randomcolor = GetRandomColor();
            colorname = yield GetColorName(randomcolor);
            colordisplay.style.display = "flex";
            colordisplay.style.alignItems = "center"; // Styling the buttons
            colordisplay.style.justifyContent = "center";
            colordisplay.style.textAlign = "center";
            colordisplay.style.backgroundColor = randomcolor;
            if (everything) {
                everything.style.backgroundColor = randomcolor;
            }
            colordisplay.innerText = `${randomcolor} ${colorname}`;
        }
    });
});
if (credits) {
    let today = new Date();
    let date = ('0' + today.getDate()).slice(-2) + '/' + ('0' + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();
    credits.innerHTML += ` <br><span id="skibidi">${date}</span>`;
}
