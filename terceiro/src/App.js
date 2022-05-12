import {useState} from "react";
function App() {
 
  const [produto, setProduto] = useState(
    [
      {
        id:500,
        nome:"Mouse",
        categoria:"informática",
        preco:50.50
      },
      {
        id:501,
        nome:"Teclado",
        categoria:"informática",
        preco:150.90
      }
    ]
  );

  return (
    <div>
     <button 
     onClick={() => {
       let id = prompt("Entre com o id do produto");
       let nome = prompt("Entre com o nome do produto");
       let categoria = prompt("Entre com a categoria do produto");
       let preco = prompt("Entre com o preco do produto");

      setProduto(
        produto.concat(
        {
          id:id,
          nome:nome,
          categoria:categoria,
          preco:preco
        })
      )
     }}
     >
       Adicionar Produto</button>


      
        
     <h2>Produto Cadastrados</h2>


     {produto.map((item,index) => (
       
        <div key={index}>

       <h3>{item.nome}</h3>
       <ul>
         <li>Código do Produto: {item.id}</li>
         <li>Categoria do produto: {item.categoria}</li>
         <li>Preço do Produto: {item.preco}</li>
       </ul>
        </div>

     ))}
      </div>
  );
}

export default App;
