console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/ebnf/ShuntingYard.java 23 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.ebnf.ShuntingYard"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.ebnf.ShuntingYard" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#50"
 , "c1" : "ShuntingYard"
 , "c2" : "ShuntingYard(Iterator&lt;Token&gt;)"
 , "c3" : "39"
 , "c4" : "32"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00137"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#137"
 , "c1" : "Token"
 , "c2" : "operatorStack_removeFirstAbove()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#144"
 , "c1" : "Token"
 , "c2" : "operatorStack_removeFirstBelow()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00151"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#151"
 , "c1" : "boolean"
 , "c2" : "thereIsAnCommentOnTopOfTheOperatorStack()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00156"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#156"
 , "c1" : "boolean"
 , "c2" : "thereIsAFunctionAtTheTopOfTheOperatorStack()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00161"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#161"
 , "c1" : "boolean"
 , "c2" : "thereIsAnOperatorAtTheTopOfTheOperatorStack()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00166"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#166"
 , "c1" : "boolean"
 , "c2" : "thereIsAnOperatorAtTheTopOfTheOperatorStackWithGreaterPrecedence(Token)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00174"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#174"
 , "c1" : "List&lt;Token&gt;"
 , "c2" : "getOuputQueue()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument it is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00052] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00086] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00099] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00109] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00056] The same method call token.getSymbol()token.getSymbol() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00056] The same method call token.getSymbol() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00122] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00123] The same method call token.getSymbol()token.getSymbol() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00123] The same method call token.getSymbol() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method net.sourceforge.plantuml.ebnf.ShuntingYard.ShuntingYard@POLYN174278 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.ebnf.ShuntingYard.ShuntingYard@POLYN174278 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method net.sourceforge.plantuml.ebnf.ShuntingYard.ShuntingYard@POLYN174278 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method net.sourceforge.plantuml.ebnf.ShuntingYard.ShuntingYard@POLYN174278 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method net.sourceforge.plantuml.ebnf.ShuntingYard.thereIsAnCommentOnTopOfTheOperatorStack@POLYN180331 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method net.sourceforge.plantuml.ebnf.ShuntingYard.thereIsAFunctionAtTheTopOfTheOperatorStack@POLYN180593 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method net.sourceforge.plantuml.ebnf.ShuntingYard.thereIsAnOperatorAtTheTopOfTheOperatorStack@POLYN180845 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#166"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00166] For method thereIsAnOperatorAtTheTopOfTheOperatorStackWithGreaterPrecedence arguments Token  token"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#166"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00166] The argument token is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00168] The same method call top.getSymbol()token.getSymbol() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method net.sourceforge.plantuml.ebnf.ShuntingYard.thereIsAnOperatorAtTheTopOfTheOperatorStackWithGreaterPrecedence@POLYN181097 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method net.sourceforge.plantuml.ebnf.ShuntingYard.thereIsAnOperatorAtTheTopOfTheOperatorStackWithGreaterPrecedence@POLYN181097 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method net.sourceforge.plantuml.ebnf.ShuntingYard.thereIsAnOperatorAtTheTopOfTheOperatorStackWithGreaterPrecedence@POLYN181097 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
