class Carro {
    Marca: string;
    Modelo: string;
    Categoria: string;
    Ano: number;
    Quilometragem: number;
    Valor: number;

    
    
    constructor(Marca: string, Modelo: string, Categoria: string, Ano: number, Quilometragem: number, Valor: number){
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Categoria = Categoria;
        this.Ano = Ano;
        this.Quilometragem = Quilometragem;
        this.Valor = Valor;
    }
}

const carro1 = new Carro("toyota", "Corolla", "Sedan", 2022, 15000, 170000)
console.log(carro1)


function Get() {

    return fetch('https://apigenerator.dronahq.com/api/8V3TK1Jw/Carro')
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  
  }


  async function postData(url = 'https://apigenerator.dronahq.com/api/8V3TK1Jw/Carro/2', data = {}) {

    const response = await fetch(url, {
  
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
  
  }
  
  
  postData('https://apigenerator.dronahq.com/api/8V3TK1Jw/Carro/2', carro1 /* OBJETO A SER USADO */)
  
    .then((data) => {
  
      console.log(data);  
  
  });