var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_ejidos_chihuahua_1 = new ol.format.GeoJSON();
var features_ejidos_chihuahua_1 = format_ejidos_chihuahua_1.readFeatures(json_ejidos_chihuahua_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ejidos_chihuahua_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ejidos_chihuahua_1.addFeatures(features_ejidos_chihuahua_1);var lyr_ejidos_chihuahua_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejidos_chihuahua_1, 
                style: style_ejidos_chihuahua_1,
    title: 'ejidos_chihuahua<br />\
    <img src="styles/legend/ejidos_chihuahua_1_0.png" /> <br />\
    <img src="styles/legend/ejidos_chihuahua_1_1.png" /> AGUA ZARCA<br />\
    <img src="styles/legend/ejidos_chihuahua_1_2.png" /> BABUREACHI<br />\
    <img src="styles/legend/ejidos_chihuahua_1_3.png" /> CHINATU<br />\
    <img src="styles/legend/ejidos_chihuahua_1_4.png" /> EL YEPOSO<br />\
    <img src="styles/legend/ejidos_chihuahua_1_5.png" /> GUAGUACHIQUE<br />\
    <img src="styles/legend/ejidos_chihuahua_1_6.png" /> LA NOPALERA Y SUS ANEXOS<br />\
    <img src="styles/legend/ejidos_chihuahua_1_7.png" /> LA NORTEÑA (ANTES CHUHUICHUPA)<br />\
    <img src="styles/legend/ejidos_chihuahua_1_8.png" /> LA SOLEDAD Y ANEXOS<br />\
    <img src="styles/legend/ejidos_chihuahua_1_9.png" /> NABOGAME Y ANEXOS<br />\
    <img src="styles/legend/ejidos_chihuahua_1_10.png" /> PAGUICHIQUE Y ANEXAS<br />\
    <img src="styles/legend/ejidos_chihuahua_1_11.png" /> PANALACHI<br />\
    <img src="styles/legend/ejidos_chihuahua_1_12.png" /> PIEDRA BOLA, GUACHAVETAVO Y ANEXAS<br />\
    <img src="styles/legend/ejidos_chihuahua_1_13.png" /> SAN CARLOS Y SUS ANEXOS<br />\
    <img src="styles/legend/ejidos_chihuahua_1_14.png" /> SAN IGNACIO DE ARARECO<br />\
    <img src="styles/legend/ejidos_chihuahua_1_15.png" /> SAN JUAN NEPOMUCENO<br />\
    <img src="styles/legend/ejidos_chihuahua_1_16.png" /> SANTA ROSA<br />\
    <img src="styles/legend/ejidos_chihuahua_1_17.png" /> SOCORRO RIVERA<br />\
    <img src="styles/legend/ejidos_chihuahua_1_18.png" /> TECORICHI<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ejidos_chihuahua_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ejidos_chihuahua_1];
lyr_ejidos_chihuahua_1.set('fieldAliases', {'fid': 'fid', 'NOM_NUC': 'NOM_NUC', 'MUNICIPIO': 'MUNICIPIO', 'Clv_Unica': 'Clv_Unica', 'Fol_Matriz': 'Fol_Matriz', 'tipo': 'tipo', 'CLAVE': 'CLAVE', 'EDO_CLV': 'EDO_CLV', 'MUN_CLV': 'MUN_CLV', 'NUC_CLV': 'NUC_CLV', 'PROGRAMA': 'PROGRAMA', 'layer': 'layer', 'path': 'path', });
lyr_ejidos_chihuahua_1.set('fieldImages', {'fid': 'TextEdit', 'NOM_NUC': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'Clv_Unica': 'TextEdit', 'Fol_Matriz': 'TextEdit', 'tipo': 'TextEdit', 'CLAVE': 'TextEdit', 'EDO_CLV': 'Range', 'MUN_CLV': 'Range', 'NUC_CLV': 'Range', 'PROGRAMA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ejidos_chihuahua_1.set('fieldLabels', {'fid': 'no label', 'NOM_NUC': 'no label', 'MUNICIPIO': 'no label', 'Clv_Unica': 'no label', 'Fol_Matriz': 'no label', 'tipo': 'no label', 'CLAVE': 'no label', 'EDO_CLV': 'no label', 'MUN_CLV': 'no label', 'NUC_CLV': 'no label', 'PROGRAMA': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ejidos_chihuahua_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});