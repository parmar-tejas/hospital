window.onload=function(){
	gl.pw=gi('pw');gl.un=gi('id');
	var ua=navigator.userAgent.toLowerCase();
	addInputPlaceholder(gi('id'),'E.g., MM00123123')
	var s=getHash();if(s&&s.length&&s.search('id')>=0){
		if(s.search('fid')>=0){s=s.replace('fid=','');gi('id').value=s;gi('id').style.fontStyle='';setHash('');return;}
		s=s.replace('id=','').split('__');gi('id').value=s[0];gi('id').style.fontStyle='';var r=cXHR();r.onreadystatechange=function(){if(r.readyState==4&&r.status==200){changePW();if(gi('opinp'))gi('opinp').value=s[1];if(gi('npinp'))gi('npinp').focus();setHash('');}};
		r.open("POST","index.php",true);r=sXHRh(r);r.send('fun=pwEmail&id='+s[0]);
	}
};
var forgot=function(e){
	var msg=ce('div','forgotBox');msg.innerHTML='Please enter your patient ID (available on your bill/reports (like MM00123123)) and your registered email ID/mobile number. You will recieve a new password within 3 hours.<div>&nbsp;</div>';
	var t1=ce('div','uidtxt',msg),t2=0;t1.className='forgotText';
	t1=ce('div');ac(msg,t1);t2=ce('input','uidinp',t1);t2.className='forgotInp';t2.type='text';aeh(t2,'keydown',resetPassword);if(gi('id')&&gi('id').value&&gi('id').value!=gi('id').gplaceholder)t2.value=gi('id').value;addInputPlaceholder(t2,'User id (Patient ID e.g., MM00123123)');
	t1=ce('div');ac(msg,t1);t2=ce('input','eminp',t1);t2.className='forgotInp';t2.type='text';addInputPlaceholder(t2,'Registered email address or mobile number');aeh(t2,'keydown',resetPassword);
	gl.gmb=new GMsgBox('RESET PASSWORD',[msg],[{val:'Reset password',evt:'click',handler:function(e){resetPassword();}},{val:'Forgot ID',evt:'click',handler:function(){
		gl.gmb.unbox();var msg=ce('div','forgotBox');var t1=ce('div');ac(msg,t1);t1.innerHTML='Please enter your registered email address or mobile number and we will email/SMS your user ID to your contact information';t1.style.marginBottom='10px';
		t1=ce('div');ac(msg,t1);t2=ce('input','eminp',t1);t2.className='forgotInp';t2.type='text';addInputPlaceholder(t2,'Registered email address or mobile number');aeh(t2,'keydown',resetPassword);
		gl.gmb=new GMsgBox("FORGOT USER ID",[msg],[{val:'Send user ID',evt:'click',handler:function(){resetPassword();}}],430,188,25,150,randomStr(8),0.98,'accOpt','../s3rv1cs/1mg5/close.png');
	}}],430,270,25,120,'fg',0.95,'accOpt','../s3rv1cs/1mg5/close.png');
};
var firsttime=function(e){if(getEvtSrc(e).id!='credsfirsttime')return;
	var msg=ce('div','firstBox');msg.innerHTML='Welcome to the Medanta reports portal. Please enter your patient ID (available on your bill/reports (like MM00123123)) and your registered email ID/mobile number. You will recieve a new password within 3 hours.<div>&nbsp;</div>';
	var t1=ce('div','uidtxt',msg),t2=0;t1.className='forgotText';
	t1=ce('div');ac(msg,t1);t2=ce('input','uidinp',t1);t2.className='forgotInp';t2.type='text';aeh(t2,'keydown',resetPassword);if(gi('id')&&gi('id').value&&gi('id').value!=gi('id').gplaceholder)t2.value=gi('id').value;addInputPlaceholder(t2,'User id (Patient ID e.g., MM00123123)');
	t1=ce('div');ac(msg,t1);t2=ce('input','eminp',t1);t2.className='forgotInp';t2.type='text';addInputPlaceholder(t2,'Registered email address or mobile number');aeh(t2,'keydown',resetPassword);
	gl.gmb=new GMsgBox('FIRST VISIT PASSWORD',[msg],[{val:'Send password',evt:'click',handler:function(e){resetPassword();}},{val:'Forgot ID',evt:'click',handler:function(){
		gl.gmb.unbox();var msg=ce('div','firstBox');var t1=ce('div');ac(msg,t1);t1.innerHTML='Please enter your registered email address or mobile number and we will email/SMS your user ID to your contact information';t1.style.marginBottom='10px';
		t1=ce('div');ac(msg,t1);t2=ce('input','eminp',t1);t2.className='forgotInp';t2.type='text';addInputPlaceholder(t2,'Registered email address or mobile number');aeh(t2,'keydown',resetPassword);
		gl.gmb=new GMsgBox("FORGOT USER ID",[msg],[{val:'Send user ID',evt:'click',handler:function(){resetPassword();}}],430,188,25,150,randomStr(8),0.98,'accOpt','../s3rv1cs/1mg5/close.png');
	}}],430,290,25,120,'fg',0.95,'accOpt','../s3rv1cs/1mg5/close.png');
};
var resetPassword=function(e){var s=e?getEvtSrc(e):0,k=e?fkey(e):13;if(k!=13)return;if(gi('pw'))gi('pw').value='';
	var r=cXHR(),str='',em=gi('eminp'),uid=gi('uidinp');var emflag=true,mnflag=true;
	if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(em.value))emflag=false;if(!/^(\d{10,12},)*\d{10,12}$/.test(em.value.replace(/[\s,\+,\-,\(,\)]+/g,'')))mnflag=false;
	if(!emflag&&!mnflag){
		var gmb=new GMsgBox('INVALID EMAIL/MOBILE','You seem to have entered an invalid email address or mobile number.<br /><br />Please try again with your registered mobile no/email address or <a href="mailto:messages@gidaindia.com">contact us</a> if this problem persists',[],350,205,25,1000,randomStr(8),0.98,'accOpt','../s3rv1cs/1mg5/close.png');return;
	}if(mnflag)em.value=em.value.replace(/[\s,\+,\-,\(,\)]/g,'');
	if(uid){
		if(uid.value.length<gl.unmin||uid.value.length>gl.unmax){
			var forgotIDFlag=false;
			var gmb=new GMsgBox('INVALID USER ID','The user ID is not valid. Patient ID typically looks like MM00123123 and will be on the top of your medical report or bill<br /><br />Please try again with a valid user ID or <a href="mailto:messages@gidaindia.com">contact us</a> if this problem persists',[],350,205,25,1000,randomStr(8),0.98,'accOpt','../s3rv1cs/1mg5/close.png');return;
		}
	}else forgotIDFlag=true;
	r.onreadystatechange=function(){if(r.readyState==4){if(r.status==200){var rt=r.responseText,t=jp(rt);accUnwait();
		if(rt=='invem'){
			var gmb=new GMsgBox('INVALID USER ID','The user ID is not valid. Patient ID typically looks like MM00123123 and will be on the top of your medical report or bill<br /><br />Please try again with a valid user ID or <a href="mailto:messages@gidaindia.com">contact us</a> if this problem persists',[],350,205,25,1000,randomStr(8),0.98,'accOpt','../s3rv1cs/1mg5/close.png');return;
		}else if(t&&t.state=='invem'){
			var gmb=new GMsgBox('INVALID EMAIL/MOBILE','The email address or mobile number you\'ve provided does not match the registered information for the user ID.<br />Your registered '+(t.email?'email is '+t.email:'')+(t.mobile?(t.email?' and ':'')+' mobile is '+t.mobile:'')+'<br /><br />Please try again with the valid contact information or <a href="mailto:messages@gidaindia.com">contact us</a> if this problem persists',[],400,270,25,1000,randomStr(8),0.98,'accOpt','../s3rv1cs/1mg5/close.png');return;
		}else if(rt.search(/wait/)==0){
			var gmb=new GMsgBox("WAIT","You can retrieve the same ID only once in 30 mins. Please try again after "+rt.replace('wait','')+" mins",[{val:'OK',evt:'click',handler:function(){gmb.unbox();}}],300,175,25,1000,randomStr(8),0.98,'accOpt','../s3rv1cs/1mg5/close.png');return;
		}else if((!t||t.state!='success')&&rt!='success'){
			var gmb=new GMsgBox('ERROR','There seems to be an internal error in authenticating your credentials.<br /><br />Please try again or <a href="mailto:messages@gidaindia.com">contact us</a> if you think this error persists',[],350,205,25,1000,randomStr(8),0.98,'accOpt','../s3rv1cs/1mg5/close.png');return;
		}
		if(!forgotIDFlag){gl.gmb.unbox();var gmb=new GMsgBox('DONE','The password has been reset successfully. The temporary password has been sent to '+(t.email?' your email '+t.email:'')+(t.mobile?(t.email?' and ':'')+' your mobile with number '+t.mobile:''),[],325,210,25,200,randomStr(8),0.95,'accOpt','../s3rv1cs/1mg5/close.png');changePW(0,1);}
		if(forgotIDFlag){gl.gmb.unbox();new GMsgBox('DONE','The user ID has been sent to your contact information. If you do not already know your password, you will need to click on Forgot and reset your password using your user ID',[],325,210,25,200,randomStr(8),0.95,'accOpt','../s3rv1cs/1mg5/close.png');}
	}}};
	r.open("POST","index.php",true);r=sXHRh(r);var str='fun='+(forgotIDFlag?'getID':'setNewPW')+'&email='+encodeURIComponent(em.value)+(uid?'&userid='+encodeURIComponent(uid.value):'');r.send(str);accWait(forgotIDFlag?4:2);
};
var showStar=function(){window.location='https://www.medanta.org';}
function getHash(){return window.location.hash.split('?')[0].substring(1);}
function setHash(str){window.location.hash=str;}