var http= require('http');
var arquivo = require('fs');
const porta = 80;
const ip = '192.168.25.232';

var servidor= http.createServer((requisicao,resposta) => {
	
	if(requisicao.url == '/'){
		arquivo.readFile('./index.html','utf8',(problemas,pagina)=>{
			resposta.writeHead(200,{"Content-Type": "text/html"});
			if (problemas) resposta.write('falha de carregamento');
			resposta.write(pagina);
			resposta.end();
		});
	};
	
});

servidor.listen(porta,ip,()=>{console.log("servidor subiu!")});