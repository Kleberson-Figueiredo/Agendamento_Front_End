function inserir_cliente() {
    const nome = $('#nome').val();
    const rg = $('#rg').val();
    const cpf = $('#cpf').val();
    const telefone = $('#telefone').val();

    var dados = new FormData();
    dados.append('nome', nome);
    dados.append('rg', rg);
    dados.append('cpf', cpf);
    dados.append('telefone', telefone);


    $.ajax({
        url: "http://127.0.0.1:3000/cliente",
        type: "POST",
        processData: false,
        contentType: false,
        data: dados,
        success: function (data) {
            console.log(data);
            alert('Serviço salvo com sucesso!');
            window.location.href = 'Servico.html';
        },
        error: function (data) {
            console.log(data);
            alert('Erro no Cadastro!');
        }
    });
}
