console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/timingdiagram/TimingNote.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.timingdiagram.TimingNote"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.timingdiagram.TimingNote" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#65"
 , "c1" : "TimingNote"
 , "c2" : "TimingNote(TimeTick;Player;Display;Position;ISkinParam;Style)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#75"
 , "c1" : "void"
 , "c2" : "drawU(UGraphic)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#83"
 , "c1" : "Opale"
 , "c2" : "createOpale()"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#99"
 , "c1" : "double"
 , "c2" : "getHeight(StringBounder)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#103"
 , "c1" : "double"
 , "c2" : "getMarginY()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00107"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#107"
 , "c1" : "TimeTick"
 , "c2" : "getWhen()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00111"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#111"
 , "c1" : "Position"
 , "c2" : "getPosition()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method drawU arguments UGraphic  ug"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument ug is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.timingdiagram.TimingNote.drawU@POLYN164120 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method net.sourceforge.plantuml.timingdiagram.TimingNote.createOpale@POLYN164506 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method getHeight arguments StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method net.sourceforge.plantuml.timingdiagram.TimingNote.getMarginY@POLYN166104 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00099] Public method getHeight is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingNote.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
