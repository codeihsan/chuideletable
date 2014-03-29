var totalNo = 4; //the number of elements in allHints
//var master;
var allHints = new Array();
allHints = ["Tic Tac Toes is a tactical game whereby","This is one","This is two","This is three"];

function addDeletable(){
    $.UIDeletable({
    list: '#list1', // UIDeletable acts on #list1
    // callback is the event triggered when an item get deleted
    callback: function(item) {
        //var r = confirm("Are you sure you want to remove the hint?");
        var id = parseInt($('.selected').attr('id').substring(4));
        var text = $(item).siblings('h3').text();
        var c = '#response';
        $(c).html('You deleted: <strong>' + text + '</strong>');
        allHints.splice(id,1);
        totalNo--;
    }
});
}

function initTable()
{
    for(var i=0; i<allHints.length; i++){
        var listItem = $("<li></li>");
        listItem.append('<h3>' + allHints[i] + '</h3>');
        listItem.attr('id',"List" + i);
        $(".list").append(listItem);
    }

    addDeletable();
}

function refreshList(){
    $('section ul').remove();
    $(".current>a").remove();
    var newList = $('<ul></ul>');
    newList.attr({
        class: 'list',
        id: 'list1'
    });
    $('section p').before(newList);
    initTable();
}

function addEvtForAddBtn(){
    $('#addHint').click(function(){
        var msg = prompt("Please enter your hint");
        if(!msg)
        {
        }
        else
        {
            allHints.push(msg);
            totalNo++;
            refreshList();
        }
    });
}


$(document).ready(function(){
    initTable();
    addEvtForAddBtn();
});