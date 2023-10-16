const grafoNos = ['I', 'A', 'B', 'C', 'D', 'E'];
const arestas = ['I','IA', 'IB', 'AC', 'AD', 'BA', 'BD', 'CE', 'CD', 'DE'];
const valorArestas = [0, 5, 2, 4, 2, 8, 7, 3, 6, 1];

function descubraParente(no, filhos, arestas) {
    let indicePai = arestas.indexOf(no);
    indEsq = (parseInt((2 * indicePai) + 1));
    indDi = (parseInt((2 * indicePai) + 2));   

    let filEs = arestas[indEsq];
    filhos.push(filEs);
    let filDi = arestas[indDi];
    filhos.push(filDi);

    // const resultFilhos = arestas.filter((arestas) => arestas[0] === no); // filtrar e pegar apenas as arestas que iniciam com a letra do no

}

function shiftUp(custosHeap, nosHeap, indArestHeap){
        let cont = (custosHeap.length-1);
        let fil = custosHeap[indArestHeap]; // valor custo filho
        let indPai = parseInt((indArestHeap -1) / 2); //indice pai
        let pai = custosHeap[indPai]; // valor custo pai
        if (fil === 'infinito' || fil === undefined) {
            fil = 10000;
        }
        if (pai === 'infinito' || pai === undefined) {
            pai = 10000;
        }
        if (fil < pai) { 
            // faz swap 
            cont--;
            swap(custosHeap, nosHeap, indArestHeap, indPai);
            shiftUp(custosHeap, nosHeap, indPai);
        }
}

function descubracustoParente(custo, filhos, custosHeap, nosHeap, arestas) { 
    // pegar o valor do filho
    for (let i = 0; i < filhos.length; i++) {
        //pegando o indice das arestas filhas do menor
        if (filhos != undefined) {
            let indiceArestHeap = nosHeap.indexOf(filhos[i]);
            // inserindo o custo e nosHeap e fazendo o shft para cada
            if(indiceArestHeap >= 0){
                // pega indice da aresta que é igual ao filho das arestas originais
                indiceArestOriginal = arestas.indexOf(filhos[i]);
                // add custo no heap
                custosHeap[indiceArestHeap] = custo[indiceArestOriginal];
                shiftUp(custosHeap, nosHeap, indiceArestHeap);          
            }
        }
    }
}

function iniciaHeap(arestas, noVet, custoVet) {
    for (let i = 0; i < arestas.length; i++) {
        if(arestas[i] === 'I'){
            custoVet[i] = 0; // para o no inicial o custo é 0
            noVet[i] = arestas[i];
        }
        else{
            custoVet[i] = "infinito"; // coloca custo infinito em cada no
            noVet[i] = arestas[i];
        } 
    }
}

function swap(vetHeap, nos, x, y){
    // custoDoHeap
    const temp = vetHeap[x];
    vetHeap[x] = vetHeap[y];
    vetHeap[y] = temp;
    // nosDoHeap
    const temp2 = nos[x];
    nos[x] = nos[y];
    nos[y] = temp2;
}

function removeUltimo(vetHeap){
    const menor = vetHeap.pop();
    return menor;
}


function heapify(vetCusto, vetNo){
    let indicePai = 0;
    let numMenor = 0;
    for (let i = indicePai; i <= (vetCusto.length-1); i++) {
        let indEsq;
        let indDi;

        indEsq = (parseInt((2 * i) + 1));
        indDi = (parseInt((2 * i) + 2));   

        let filEs = vetCusto[indEsq];
        let filDi = vetCusto[indDi];
        let pai = vetCusto[i];

        if (filEs === 'infinito' || filEs === undefined) {
            filEs = 10000;
        }

        if (filDi === 'infinito' || filDi === undefined) {
            filDi = 10000;
        }

        if (pai === 'infinito' || pai === 'undefined') {
            pai = 10000;
        }
        // se pai é menor entre os filhos  

        if (pai > filEs || pai > filDi) {
            if (pai > filEs) { 
                numMenor = filEs; 
                indicePai = indEsq;
            }
            // se filhoEsquerda e maior que filnhoDireita
            if (filEs > filDi && pai > filDi) {
                numMenor = filDi;
                indicePai = indDi;
            }
            swap(vetCusto, vetNo, i, indicePai);
        }
        
    }
}

/*
    pega menor(
            swap primeiro do array(raiz) com o ultimo
            apaga ultimo do array
            add no S
            heapify primeiro(raiz)
        )

    acessa cada vizinho do menor(
            insere(shiftUp), atualiza(shiftUp) ou descarta no array heap
        )
*/
// Na mancha (no: custo, parente)

let arestaS = []; // aresta na mancha
let noS = [] // nos na mancha
let custoS = []; // custo na mancha



// Nos provisorios (no: custo)
let noHeap = [];
let custoNoHeap = [];

function heap(grafoNos, arestasGrafo, arestasCusto, nosCandidato, custosCandidato, noMancha, custoMancha){
    //pega menor:
    swap(custosCandidato, nosCandidato, 0, (nosCandidato.length-1));

    noMancha = removeUltimo(nosCandidato);
    arestaS.push(noMancha);
    custoMancha = removeUltimo(custosCandidato);
    custoS.push(custoMancha);

    heapify(custosCandidato, nosCandidato);

    //acessa cada vizinho do menor:
    let filhos = []; // filhos do no menor
    let indiceMenor = arestasGrafo.indexOf(noMancha); 
    descubraParente(arestasGrafo[indiceMenor], filhos, arestasGrafo);
    descubracustoParente(arestasCusto, filhos, custosCandidato, nosCandidato, arestasGrafo);

}


function dijkstra (grafoNos, arestas, valorArestas, endNodeName) {


    iniciaHeap(arestas, noHeap, custoNoHeap); // apenas o inicial com custo 0
    const indUltEscolhido = grafoNos.indexOf(endNodeName);
    // ate chegar no endNodeName:
    for (let index = 0; index <= 9; index++) {
        heap(grafoNos, arestas, valorArestas, noHeap, custoNoHeap, arestaS, custoS);
    }
        
    // se comeca com as iniciais do no 
    //const resultFilhos = grafoNos.filter((grafoNos) => grafoNos[0] === arestaS); // filtrar e pegar apenas as arestas que iniciam com a letra do no

    
    return arestaS;
}

console.log(dijkstra (grafoNos, arestas, valorArestas, 'D'));