function inserir_servico() {
    const descricao_servico = $('#descricao_servico').val();
    const valor = $('#valor').val();
    const categoria_fk = $('#categoria_fk').val();


    var dados = new FormData();
    dados.append('descricao_servico', descricao_servico);
    dados.append('valor', valor);
    dados.append('categoria_fk', categoria_fk);



    $.ajax({
        url: "http://127.0.0.1:3000/servico",
        type: 'POST',
        data: dados,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log(data);
            alert('Dados salvo com sucesso!');
            window.location.href = 'index.html';
        },
        error: function (data) {
            console.log(data);
            alert('Erro ao inserir Serviço!');
        }
    });
}


