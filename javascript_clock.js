function Date_Time() {
	console.clear();
	var status = new Date();
  	var hour = status.getHours();
  	var minutes = status.getMinutes();
  	var seconds = status.getSeconds();
	var year=status.getFullYear();
	var day=status.getDay();
	var month=status.getMonth();
	var date_dd=status.getDate();
  	min = zerotime(minutes);
  	sec = zerotime(seconds);
	month_array=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	new_day=day_week(day);
	console.log(new_day+" "+date_dd+"-"+month_array[month]+"-"+year+" "+hour+":"+min+":"+sec);
  	var t = setTimeout(Date_Time, 500);
}
function zerotime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  	return i;
}
function day_week(day){
	if(day==0){
		return 'sunday';
	}
	else if(day==1){
		return 'Monday';
	}
	else if(day==2){
		return 'Tuesday';
		
	}
	else if(day==3){
		return 'Wednesday';
	}
	else if(day==4){
		return 'Thursday';
	}
	else if(day==5){
		return 'Friday';
	}
	else if(day==6){
		return 'Saturday';
	}
}
Date_Time();