e-Arq Acme Coorp 
==============================================================

Projeto prático para o processo seletivo para Acme Coorp usando a especificação do [e-Arq](https://github.com/pssilva/e-arq-acme-coorp/blob/master/doc-repo/referencias/e-arq-brasil-2011-corrigido.pdf) como base. Usando core do projeto conceito Projeto [MEAN (MongoDB, Express, AngularJS e NodeJS)](https://github.com/pssilva/projeto-mean) para reutilização de soluções coesas. E buscando atender as restrições do teste em si: [DESAFIO Acme Coorp](https://github.com/pssilva/e-arq-acme-coorp/blob/master/doc-repo/referencias/Desafio%20e-Arq%20Acme%20Coorp.pdf).

## Objetivos Principais [Conceitos](http://stackoverflow.com/questions/28608015/continuous-integration-vs-continuous-delivery-vs-continuous-deployment):
- Criar uma sistema usando as tecnologias: MongoDB, Express, AngularJS, and Node.js;
- Usar um ambiente Plataform as a Service - PaaS;
- [Jenkins](https://jenkins.io/) - Integração Contínua; 
- Projetar Sistemas usando Arquiterura Microservices;
- Implantação Contínua (Continuous Deployment);


### Adquirir Proficiências em Habilidades

1. Experiência em sistemas de banco de dados NoSQL (Cassandra, [MongoDB](https://www.mongodb.com/), etc.);
	<p><img src="https://github.com/pssilva/e-arq-acme-coorp/blob/master/doc-repo/mongoDB.png" alt="Experiência em sistemas de banco de dados NoSQL" height="50" width="195"/></p>
2. Experiência em sistemas usando tecnologia não bloqueante [Node.js](https://nodejs.org/en/);
	<p><img src="https://github.com/pssilva/e-arq-acme-coorp/blob/master/doc-repo/nodeJS.png" alt="Node.js" height="50" width="195"></p>
3. Experiência em sistemas usando [Express](http://expressjs.com/pt-br/);
	<p><img src="https://github.com/pssilva/e-arq-acme-coorp/blob/master/doc-repo/expressjs.png" alt="Experiência em sistemas usando ExpressJs" height="50" width="195"></p>
4. Experiência em sistemas usando [AngularJS](https://angularjs.org/);
	<p><img src="https://angularjs.org/img/AngularJS-large.png" alt="Experiência em sistemas usando AngularJs" height="50" width="195"></p>
5. Experiência em sistemas de containerização (e.g. [Docker](https://hub.docker.com/r/pss1suporte/paas-docker/));
	<p><img src="https://github.com/pssilva/e-arq-acme-coorp/blob/master/doc-repo/docker.png" alt="Experiência em sistemas de containerização Docker" height="50" width="195"></p>
6. Experiência em sistemas Linux e shell scripting;
	<p><img src="https://github.com/pssilva/e-arq-acme-coorp/blob/master/doc-repo/shell-linux.jpeg" alt="Experiência em sistemas Linux e shell scripting" height="91" width="150"></p>
7. Experiência em sistemas Amazon Web Services - AWS;
	<p><img src="https://github.com/pssilva/e-arq-acme-coorp/blob/master/doc-repo/aws.png" alt="Experiência em sistemas Amazon Web Services - AWS" height="50" width="195"></p>
8. Experiência em projetos utilizando micro serviços (Microservices) e computação distribuída;

### Como usar:
Considerando que temos uma instância do Amazon Machine Image - AMI iniciada: [aqui](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/AccessingInstances.html) AWS EC2. Execute os comandos abaixo:

1. Clonar o projeto: `git clone https://github.com/pssilva/e-arq-acme-coorp.git`;
2. Acessar a pasta: `cd e-arq-acme-coorp`;
3. Instalar as dependencias: `mpn install`;
4. Instalar as dependencias: `bower install`;
5. Antes de iniciar o servidor você deve definir as seguintes variáveis de ambiente: 
```bash
# será usado no sistema: process.env.SESSION_SECRET
export SESSION_SECRET=?????? 
# será usado no sistema: process.env.NODE_ENV
export NODE_ENV=development 
```
6. Iniciar o serviço do MongoDB: `brew services start mongodb`;
7. Start Server: `grunt`; <br />
        1) Start Server Admin: `node app/admin/server/config/server.js`; <br />
        2) Start Server Avaliação: `node app/avaliacao/server/config/server.js`; <br />
        3) Start Server Restful: 
        `node app/core/server/config/server_api_restful.js`; <br />
8. Realizar o load dos dados no Banco de dados:  <br />
        1) `http://localhost:3034/suporte/mongosse/`; <br />
        2) `http://localhost:3034/suporte/mongosse/aluguel`; <br />
        3) `http://localhost:3034/suporte/mongosse/avaliacao`; <br />
9. Acessar o sistema Admin: `http://localhost:3034`;
10. Acessar o sistema Avaliações: `http://localhost:3045`;
11. Acessar o sistema RESTful: `http://localhost:3033`;

NOTA: MEAN CRUD - para criar um CRUD automaticamente use o comando: <br />
`gradle -q createMeanCRUD -PmodelName=articles -PfeatureName=example`

### Estrutura das Pastas do Projeto
Aqui assumimos a estrutura de pasta Vertical. Você pode gerar automaricamente com o comando: <br /> 

```bash
npm install -g generator-mean-app-crud
npm install -g yo
yo mean-app:createApp MyApp --feature-name='MyFeature' --structure-vertical
```
NOTA: Mais detalhes em [generator-mean-app-crud](https://github.com/pssilva/generator-mean-app-crud).
<br /> Com isso irá gerar um projeto com uma estrutura conforme figura abaixo:

<p><img src="https://github.com/pssilva/e-arq-acme-coorp/blob/master/doc-repo/vertical-structure-folder.png"></p>

Onde entendemos que a pasta feature representa a separação literal das funcionalidades. Exemplo, pretendo organizar authentication e authorization com o [OAuth2.0](https://oauth.net/2/) separadamente como um plugin usando a estrutura da pasta feature. 

### Temas 
O projeto será adaptado para os seguintes temas (themes):

1. [AdminLTE](https://github.com/almasaeed2010/AdminLTE); <br />
>Acessar o sistema: `http://localhost:3000/admin-lte.ejs ou http://localhost:9001/admin-lte.ejs`
!["AdminLTE Presentation"](https://almsaeedstudio.com/AdminLTE2.png "AdminLTE Presentation")

2. [Gentelella Allela](https://github.com/puikinsh/gentelella); <br />
>Acessar o sistema: `http://localhost:3000/gentelella.ejs ou http://localhost:9001/gentelella.ejs`
![Gentelella Bootstrap Admin Template](https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/gentelella-admin-template-preview.jpg "Gentelella Theme Browser Preview")

### Referência
\[Conarq, Conselho Nacional de Arquivos: 2011\], Copyright © 2011 Conselho Nacional de Arquivos, [e-ARQ Brasil](https://github.com/pssilva/e-arq-acme-coorp/blob/master/doc-repo/referencias/e-arq-brasil-2011-corrigido.pdf)<br />
\[Caio Ribeiro Pereira: 2016\], Apress, [Building APIs with Node.js](https://www.amazon.com/Building-APIs-Node-js-Ribeiro-Pereira/dp/1484224418)<br />
\[Valentin Bojinov: 2015\], Copyright © 2015 Packt Publishing, [RESTful Web API Design with Node.js](https://www.packtpub.com/web-development/restful-web-api-design-nodejs): Design and implement comprehensive RESTful solutions in Node.js<br />
\[Valeri Karpov, Diego Netto: 2015\], John Wiley & Sons, Inc., [Professional AngularJS](http://www.allitebooks.com/professional-angularjs/)<br />
\[Amos Q. Haviv: 2014\], Packt Publishing, [MEAN Web Development](http://it-ebooks.info/book/4849/): Master real-time web application development using a mean combination of MongoDB, Express, AngularJS, and Node.js. <br />
\[Sébastien Goasguen: 2016\], O’Reilly Media, Inc., [Docker Cookbook](http://www.allitebooks.com/docker-cookbook/): SOLUTIONS AND EXAMPLES FOR BUILDING DISTRIBUTED APPLICATIONS.<br />
\[Alan Mark Berg: 2015\],  Packt Publishing, [Jenkins Continuous Integration Cookbook](https://ebooks-it.org/1784390089-ebook.htm), Second Edition<br />
\[Christian Posta: 2016\], O’Reilly Media, Inc., [Microservices for Java Developers](https://developers.redhat.com/promotions/microservices-for-java-developers/): A Hands-on Introduction to Frameworks and Containers <br />
\[Markus Eisele: 2016\], O’Reilly Media, Inc., [Modern Java EE Design Patterns](https://developers.redhat.com/promotions/distributed-javaee-architecture/):
	Building Scalable Architecture for Sustainable Enterprise Development. <br />

