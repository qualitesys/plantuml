console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractTile"
 , "c2" : "Tile"
 , "c2" : "net.sourceforge.plantuml.sequencediagram.teoz.EmptyTile"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.sequencediagram.teoz.EmptyTile" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#50"
 , "c1" : "EmptyTile"
 , "c2" : "EmptyTile(double;Tile;YGauge)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#60"
 , "c1" : "YGauge"
 , "c2" : "getYGauge()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#64"
 , "c1" : "void"
 , "c2" : "drawU(UGraphic)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#68"
 , "c1" : "double"
 , "c2" : "getPreferredHeight()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#72"
 , "c1" : "void"
 , "c2" : "addConstraints()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#75"
 , "c1" : "Real"
 , "c2" : "getMinX()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#79"
 , "c1" : "Real"
 , "c2" : "getMaxX()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#83"
 , "c1" : "Event"
 , "c2" : "getEvent()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument currentY is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method drawU arguments UGraphic  ug"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method net.sourceforge.plantuml.sequencediagram.teoz.EmptyTile.getEvent@POLYN163776 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00064] Valued method drawU is empty or contains only a return. Interface segregation for Tile"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00064] In the class EmptyTile which implements the interface(s) Tile, the method drawU is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedTile"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00072] Valued method addConstraints is empty or contains only a return. Interface segregation for Tile"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00072] In the class EmptyTile which implements the interface(s) Tile, the method addConstraints is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedTile"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/EmptyTile.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
