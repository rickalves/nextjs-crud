import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import {AddIcon, SearchIcon } from "../components/Icons";
import Layout from "../components/Layout";
import NewForm from "../components/NewForm";
import Tabela from "../components/Tabela";
import Estudante from "../core/Estudante";

export default function Home() {

  const [estudante, setEstudante] = useState<Estudante>(Estudante.empty())
  const [showForm, setShowForm] = useState(false)
  
  const estudantes = [
    new Estudante('Rick', 17, '123342'),
    new Estudante('Mariana', 13, '567867'),
    new Estudante('Clara', 16, '678908'),
    new Estudante('Maria', 14, '568908'),
    new Estudante('Lara', 17, '345612'),
    new Estudante('João', 16, '678903'),
    new Estudante('Clara', 16, '098768')
  ]
  
  function showModal(option){
    const modal = document.querySelector('#modal')
    modal.classList.toggle('opacity-0')
    if(option){
      modal.classList.add('pointer-events-auto')
    }else{
      modal.classList.remove('pointer-events-auto')
      modal.classList.add('pointer-events-none')
    }
  }

  function estudanteSelecionado(estudante: Estudante){
    setEstudante(estudante)
    setShowForm(true)
  }

  function estudanteExcluido(estudante: Estudante){
    console.log('Foi excuido', estudante.nome)
  }

  function salvaEstudante(estudante: Estudante){
    console.log("salvar:"+estudante.nome) 
    setShowForm(false)
  }

  function novoEstudante(){
    setEstudante(Estudante.empty())
    setShowForm(true)
  }

   function cancelar(){
    setShowForm(false)
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
                    onClick={() => novoEstudante()}
                  >
                    {AddIcon}Novo
                  </Button>
                </div>
              </div>
              <Tabela estudantes={estudantes} 
                estudanteSelecionado={estudanteSelecionado}
                estudanteExcluido={estudanteExcluido}
              />
  
          {showForm ? (
            <NewForm estudante={estudante} estudanteNovo={salvaEstudante} cancelar={cancelar}/>
          ):false}
        </Layout>
  )
}