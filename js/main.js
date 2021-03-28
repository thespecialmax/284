$(document).ready(function(){
    // Fetch all links that are rot13 encrypted and add mouseover and mouseout event listeners to encode/decode
    $("a[href^='znvygb']").each(function()
    {
        $(this).mouseover(function()
        {
            ontRot($(this));
        });

        $(this).mouseout(function()
        {
            ontRot($(this));
        });
    });
});

function rot13(input) 
{
    var coding = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMabcdefghijklmnopqrstuvwxyzabcdefghijklm';
    
    for (var text = "", i = 0; i < input.length; i++) 
    {
        character = input.charAt(i);
        position = coding.indexOf(character);
        if (position > -1) 
        {
            character = coding.charAt(position + 13);
        }
        text += character;
    }
    
    return text;
}

function ontRot(link) 
{
    html = link.html();
    link.attr("href", rot13(link.attr("href")));
    link.html(html);
}