module.exports.run = async (client, msg, args) => {
    const {
        red,
        green,
        blue,
        yellow,
        cyan
    } = require('chalk');

    const caesarEncoder = require('@neliharbuzava/caesar-cipher-encoder').encoder;

    var subcmd = args[0]
    var msgContent = args.join(" ").replace(subcmd, "")

    if(!subcmd) subcmd = "-h";

    
    function enAtbash(mensage) {

        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
        var alphabet1 = "abcdefghijklmnopqrstuvwxyz";
        var tebahpla1 = "zyxwvutsrqponmlkjihgfedcba";
        var decoded_string = "";

        for (var i = 0; i < mensage.length; i++) {
            var coded_letra = mensage.charAt(i);

            if (/[^a-zA-Z]/.test(mensage[i])) {
                decoded_string = decoded_string + mensage[i];
            } else if (mensage[i] === mensage[i].toUpperCase()) {
                var letraPosMayus = alphabet.indexOf(coded_letra);
                var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
                decoded_string = decoded_string + tebLetraPosMayus;
            } else {
                var letraPosMinus1 = alphabet1.indexOf(coded_letra);
                var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
                decoded_string = decoded_string + tebLetraPosMinus1;
            }

        }
        return decoded_string;
    }
    function enAtbah(mensage) {

        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var tebahpla = "IHGFNDCBARQPOEMLKJZYXWVUTS";
        var alphabet1 = "abcdefghijklmnopqrstuvwxyz";
        var tebahpla1 = "ihgfndcbarqpoemlkjzyxwvuts";
        var decoded_string = "";

        for (var i = 0; i < mensage.length; i++) {
            var coded_letra = mensage.charAt(i);

            if (/[^a-zA-Z]/.test(mensage[i])) {
                decoded_string = decoded_string + mensage[i];
            } else if (mensage[i] === mensage[i].toUpperCase()) {
                var letraPosMayus = alphabet.indexOf(coded_letra);
                var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
                decoded_string = decoded_string + tebLetraPosMayus;
            } else {
                var letraPosMinus1 = alphabet1.indexOf(coded_letra);
                var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
                decoded_string = decoded_string + tebLetraPosMinus1;
            }

        }
        return decoded_string;
    }
    function enAlbam(mensage) {

        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var tebahpla = "NOPQRSTUVWXYZABCDEFGHIJKLZ";
        var alphabet1 = "abcdefghijklmnopqrstuvwxyz";
        var tebahpla1 = "nopqrstuvwxyzabcdefghijklz";
        var decoded_string = "";

        for (var i = 0; i < mensage.length; i++) {
            var coded_letra = mensage.charAt(i);

            if (/[^a-zA-Z]/.test(mensage[i])) {
                decoded_string = decoded_string + mensage[i];
            } else if (mensage[i] === mensage[i].toUpperCase()) {
                var letraPosMayus = alphabet.indexOf(coded_letra);
                var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
                decoded_string = decoded_string + tebLetraPosMayus;
            } else {
                var letraPosMinus1 = alphabet1.indexOf(coded_letra);
                var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
                decoded_string = decoded_string + tebLetraPosMinus1;
            }

        }
        return decoded_string;
    }

    function enOther(mensage) {

        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var tebahpla = "NOPQRSTUVWXYZABCDEFGHIJKLZ";
        var alphabet1 = "abcdefghijklmnopqrstuvwxyz";
        var tebahpla1 = "klndmuzvxytrikzhnnynhlw";
        var decoded_string = "";

        for (var i = 0; i < mensage.length; i++) {
            var coded_letra = mensage.charAt(i);

            if (/[^a-zA-Z]/.test(mensage[i])) {
                decoded_string = decoded_string + mensage[i];
            } else if (mensage[i] === mensage[i].toUpperCase()) {
                var letraPosMayus = alphabet.indexOf(coded_letra);
                var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
                decoded_string = decoded_string + tebLetraPosMayus;
            } else {
                var letraPosMinus1 = alphabet1.indexOf(coded_letra);
                var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
                decoded_string = decoded_string + tebLetraPosMinus1;
            }

        }
        return decoded_string;
    }

    

    if(subcmd == "-help" || subcmd == "-h") {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: decode "+subcmd+" \n  Help:\n  -h (Display this list)\n  atbash [text] (Decodes atbash)\n  atbah [text] (Decodes atbah)\n  albam [text] (Decodes albam)\n  caesar [text] (Caesar cipher brute-force)```")))
    } else {
        if(!msgContent) {
            msgContent = "undefined";
            msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: decode "+subcmd+" "+msgContent+"\n  Invalid arguments\n  "+msgContent+" is not valid.```")))
            return;
        }
    }

    if (msg.author.id !== "676156690395037713") {
        msg.channel.send("```arm\nbash \n  user@undefined: decode \n  insufficient permissions: access denied```");
        console.log(cyan(`[COMMAND RAN] :: Save (${msg.author.username})`));
        return;
    }

    if(subcmd == "atbash") {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: decode "+subcmd+" "+msgContent+"\n  Decoded: "+enAtbash(msgContent)+"```")))
        return;
    }
    
    if(subcmd == "atbah") {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: decode "+subcmd+" "+msgContent+"\n  Decoded: "+enAtbah(msgContent)+"```")))
        return;
    }  

    if(subcmd == "albam") {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: decode "+subcmd+" "+msgContent+"\n  Decoded: "+enAlbam(msgContent)+"```")))
        return;
    }

    if(subcmd == "other") {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: decode "+subcmd+" "+msgContent+"\n  Decoded: "+enOther(msgContent)+"```")))
        return;
    }

    if(subcmd == "caesar") {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: decode "+subcmd+" "+msgContent+"\n  Starting```")))

        for(let c = 1; c <= 26; c++) {
            var cipher = caesarEncoder(msgContent, c);
            console.log(cipher)
            msg.channel.send("```arm\n  "+cipher+"```")
        }
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  Finished.```")))
        return;
    }

    if(subcmd == "a1z26") {
        const secondParam = args[1]
        let one = args.shift()
        let two = args.shift()
        const messageContent = args.join(" ")

        if(!secondParam || secondParam.length == 0 || !messageContent || messageContent.length == 0) return 
        if(secondParam == "letters") {
            let decodeLetters = 
            msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: decode "+subcmd+" "+secondParam+" "+messageContent+"\n  Decoded: "+decoded+"```")))
        }
    }

}

module.exports.config = {
    name: 'decode',
    aliases: ['encode'], // Even if you don't want an alias, leave this as an array.
};
