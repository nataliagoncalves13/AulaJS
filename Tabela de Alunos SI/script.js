function listaAlunos() {
    let cadastro = [
    {"Nome":"Natalia Gonçalves" , "RA":12345678910 , "Nota P1":8 , "Nota P2":6},
    {"Nome":"Ruan Santos" , "RA":12345678910 , "Nota P1":10 , "Nota P2":10},
    {"Nome":"Dolores de Costa" , "RA":12345678910 , "Nota P1":2 , "Nota P2":4},
    {"Nome":"Antonio Querido Fracasso" , "RA":12345678910 , "Nota P1":1 , "Nota P2":1},
    {"Nome":"Chevrolet da Silva Ford" , "RA":12345678910 , "Nota P1":6 , "Nota P2":9}
];

    let tabela = "<table><thead><tr><th>Nome</th><th>RA</th><th>Nota P1</th><th>Nota P2</th><th>Média</th></tr></thead><tbody>"; 
    let mediaP1 = 0;
    let mediaP2 = 0;
    let mediaAluno = 0;
    let aprovados = 0;
    let reprovados = 0;

    for(let i = 0 ; i < 5 ; i++) {
        mediaP1+=cadastro[i]["Nota P1"];
        mediaP2+=cadastro[i]["Nota P2"];
        mediaAluno = (cadastro[i]["Nota P1"] - ( -1*cadastro[i]["Nota P2"] )) /2;

        if (mediaAluno >= 6) {
            aprovados++;
        }
        else
        {
            reprovados++; 
        }


        tabela +="<tr>";
        for(let idx in cadastro[i]) {
            if (idx == "Nota P1" || idx == "Nota P2") {
                tabela += '<td class="nota">';
            }
            else
            {
                tabela += "<td>";
            }
            tabela+= cadastro[i][idx]+"</td>";
         }
         tabela +="<td>"+mediaAluno+"</td>";
      }
      tabela += "</tr>";

      
      mediaP1 = mediaP1/cadastro.length;
      mediaP2 = mediaP2/cadastro.length;
      tabela +="<tr><td>Média da Turma</td><td></td><td>"+mediaP1+"</td>"+"<td>"+mediaP2+"</td></tr>";
      tabela +="<tr><td>Aprovados</td><td></td><td>"+aprovados+"</td>"+"<tr><td>Reprovados</td><td></td><td>"+reprovados+"</td>";

      tabela +="</tbody></table>"

      document.write(tabela);

      let aquarela = document.getElementsByClassName("nota");
      
      for (let i = 0; i < aquarela.length; i++) {
        if (aquarela[i].innerHTML >= 6){
            aquarela[i].style.color = "Blue";
        }
        else
        {
            aquarela[i].style.color = "Red";
        }
      }
}


listaAlunos();
