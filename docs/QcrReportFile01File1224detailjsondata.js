console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/ebnf/ShuntingYard.java 24 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.xml" 
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
 , "c5" : "00016"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#16"
 , "c1" : "ShuntingYard"
 , "c2" : "ShuntingYard(Iterator<Token>)"
 , "c3" : "39"
 , "c4" : "32"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#103"
 , "c1" : "Token"
 , "c2" : "operatorStack_removeFirstAbove()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#110"
 , "c1" : "Token"
 , "c2" : "operatorStack_removeFirstBelow()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00117"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#117"
 , "c1" : "boolean"
 , "c2" : "thereIsAnCommentOnTopOfTheOperatorStack()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00122"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#122"
 , "c1" : "boolean"
 , "c2" : "thereIsAFunctionAtTheTopOfTheOperatorStack()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00127"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#127"
 , "c1" : "boolean"
 , "c2" : "thereIsAnOperatorAtTheTopOfTheOperatorStack()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00132"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#132"
 , "c1" : "boolean"
 , "c2" : "thereIsAnOperatorAtTheTopOfTheOperatorStackWithGreaterPrecedence(Token)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00140"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#140"
 , "c1" : "List<Token>"
 , "c2" : "getOuputQueue()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00011"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class ShuntingYard contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#16"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00016] The argument it is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00018] Avoid declaring class instance within loop, performance impact"
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
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00065] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00022] The same method call token.getSymbol()token.getSymbol() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00022] The same method call token.getSymbol() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00088] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00089] The same method call token.getSymbol()token.getSymbol() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00089] The same method call token.getSymbol() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method net.sourceforge.plantuml.ebnf.ShuntingYard.ShuntingYard@POLYN169626 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method net.sourceforge.plantuml.ebnf.ShuntingYard.ShuntingYard@POLYN169626 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method net.sourceforge.plantuml.ebnf.ShuntingYard.ShuntingYard@POLYN169626 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method net.sourceforge.plantuml.ebnf.ShuntingYard.ShuntingYard@POLYN169626 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method net.sourceforge.plantuml.ebnf.ShuntingYard.thereIsAnCommentOnTopOfTheOperatorStack@POLYN175679 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.ebnf.ShuntingYard.thereIsAFunctionAtTheTopOfTheOperatorStack@POLYN175941 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method net.sourceforge.plantuml.ebnf.ShuntingYard.thereIsAnOperatorAtTheTopOfTheOperatorStack@POLYN176193 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method thereIsAnOperatorAtTheTopOfTheOperatorStackWithGreaterPrecedence arguments Token  token"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument token is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00134] The same method call top.getSymbol()token.getSymbol() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method net.sourceforge.plantuml.ebnf.ShuntingYard.thereIsAnOperatorAtTheTopOfTheOperatorStackWithGreaterPrecedence@POLYN176445 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method net.sourceforge.plantuml.ebnf.ShuntingYard.thereIsAnOperatorAtTheTopOfTheOperatorStackWithGreaterPrecedence@POLYN176445 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method net.sourceforge.plantuml.ebnf.ShuntingYard.thereIsAnOperatorAtTheTopOfTheOperatorStackWithGreaterPrecedence@POLYN176445 the MagicNumber/String  false should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/ebnf/ShuntingYard.java.svg" }

};
console.log('leListeStr 99 main end');
