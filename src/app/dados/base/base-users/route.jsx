import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function POST(request,response){

    //Recebendo o arquivo JSON.
    const file = await fs.readFile(process.cwd() + "/src/app/dados/base/db.json", "utf8"); 

    //Converter o arquivo para poder realizar o trabalho.
    const dados = await JSON.parse(file);

    //Capturar o request e tratar os dados:
    // const dadosDoRequest = await request.json();
    // console.log(dadosDoRequest);

    //Exercício
    //Crie uma lógica onde seja os dados que são enviados pelo insomnia, sejam comparados contra os dados da base JSON, caso seja validado, a comparação se encerra e é retornado o status de true, caso contrário retorne o status de false.
    //PLUS
    //Crie uma view para realizar esta validação, com CSS/TAILWIND + ícones[0,5 PT na GS]
    //GRUPO




    //Gerando uma resposta:response.
    return NextResponse.json({"status":true});

}