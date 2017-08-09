var PATH_PROJECT_WEB_ROOT="/var/www/html/";
var PATH_PROJECT_ROOT="~/projetos/";
var PATH_TOOLS_ROOT=PATH_PROJECT_ROOT + "/shell_tools_project";
var PROJECT_NAME="";
var PROJECT_NAME_DB=PROJECT_NAME+"_DB";
var TABLE_NAME="";
var EMAIL="pss1suporte@gmail.com";
var AUTHOR="Paulo Sérgio da Silva";
var aCollections = [
	"classes",
	"documentos",
	"eventos_gestao",
	"agentes",
	"eventos_preservacao",
	"componentes_digitais"
];
//#=========================================


//#=========================================
//# Declaração das funções da apliação =====
//#=========================================


//#earq-


//console.log("Eu sou o script shell: AUTHOR: " + AUTHOR);


print("=========================================");
print("=========================================");
print("Eu sou o script shell: AUTHOR: " + AUTHOR);

var commands = db.getMongo().getDBs();
//print(commands);
db.getSisterDB("earq_aktienow");

for (var i = 0; aCollections.length >= i; i++) {
	//db.earq_aktienow.insert(aCollections[i])
	db.createCollection(aCollections[i], { 
		capped : true, autoIndexID : true, size : 6142800, max : 10000 
	})
};



print("=========================================");

//#/Users/pssilva/projetos/e-arq-aktienow/doc-repo/mongodb-shell.sh




