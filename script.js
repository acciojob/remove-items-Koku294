function removecolor(){
	const colorselect = document.getElementById("colorSelect");
	const selectedindex = colorselect.selectedIndex;
    if (selectedindex !== -1){
		 colorselect.remove(selectedindex);
}
}
document.querySelector('input[type="button"]').addEventListener('click', removecolor);