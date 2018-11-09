
const quoteSelection = [ 
    'John 3:16 For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' ,
    'Ephesians 2:8 For it is by grace you have been saved, through faith and this is not from yourselves, it is the gift of God' ,
    '2 Timothy 3:16 All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness ' ,
    'Romans 10:9 If you declare with your mouth, Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved.' ,
    'John 1:9 The true light that gives light to everyone was coming into the world. ',
    'Romans 8:28 God promises to make something good out of the storms that bring devastation to your life',
    '1 Peter 1:23 You have been born anew, not from perishable but from imperishable seed through the living and abiding word of God',
    '1 Thessalonians 5:16-18 Rejoice always; pray without ceasing; in everything give thanks..',
    '2 Corinthians 5:17 Old things are passed away; behold, all things are become new',
    '2 Timothy 4:17 But the Lord stood with me and gave me strength',
    'Ecclesiastes 7:9 Be not quick in your spirit to become angry, for anger lodges in the heart of fools'
    ]


function displayQuote(){        
        let quoteLength = quoteSelection.length;
        var text = "<ul>";
        for (i = 0; i < 1; i++) {
            text += "<li>" + quoteSelection[0] + "</li>";
        }
        text += "</ul>";

    document.getElementById("quote").innerHTML = text;

}

function shuffleQuotes(){
quoteSelection.sort(function(){
    return 0.5-Math.random();

});
}