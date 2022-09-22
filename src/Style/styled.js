import styled from "styled-components";

export const DivLista = styled.div`
    width: 100%;
    min-height: calc(100vh - 200px);
    padding: 20px;
    background-color: #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const DivTarefa = styled.div`
    background-color: #ffb;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height: 200px;
    margin: 10px;
    h2, p {
        padding-bottom: 10px;
    }
    button {
        padding: 3px 10px;
        border-radius: 10px;
        border: 1px solid gray;
        cursor: pointer;
    }
`;

export const DivForm = styled.div`
    width: 100%;
    form {
        max-width: 300px;
        margin: 20px auto;
        input[type='text'],
        textarea {
            width: 100%;
            margin-bottom: 7px;
            padding-left: 5px;
            height: 25px;
        }
        textarea {
            height: 70px;
            padding: 7px;
        }
        button {
            width: 100%;
            padding: 5px 0;
            border-radius: 10px;
            border: 1px solid gray;
            cursor: pointer;
        }
    }
`;