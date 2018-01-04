for(i = 2; i < 12; i++) {
	var id = 'DataGrid1__ctl' + i + '_JS1';
	document.getElementById(id).selectedIndex = 1;
}

for(i = 2; i < 15; i++) {
	var id = 'DataGrid1__ctl' + i + '_JS1';
	document.getElementById(id).selectedIndex = 1;
	if (i == 14)
		document.getElementById(id).selectedIndex = 2;
}
document.getElementById("Button1").click()