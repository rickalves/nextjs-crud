import Button from "../components/Button";
import Form from "../components/Form";
import { AddCustomer, SearchIcon } from "../components/Icons";
import Layout from "../components/Layout";
import New from "../components/New";
import Tabela from "../components/Tabela";
import Estudante from "../core/Estudante";

export default function Home() {

  const estudantes = [
    new Estudante('Rick', 17, '123342'),
    new Estudante('Mariana', 13, '567867'),
    new Estudante('Clara', 16, '678908'),
    new Estudante('Maria', 14, '568908'),
    new Estudante('Lara', 17, '345612'),
    new Estudante('João', 16, '678903'),
    new Estudante('Clara', 16, '098768')
  ]
  
  function estudanteSelecionado(estudante: Estudante){
    console.log(estudante.nome)
  }
  function estudanteExcluido(estudante: Estudante){
    console.log('Foi excuido', estudante.nome)
  }

  return (
        <Layout title="Cadastro de Estudantes">
          <div className={`
            grid grid-cols-12 py-5 items-end
          `}>
            <Form />
            <div className="col-span-12 lg:col-span-3 mt-2 flex gap-2">
             <Button title="Buscar">
                {SearchIcon}Buscar
              </Button>
              <Button title="Novo"
                onClick={() => {
                  const modal = document.querySelector('#modal')
                  modal.classList.toggle('opacity-0')
                  modal.classList.add('pointer-events-auto')
                }}
              >
                {AddCustomer}Novo
              </Button>
            </div>
          </div>
          <Tabela estudantes={estudantes} 
            estudanteSelecionado={estudanteSelecionado}
            estudanteExcluido={estudanteExcluido}
          />
          <New />
        </Layout>
  )
}