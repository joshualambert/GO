// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Inventory',
    backgroundColor:'#fff',
    exitOnClose:true
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Inventory',
    window:win1
});

var txtInvNum = Titanium.UI.createTextField({
	top:10,
    height:40,
    width:200,
    left:'10',
    editable:true,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, //This is a constant that can be used to style textfields in iOS
    hintText:"Inventory Number", //Hint text is displayed to the user before the field has been edited
    keyboardType:Titanium.UI.KEYBOARD_DECIMAL_PAD
});

win1.addEventListener('click', function(e){
	txtInvNum.blur();
});

var view1 = Titanium.UI.createView({
	width:'95%',
	top:55,
	bottom:10,
	backgroundColor:"#ccc",
	visible:false
	
});

var lblDescr = Titanium.UI.createLabel({
	color:'#333',
	text:'Description:',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'125',
	left:'10',
	top:10,
    height:20
});

var lblDescrx = Titanium.UI.createLabel({
	color:'#000',
	text:'This is description text about the inventory item. this should take up more space... ',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'auto',
	left:'15',
	top:23,
    height:60
});

var lblInvClass = Titanium.UI.createLabel({
	color:'#333',
	text:'Inventory Class:',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'125',
	left:'10',
	top:110,
    height:20
});

var lblInvClassx = Titanium.UI.createLabel({
	color:'#000',
	text:'the class of inventory',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'auto',
	left:'15',
	top:133,
    height:20
});

var lblQOH = Titanium.UI.createLabel({
	color:'#333',
	text:'Quantity on Hand:',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'125',
	left:'10',
	top:155,
    height:20
});

var lblQOHx = Titanium.UI.createLabel({
	color:'#000',
	text:'number',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'auto',
	left:'15',
	top:178,
    height:20
});

var lblQOO = Titanium.UI.createLabel({
	color:'#333',
	text:'Quantity on Order:',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'125',
	left:'10',
	top:200,
    height:20
});

var lblQOOx = Titanium.UI.createLabel({
	color:'#000',
	text:'number',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'auto',
	left:'15',
	top:223,
    height:20
});

var lblQT = Titanium.UI.createLabel({
	color:'#333',
	text:'Quantity Total:',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'125',
	left:'10',
	top:245,
    height:20
});

var lblQTx = Titanium.UI.createLabel({
	color:'#000',
	text:'number',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'auto',
	left:'15',
	top:268,
    height:20
});

win1.add(txtInvNum);
win1.add(view1);
view1.add(lblDescr);
view1.add(lblDescrx);
view1.add(lblInvClass);
view1.add(lblInvClassx);
view1.add(lblQOH);
view1.add(lblQOHx);
view1.add(lblQOO);
view1.add(lblQOOx);
view1.add(lblQT);
view1.add(lblQTx);


var submitBtn = Titanium.UI.createButton({
	title:'Submit',
	width:'25%',	//You must set the height and width else the button will be enormous
	height:'40',
	top:'10',
	left:'220'
});

/*
function getInv(InvNum){
	var dbGetInv = // db connection string ?Titanium.Database.open('db1');?
	var rows = dbGetInv.execute('SELECT Descr, InvClass, QOH, QOO FROM testTable WHERE InvNum = "' + InvNum + '"');
	
	if(rows.getRowCount() == 0){
		lblDescrx.text = "No Match"
	}
	
	if(rows.getRowCount() > 0){
		lblDescrx.text = rows.fieldByName('Descr');
		lblInvClassx.text = rows.fieldByName('InvClass');
		lblQOHx.text = rows.fieldByName('QOH');
		lblQOOx.text = rows.fieldByName('QOO');
		lblQTx.text = lblQOOx.text+lblQOHx.text;
	}
}
*/

submitBtn.addEventListener("click", function(e){
	
	if(txtInvNum.value != null && txtInvNum.value != "" ){
		alert('text field is ' + txtInvNum.value + '. This is just a bug test. Description view is now visible' );
		view1.visible = 'true';
		//getInv(txtInvNum.value.toString());
	}
	else{
		alert('Please enter an inventory number');
	}
	
});

win1.add(submitBtn);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Sales',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Sales',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Sales Analysis',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
