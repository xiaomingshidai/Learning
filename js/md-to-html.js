$(document).ready(function(){
    $.ajax({
        url: '/md-to-html',
        type: 'POST',
        dataType: 'json',
        success:function(data){
            var converter = new Markdown.Converter();
            var htm = converter.makeHtml(data);
            $('#md').html(htm);
        }
    });
});