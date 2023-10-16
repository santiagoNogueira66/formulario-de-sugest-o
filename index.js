function enviarFormulario() {
    var nome = document.getElementById("nome").value;
    var matricula = document.getElementById("matricula").value;
    var curso = document.getElementById("curso").value;
    var disciplina = document.getElementById("disciplina").value;
    var sugestao = document.getElementById("sugestao").value;

    var novaJanela = window.open("", "_blank");

    novaJanela.document.write(
        "<html><head><title>Sugestão Enviada</title></head><body>" +
        "<p>Nome do Aluno: " + nome + "</p>" + 
        "<p>Matrícula do Aluno: " + matricula + "</p>" +
        "<p>Curso do Aluno: " + curso + "</p>" +
        "<p>Disciplina do Aluno: " + disciplina + "</p>" +
        "<p>Sugestão do Aluno: " + sugestao + "</p>" +
        "</body></html>"
    );
}
