import React from "react";
import { DivTarefa } from "../Style/styled";
import { FaTrashAlt as X } from "react-icons/fa";

const Tarefa = (props)=>{
    return(
        <DivTarefa>
            <h2>{props.titulo}</h2>
            <p>Para: {props.setor}</p>
            <p>{props.descricao}</p>
            <button onClick={props.remove}>Remover {<X />}</button>
        </DivTarefa>
    )
};

export default Tarefa;