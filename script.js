function removecolor(){
	const colorselect = document.getElementById("colorselect");
	const selectedindex = colorselect.selectedIndex;
    if (selectedindex !== -1){
		 colorselect.remove(selectedindex);
}
}
