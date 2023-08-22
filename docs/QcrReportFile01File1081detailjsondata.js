console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java 6 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.cucadiagram.BodyFactory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.cucadiagram.BodyFactory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.html#54"
 , "c1" : "Bodier"
 , "c2" : "createLeaf(LeafType;Set&lt;VisibilityModifier&gt;)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.html#61"
 , "c1" : "Bodier"
 , "c2" : "createGroup(Set&lt;VisibilityModifier&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.html#65"
 , "c1" : "TextBlock"
 , "c2" : "create1(HorizontalAlignment;List&lt;CharSequence&gt;;ISkinParam;Stereotype;ILeaf;Style)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.html#70"
 , "c1" : "TextBlock"
 , "c2" : "create2(HorizontalAlignment;Display;ISkinParam;Stereotype;ILeaf;Style)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.html#75"
 , "c1" : "TextBlock"
 , "c2" : "create3(Display;ISkinSimple;HorizontalAlignment;FontConfiguration;LineBreakStrategy;Style)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.svg" }

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
 , "c4" : "1"
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
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method createLeaf arguments LeafType  type|Set&lt;VisibilityModifier &gt;  hides"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method createGroup arguments Set&lt;VisibilityModifier &gt;  hides"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method create1 arguments HorizontalAlignment  align|List&lt;CharSequence &gt;  rawBody|ISkinParam  skinParam|Stereotype  stereotype|ILeaf  entity|Style  style"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method create2 arguments HorizontalAlignment  align|Display  display|ISkinParam  skinParam|Stereotype  stereotype|ILeaf  entity|Style  style"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method create3 arguments Display  rawBody|ISkinSimple  skinParam|HorizontalAlignment  align|FontConfiguration  titleConfig|LineBreakStrategy  lineBreakStrategy|Style  style"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/cucadiagram/BodyFactory.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
