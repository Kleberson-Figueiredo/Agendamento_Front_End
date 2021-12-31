function inserir_categoria() {

    const descricao_categoria = $('#descricao_categoria').val();
    var dados = new FormData();
    dados.append('descricao_categoria', descricao_categoria );

    $.ajax({
        url: "http://127.0.0.1:3000/categoria",
        type: 'POST',
        data: dados,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log(data);
            alert('Categoria salva com sucesso!');
            window.location.href = 'index.html';
        },
        error: function (data) {
            console.log(data);
            alert('Erro ao inserir Categoria!');
        }
    });
}
