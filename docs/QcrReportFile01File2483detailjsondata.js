console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "TFunction"
 , "c2" : "net.sourceforge.plantuml.tim.stdlib.SimpleReturnFunction"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.tim.stdlib.SimpleReturnFunction" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.html#50"
 , "c1" : "TFunctionType"
 , "c2" : "getFunctionType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.html#54"
 , "c1" : "void"
 , "c2" : "executeProcedure(TContext;TMemory;LineLocation;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.html#59"
 , "c1" : "void"
 , "c2" : "executeProcedureInternal(TContext;TMemory;List&lt;TValue&gt;;Map&lt;String,TValue&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.html#64"
 , "c1" : "boolean"
 , "c2" : "isUnquoted()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.svg" }

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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method executeProcedure arguments TContext  context|TMemory  memory|LineLocation  location|String  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method executeProcedureInternal arguments TContext  context|TMemory  memory|List&lt;TValue &gt;  args|Map&lt;String ,TValue &gt;  named"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.tim.stdlib.SimpleReturnFunction.isUnquoted@POLYN161551 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.html#54"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00054] Valued method executeProcedure is empty or contains only a return. Interface segregation for TFunction"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.html#54"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00054] In the class SimpleReturnFunction which implements the interface(s) TFunction, the method executeProcedure is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedTFunction"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00059] Valued method executeProcedureInternal is empty or contains only a return. Interface segregation for TFunction"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00059] In the class SimpleReturnFunction which implements the interface(s) TFunction, the method executeProcedureInternal is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedTFunction"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/SimpleReturnFunction.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
