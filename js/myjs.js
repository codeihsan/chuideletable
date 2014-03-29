var totalNo =0;
var master;
var allHints = new Array();
allHints = ["This is one","This is two","This is three"];
function displayTable()
{
    
    
    counter();
    //alert(totalNo);
        for(var i=0; i<allHints.length; i++){
           counter();
            var a = "#List" + i;
            var b = '<li> <h3>' + allHints[i] + '</h3> </li>' ;
            $(b).insertAfter(a);
        }
}

function sayHello()
{alert("Hello");}

$(document).ready(function(){
    displayTable();
    master = $('#list1');
    //alert(allHints[3]);
});

function counter()
{
    totalNo = 0;
    $('li').each(function(){
        $(this).attr('id','List' + totalNo);
        totalNo++;
        
    });
}

$(function(){
$.UIDeletable({
    list: '#list1', // UIDeletable acts on #list1
    // callback is the event triggered when an item get deleted
    callback: function(item) {
        var r = confirm("Are you sure you want to remove the hint?");
        var text = $(item).siblings('h3').text();
        
        if(r==true)
        {
            var c = '#response';
        $(c).html('You deleted: <strong>' + text + '</strong>');
        }
        else{
            counter();
            totalNo--;
            var a = "#List" + totalNo;
           // alert(totalNo);
            var b = '<li> <h3>' + text + '</h3> </li>' ;
            //alert(a);
            $(b).insertAfter(a);
            $.UIDeletable({list:'#list1'}); 
        }
    }
});
});

$('#addHint').click(function(){
    var msg = prompt("Please enter your hint");
    
    if(!msg)
    {}
    else{
    allHints.push(msg);
     counter();
     totalNo--;
     var a = "#List" + totalNo;
     var b = '<li> <h3>' + msg + '</h3> </li>' ;
     $(b).insertAfter(a);
     $(master).remove();
    //var addHint = $("#addHint")
    //$("#addHint").remove();
    $(master).appendTo('section');
    //$(addHint).appendTo(master);
     
}
});