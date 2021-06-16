# rainbowtext
Adds the rainbow text markup to LynxChan 2.6

<b>Installation instructions:</b>

1. Go to ``/LynxChan/src/be/addons/``
2. Git clone this repository
3. You now have a folder called 'rainbowtext' in your addons folder
4. Go to the Global Settings, find the 'Addons' array near the bottom and enter ``rainbowtext`` there, then Save the settings
5. Add this to your global.css file:

``span.rainbow {
 font-size: 1.25rem; 
 font-weight:  bold;
 animation: rainbow 1.5s linear infinite; 
 padding-left: 4px; 
}``

``@keyframes rainbow {
    0%, 100% { color: red; text-shadow: -1px 0 0 orange, -2px 0 0 yellow, -3px 0 0 lime, -4px 0 0 green, -5px 0 0 blue, -6px 0 0 magenta; }
    14% { color: orange; text-shadow: -1px 0 0 yellow, -2px 0 0 lime, -3px 0 0 green, -4px 0 0 blue, -5px 0 0 magenta, -6px 0 0 red; }
    28% { color: yellow; text-shadow: -1px 0 0 lime, -2px 0 0 green, -3px 0 0 blue, -4px 0 0 magenta, -5px 0 0 red, -6px 0 0 orange; }
    43% { color: lime; text-shadow: -1px 0 0 green, -2px 0 0 blue, -3px 0 0 magenta, -4px 0 0 red, -5px 0 0 orange, -6px 0 0 yellow; }
    57% { color: green; text-shadow: -1px 0 0 blue, -2px 0 0 magenta, -3px 0 0 red, -4px 0 0 orange, -5px 0 0 yellow, -6px 0 0 lime; }
    71% { color: blue; text-shadow: -1px 0 0 magenta, -2px 0 0 red, -3px 0 0 orange, -4px 0 0 yellow, -5px 0 0 lime, -6px 0 0 green; }
    86% { color: magenta; text-shadow: -1px 0 0 red, -2px 0 0 orange, -3px 0 0 yellow, -4px 0 0 lime, -5px 0 0 green, -6px 0 0 blue; }
}``

6. Restart Lynxchan from your server terminal. Then refresh the engine to refresh the CSS (``lynxchan -rfe -nd``)
7. That's it, whenever you type a word or sentence within two number signs, ##like this##, it will use the 'rainbow' class. 
