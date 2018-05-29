
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '2930',
  'X-Auth-Token': '76f25846ee9d26f4eeb013ee2d2bd361'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});

function setupColumns(columns){
	columns.forEach(function(column){
	var col = new Column(column.id, column.name);
	board.createColumn(col);
	setupCards(col, column.cards);
	});
}

function setupCards(col, cards){
	cards.forEach(function(card){
	var cardObj = new Card(card.id, card.name, card.bootkamp_kanban_column_id);
	col.addCard(cardObj);
	})
}
