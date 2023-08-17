const Kbot = require("./Kbot");

/*console.log("Saludar a Andrés en idioma default".toUpperCase());
let kbot = new Kbot();
console.log(kbot.saludar("Andrés") == "Buenos días Andrés");

kbot = new Kbot("EN");
console.log("Saludar a Andrés en ingles".toUpperCase());
console.log(kbot.saludar("Andrés") == "Good morning Andrés");

console.log("Saludar a Andrés en espanol por la tarde".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Andrés", 14)=="Buenas tardes Andrés");

console.log("Saludar a Juan en espanol por la noche".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Juan", 20)=="Buenas noches Juan");*/

describe("Saludar Español".toUpperCase(), () => {
    //Saludar buenos dias en español
    it("Saludar a Andrés en español por la mañana", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Andrés",5) 
        expect(resultado).toEqual("Buenos días Andrés");
    });
    //Saludar buenos tarde en español

    it("Saludar a Andrés en espanol por la tarde", () => {

        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 14)
        expect(resultado).toEqual("Buenas tardes Andrés");
    });
    //Saludar buenas noches en español
    it("Saludar a Andrés en espanol por la noche", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 21)
        expect(resultado).toEqual("Buenas noches Andrés");
    });

    
  });
  describe("Saludar en Ingles".toUpperCase(),()=>{
 //Saludar buenos dias en Ingles
 it("Saludar Andres por la mañana en Ingles", () => {
    let kbot = new Kbot("EN");
    let resultado = kbot.saludar("Andrés",5) 
    expect(resultado).toEqual("Good morning Andrés");
   
});
 //Saludar buenas Tardes en Ingles
 it("Saludar Andres por la tarde en Ingles", () => {
    let kbot = new Kbot("EN");
    let resultado = kbot.saludar("Andrés",13) 
    expect(resultado).toEqual("Good afternoon Andrés");
});
//saludar buenas noches en Ingles
it("Saludar Andres por la noche en Ingles",()=>{
    let kbot=new Kbot("EN");
    let resultado=kbot.saludar("Andrés",21);
    expect(resultado).toEqual("Good evening Andrés");
});
  });