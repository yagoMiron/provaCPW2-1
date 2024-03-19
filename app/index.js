
const $ = document.querySelector.bind(document);

const send_button = $("#send_button")

const emprestimo = $('#valor_emprestimo');
const parcelas = $('#numero_parcelas');

const radio_standard = $('#standard');
const radio_platinum = $('#platinum');
const radio_gold = $('#gold');

let standard = true;
let platinum = false;
let gold = false;

send_button.addEventListener('click', () => {
    let juros;
    if (standard) {
        juros = 2.5;
    }
    if (platinum) {
        juros = 1.99
    }
    if (gold) {
        juros = 1.2
    }
    imprimeResultado(Number(emprestimo.value), Number(parcelas.value), juros)
})
radio_standard.addEventListener("click", () => {
    standard = true;
    platinum = false;
    gold = false;
})
radio_platinum.addEventListener("click", () => {
    standard = false;
    platinum = true;
    gold = false;
})
radio_gold.addEventListener("click", () => {
    standard = false;
    platinum = false;
    gold = true;
})

function imprimeResultado (emprestimo, numParcela, juros){
    const tabela = $("#componentBox");
    const montante = emprestimo * (1 + (juros/100) * numParcela);
    const prestacao = montante/numParcela;

    tabela.innerHTML = `
    <div class="component">
        <div id="tabela_resposta">
            <p>Montante: <strong>${montante.toFixed(2)}R$</strong></p>
            <p>Valor da parcela: <strong>${prestacao.toFixed(2)}R$</strong></p>
            <p>Numero de parcelas: <strong>${numParcela}</strong> </p>
        </div>
    </div>
    `;
}