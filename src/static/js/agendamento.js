function inserir_agendamento() {

    const data = $('#data').val();
    const hora_inicio = $('#hora_inicio').val();
    const hora_fim = $('#hora_fim').val();
    
    var dados = new FormData();
    dados.append('data', data );
    dados.append('hora_inicio', hora_inicio );
    dados.append('hora_fim', hora_fim );

    $.ajax({
        url: "http://127.0.0.1:3000/agendamento",
        type: 'POST',
        data: dados,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log(data);
            alert('Agendamento concluído com sucesso!');
            window.location.href = 'index.html';
        },
        error: function (data) {
            console.log(data);
            alert('Erro ao fazer agendamento!');
        }
    });
}