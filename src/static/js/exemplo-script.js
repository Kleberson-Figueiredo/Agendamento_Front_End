const salvar_dados = () => {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const pais = document.getElementById('pais').value;

    const data = new FormData();
    data.append('nome', nome);
    data.append('idade', idade);
    data.append('email', email);
    data.append('telefone', telefone);
    data.append('endereco', endereco);
    data.append('cidade', cidade);
    data.append('estado', estado);
    data.append('pais', pais);

    $.ajax({
        url: 'http://127.0.0.1/cadastro',
        type: 'POST',
        data: data,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log(data);
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'index.html';
        },
        error: function (data) {
            console.log(data);
            alert('Erro ao realizar o cadastro!');
        }
    });
}