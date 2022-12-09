console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java 22 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "XmlDiagramTransformer"
 , "c2" : "net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#32"
 , "c1" : "GraphmlDescriptionDiagram"
 , "c2" : "GraphmlDescriptionDiagram(DescriptionDiagram)"
 , "c3" : "3"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#56"
 , "c1" : "void"
 , "c2" : "addElement(IEntity;Element)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#62"
 , "c1" : "Element"
 , "c2" : "createEntityNode(IEntity)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#68"
 , "c1" : "void"
 , "c2" : "transformerXml(OutputStream)"
 , "c3" : "1"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "15"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument diagram is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00051] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.GraphmlDescriptionDiagram@POLYN157025 the MagicNumber/String  '1.0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.GraphmlDescriptionDiagram@POLYN157025 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.GraphmlDescriptionDiagram@POLYN157025 the MagicNumber/String  'graphml' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.GraphmlDescriptionDiagram@POLYN157025 the MagicNumber/String  'xmlns' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.GraphmlDescriptionDiagram@POLYN157025 the MagicNumber/String  'http://graphml.graphdrawing.org/xmlns' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.GraphmlDescriptionDiagram@POLYN157025 the MagicNumber/String  'xmlns:xsi' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.GraphmlDescriptionDiagram@POLYN157025 the MagicNumber/String  'http://www.w3.org/2001/XMLSchema-instance' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.GraphmlDescriptionDiagram@POLYN157025 the MagicNumber/String  'xsi:schemaLocation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.GraphmlDescriptionDiagram@POLYN157025 the MagicNumber/String  'http://graphml.graphdrawing.org/xmlns/1.0/graphml.xsd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.GraphmlDescriptionDiagram@POLYN157025 the MagicNumber/String  'graph' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.GraphmlDescriptionDiagram@POLYN157025 the MagicNumber/String  'edgedefault' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.GraphmlDescriptionDiagram@POLYN157025 the MagicNumber/String  'undirected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method addElement arguments IEntity  tobeAdded|Element  container"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument container is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method createEntityNode arguments IEntity  entity"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#62"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00062] The argument entity is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.createEntityNode@POLYN158701 the MagicNumber/String  'node' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.createEntityNode@POLYN158701 the MagicNumber/String  'id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method transformerXml arguments OutputStream  os"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.graphml.GraphmlDescriptionDiagram.transformerXml@POLYN159037 the MagicNumber/String  'yes' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/graphml/GraphmlDescriptionDiagram.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
