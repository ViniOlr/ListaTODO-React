import React from "react";
import { DivForm } from "../Style/styled";

const FormTarefas = (props)=>{
    return(
        <DivForm>
            <form action="post" onSubmit={props.addTarefa}>
                <div>
                    <input type="text" name="titulo" placeholder="Título" 
                        value={props.tarefa.titulo} 
                        onChange={props.digit} 
                        />
                </div>
                <div>
                    <input type="text" name="setor" placeholder="Setor" 
                        value={props.tarefa.setor} 
                        onChange={props.digit} 
                        />
                </div>
                <div>
                    <textarea name="descricao" placeholder="Descrição"
                        value={props.tarefa.descricao}
                        onChange={props.digit}
                        ></textarea>
                </div>
                <button type="submit">Adicionar</button>
            </form>
        </DivForm>
    )
};

export default FormTarefas;