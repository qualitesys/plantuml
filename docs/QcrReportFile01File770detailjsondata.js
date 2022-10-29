console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/asciiart/TextSkin.java 20 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Rose"
 , "c2" : "net.sourceforge.plantuml.asciiart.TextSkin"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.asciiart.TextSkin" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#22"
 , "c1" : "TextSkin"
 , "c2" : "TextSkin(FileFormat)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#27"
 , "c1" : "ArrowComponent"
 , "c2" : "createComponentArrow(Style[];ArrowConfiguration;ISkinParam;Display)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#42"
 , "c1" : "Component"
 , "c2" : "createComponentNote(Style[];ComponentType;ISkinParam;Display;Colors;NotePosition)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#51"
 , "c1" : "Component"
 , "c2" : "createComponentNote(Style[];ComponentType;ISkinParam;Display;Colors)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#57"
 , "c1" : "Component"
 , "c2" : "createComponent(Style[];ComponentType;ArrowConfiguration;ISkinParam;Display)"
 , "c3" : "21"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00126"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#126"
 , "c1" : "Component"
 , "c2" : "createComponentNewPage(ISkinParam)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method createComponentArrow arguments Style[]  styles|ArrowConfiguration  config|ISkinParam  param|Display  stringsToDisplay"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument param is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00029] The same method call config.getArrowDirection()config.getArrowDirection() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00030] The same method call config.getArrowDirection() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method createComponentNote arguments Style[]  styles|ComponentType  type|ISkinParam  param|Display  stringsToDisplay|Colors  colors|NotePosition  notePosition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method createComponentNote arguments Style[]  styles|ComponentType  type|ISkinParam  param|Display  stringsToDisplay|Colors  colors"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.asciiart.TextSkin.createComponentNote@POLYN168117 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method createComponent arguments Style[]  style|ComponentType  type|ArrowConfiguration  config|ISkinParam  param|Display  stringsToDisplay"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument param is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00069] The same method call type.name() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00072] The same method call config.getArrowDirection()config.getArrowDirection() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00073] The same method call config.getArrowDirection() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.asciiart.TextSkin.createComponent@POLYN168488 the MagicNumber/String  '_HEAD' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.asciiart.TextSkin.createComponent@POLYN168488 the MagicNumber/String  '_TAIL' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method net.sourceforge.plantuml.asciiart.TextSkin.createComponent@POLYN168488 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/asciiart/TextSkin.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method createComponentNewPage arguments ISkinParam  param"
}} 
]
};
console.log('leListeStr 99 main end');
