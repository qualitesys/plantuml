console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java 17 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.sequencediagram.teoz.MutingLine"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.sequencediagram.teoz.MutingLine" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#32"
 , "c1" : "MutingLine"
 , "c2" : "MutingLine(Rose;ISkinParam;List<Event>;Participant)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#40"
 , "c1" : "boolean"
 , "c2" : "useContinueLineBecauseOfDelay(List<Event>)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#52"
 , "c1" : "void"
 , "c2" : "drawLine(UGraphic;Context2D;double;double)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#70"
 , "c1" : "void"
 , "c2" : "drawInternal(UGraphic;Context2D;double;double;ComponentType)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#86"
 , "c1" : "void"
 , "c2" : "delayOn(double;double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class MutingLine contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument skinParam is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method useContinueLineBecauseOfDelay arguments List&lt;Event &gt;  events"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00046] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method net.sourceforge.plantuml.sequencediagram.teoz.MutingLine.useContinueLineBecauseOfDelay@POLYN162560 the MagicNumber/String  'lifelineStrategy' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method net.sourceforge.plantuml.sequencediagram.teoz.MutingLine.useContinueLineBecauseOfDelay@POLYN162560 the MagicNumber/String  'nosolid' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method net.sourceforge.plantuml.sequencediagram.teoz.MutingLine.useContinueLineBecauseOfDelay@POLYN162560 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method net.sourceforge.plantuml.sequencediagram.teoz.MutingLine.useContinueLineBecauseOfDelay@POLYN162560 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.sequencediagram.teoz.MutingLine.useContinueLineBecauseOfDelay@POLYN162560 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method drawLine arguments UGraphic  ug|Context2D  context|double  createY|double  endY"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method net.sourceforge.plantuml.sequencediagram.teoz.MutingLine.drawLine@POLYN163077 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method drawInternal arguments UGraphic  ug|Context2D  context|double  y1|double  y2|ComponentType  defaultLineType"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#70"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00070] The argument ug is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument defaultLineType is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.sequencediagram.teoz.MutingLine.drawInternal@POLYN164571 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method delayOn arguments double  y|double  height"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00086] Public method delayOn is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/sequencediagram/teoz/MutingLine.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
