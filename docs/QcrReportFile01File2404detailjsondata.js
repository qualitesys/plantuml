console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/tim/FunctionsSet.java 32 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.tim.FunctionsSet"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.tim.FunctionsSet" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#19"
 , "c1" : "TFunction"
 , "c2" : "getFunctionSmart(TFunctionSignature)"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#35"
 , "c1" : "int"
 , "c2" : "size()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#39"
 , "c1" : "Map<TFunctionSignature,TFunction>"
 , "c2" : "functions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#43"
 , "c1" : "String"
 , "c2" : "getLonguestMatchStartingIn(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#47"
 , "c1" : "TFunctionImpl"
 , "c2" : "pendingFunction()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#51"
 , "c1" : "void"
 , "c2" : "addFunction(TFunction)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#59"
 , "c1" : "void"
 , "c2" : "executeEndfunction()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#64"
 , "c1" : "void"
 , "c2" : "executeLegacyDefine(TContext;TMemory;StringLocated)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#76"
 , "c1" : "void"
 , "c2" : "executeLegacyDefineLong(TContext;TMemory;StringLocated)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#86"
 , "c1" : "void"
 , "c2" : "executeDeclareReturnFunction(TContext;TMemory;StringLocated)"
 , "c3" : "6"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#109"
 , "c1" : "void"
 , "c2" : "executeDeclareProcedure(TContext;TMemory;StringLocated)"
 , "c3" : "6"
 , "c4" : "10"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00019] For method getFunctionSmart arguments TFunctionSignature  searched"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#19"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00019] The argument searched is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method net.sourceforge.plantuml.tim.FunctionsSet.getFunctionSmart@POLYN165966 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method net.sourceforge.plantuml.tim.FunctionsSet.getFunctionSmart@POLYN165966 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method net.sourceforge.plantuml.tim.FunctionsSet.getFunctionSmart@POLYN165966 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method getLonguestMatchStartingIn arguments String  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method addFunction arguments TFunction  func"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#51"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00051] The argument func is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.tim.FunctionsSet.addFunction@POLYN167241 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method net.sourceforge.plantuml.tim.FunctionsSet.executeEndfunction@POLYN167767 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method executeLegacyDefine arguments TContext  context|TMemory  memory|StringLocated  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method net.sourceforge.plantuml.tim.FunctionsSet.executeLegacyDefine@POLYN167953 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method net.sourceforge.plantuml.tim.FunctionsSet.executeLegacyDefine@POLYN167953 the MagicNumber/String  'already0048' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method net.sourceforge.plantuml.tim.FunctionsSet.executeLegacyDefine@POLYN167953 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method executeLegacyDefineLong arguments TContext  context|TMemory  memory|StringLocated  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method net.sourceforge.plantuml.tim.FunctionsSet.executeLegacyDefineLong@POLYN168787 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.tim.FunctionsSet.executeLegacyDefineLong@POLYN168787 the MagicNumber/String  'already0068' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method executeDeclareReturnFunction arguments TContext  context|TMemory  memory|StringLocated  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method net.sourceforge.plantuml.tim.FunctionsSet.executeDeclareReturnFunction@POLYN169357 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method net.sourceforge.plantuml.tim.FunctionsSet.executeDeclareReturnFunction@POLYN169357 the MagicNumber/String  'already0068' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method net.sourceforge.plantuml.tim.FunctionsSet.executeDeclareReturnFunction@POLYN169357 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method net.sourceforge.plantuml.tim.FunctionsSet.executeDeclareReturnFunction@POLYN169357 the MagicNumber/String  'This function is already defined' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method executeDeclareProcedure arguments TContext  context|TMemory  memory|StringLocated  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method net.sourceforge.plantuml.tim.FunctionsSet.executeDeclareProcedure@POLYN170814 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method net.sourceforge.plantuml.tim.FunctionsSet.executeDeclareProcedure@POLYN170814 the MagicNumber/String  'already0068' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method net.sourceforge.plantuml.tim.FunctionsSet.executeDeclareProcedure@POLYN170814 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method net.sourceforge.plantuml.tim.FunctionsSet.executeDeclareProcedure@POLYN170814 the MagicNumber/String  'This function is already defined' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#19"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00019] Public method getFunctionSmart is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#35"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00035] Public method size is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00039] Public method functions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00043] Public method getLonguestMatchStartingIn is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00051] Public method addFunction is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/tim/FunctionsSet.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
