/* Basic Prototypal inheritance 

       _==/          i     i          \==_
     /XX/            |\___/|            \XX\
   /XXXX\            |XXXXX|            /XXXX\
  |XXXXXX\_         _XXXXXXX_         _/XXXXXX|
 XXXXXXXXXXXxxxxxxxXXXXXXXXXXXxxxxxxxXXXXXXXXXXX
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|
 XXXXXX/^^^^"\XXXXXXXXXXXXXXXXXXXXX/^^^^^\XXXXXX
  |XXX|       \XXX/^^\XXXXX/^^\XXX/       |XXX|
    \XX\       \X/    \XXX/    \X/       /XX/
       "\       "      \X/      "      /"
*/

var Batman = function(settings){
    this.quote = settings.quote || "Do the batman";
    this.name = settings.name || "Batman!";
    this.nanAmount = settings.nanAmount || 16;    
};

Batman.prototype.DoThe = function(){
    return Array(this.nanAmount).join(this.quote * this.nanAmount) + " " + this.name;
};

var sayMyNameBatman = new Batman({});

console.log(sayMyNameBatman.DoThe());

var settings = {
    name: "Christian!",
};

var sayMyNameChristian = new Batman(settings);

console.log(sayMyNameChristian.DoThe());

/* END */

/* A better way to do inheritance */

var Batman = {
    quote: "Do the batman",
    name: "Batman!",
    nanAmount: 16,
    
    sayMyName: function(){
        return Array(this.nanAmount).join(this.quote * this.nanAmount) + " " + this.name;
    }
};

sayMyNameBatman = Object.create(Batman);
console.log(sayMyNameBatman.sayMyName());

sayMyNameChristian = Object.create(Batman);
sayMyNameChristian.name = "Christian!";
console.log(sayMyNameChristian.sayMyName());

/* END */


/* Now all together + Modular Private/Public functions */
var App = App || {};

App.Batman = (function(){
    
    var _private = {},
        _public = {};
    
    // Set up constructor
    _private.BatmanObj = {
        quote: "Do the batman",
        name: "Batman",
        nanAmount: 16 
    };
    
    _private.sayMyName = function(settings){
        var obj = { 
            "say" : Array(settings.nanAmount).join(settings.quote * settings.nanAmount) + " " + settings.name + "!"
        };
        
        return obj;
    };   
    
    _private.userPrompt = function (){
        var element = document.getElementsByTagName("footer")[0];
        setTimeout(function(){
            element.innerHTML = "CHECK YOUR CONSOLE!";
        }, 2500);
    };

    _public.init = function (name){
        var batmanObj = Object.create(_private.BatmanObj);
        batmanObj.name = name || batmanObj.name;
        console.log(_private.sayMyName(batmanObj));
        _private.userPrompt();
    };
    
    return _public;
    
}());

/* END */