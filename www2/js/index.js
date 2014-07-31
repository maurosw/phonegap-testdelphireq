
var serviceURL = "http://10.0.1.61:3333/";
//var serviceURL = "http://localhost/test/services/";

var documenti;


$('#listadocumenti').bind('pageinit', function(event) {
	getDocumentiList();
});

function getDocumentiList() {
	$.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
	try {
	$.getJSON(serviceURL + 'ordini', function(data) {
		$('#documentList li').remove();
		documenti = data.items;
		$.each(documenti, function(index, documento) {
			$('#documentList').append('<li><a href="Prodotto.html?id=' + documento.Documento + '">' +
					'<h4>' + documento.RagioneSociale  + '</h4></a></li>');
		});
		$('#documentList').listview('refresh');
		alert("ok");
	});
	} catch(err) { 
		alert(err.message);
	}
}
