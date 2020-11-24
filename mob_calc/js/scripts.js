//Execute() =
var dzialanie='';
var a='';
var b='';
var wynik='';

function Execute()
{
	if(document.getElementById("screen").value){
		if(document.getElementById("screen").value=='Pi')b=Math.PI;
		else b=parseFloat((document.getElementById("screen").value).replace(',','.'));
		if(a=='Pi')a=Math.Pi;
	if(dzialanie && a && b){
		switch(dzialanie){
			case '+':
				wynik=a+b;
			break;
			case '-':
				wynik=a-b;
			break;
			case '*':
				wynik=a*b;
			break;
			case '/':
				if(b==0 || b==0.0){wynik=Infinity;}
				else wynik=a/b;
			break;
			case '^':
				wynik=Math.pow(a,b);
			break;
		}
		document.getElementById("PrevRes").value=a+" "+dzialanie+" "+b+" = "+wynik;
		document.getElementById("screen").value=wynik;
		dzialanie=undefined;
		a=undefined;
		b=undefined;
		wynik=undefined;
}
}
else{alert("");}
}

//Dla klalwiszy z cyframi
function GetNumber(arg)
{
	if(!document.getElementById("screen").value && arg==',')
	{
		document.getElementById("screen").value+="0,";
	}
	else if(arg=='Pi'&& document.getElementById("screen").value)
	{
			a=document.getElementById("screen").value;
			document.getElementById("screen").value='Pi';
			dzialanie='*';
			Execute();
	}
	else if(document.getElementById("screen").value=='Pi')
	{
			a=document.getElementById("screen").value;
			document.getElementById("screen").value='Pi';
			dzialanie='*';
			Execute();
	}
	else
	{
		document.getElementById("screen").value+=arg;
	}
}
//Funkcje z jednym argumentem jak Sin, Cos itp
function OneArg(operation)
{
	document.getElementById("PrevRes").disabled = false;
	var a = parseFloat((document.getElementById("screen").value).replace(',','.'));
	switch(operation) {
		case "ToDeg":
			document.getElementById("screen").value = a*180/Math.PI;
			document.getElementById("PrevRes").value=a+"rad = "+a *(180/Math.PI)+"*";
		break;
		case "Sin":
			document.getElementById("screen").value = Math.sin(a);
			document.getElementById("PrevRes").value="Sin("+a+")= "+Math.sin(a);
		break;
		case "Cos":
			document.getElementById("screen").value = Math.cos(a);
			document.getElementById("PrevRes").value="Cos("+a+")= "+Math.cos(a);
		break;
		case "Tan":
			document.getElementById("screen").value = Math.tan(a);
			document.getElementById("PrevRes").value="Tan("+a+")= "+Math.tan(a);
		break;
		case "CTan":
			document.getElementById("screen").value = CTan(a);
			document.getElementById("PrevRes").value="CTan("+a+")= "+CTan(a);
		break;
		case "Sqrt":
			document.getElementById("screen").value = Math.sqrt(a);
			document.getElementById("PrevRes").value="&radic;"+a+"= "+Math.sqrt(a);
		break;
		case "Sqrt":
			document.getElementById("screen").value = Math.sqrt(a);
			document.getElementById("PrevRes").value="&radic;"+a+"= "+Math.sqrt(a);
		break;
		case "Reve":
			document.getElementById("screen").value = 1/a;
			document.getElementById("PrevRes").value="1/"+a+"= "+1/a;
		break;
	}
document.getElementById("PrevRes").disabled = true;
a=undefined;
}
//DLA 2 ARGUMENTOW
function GetOpe(arg)
{
	if(!a){
	a=parseFloat(document.getElementById("screen").value);
	}
	Clean('e');
	dzialanie=arg;
	document.getElementById("PrevRes").value=a+" "+dzialanie;
}
//INNE i POMOCNICZE
function Clean(arg)
{
	var str=document.getElementById("screen").value;
	switch(arg)
	{
		case 'c':
			document.getElementById("PrevRes").value="";
			str="";
		break;
		case 'e':
			str="";
		break;
		case "x":
			str=str.substring(0,str.length-1);
			if(str[str.length-1]==',')str=str.substring(0,str.length-1);
		break;
	}
	document.getElementById("screen").value=str;
}
function ChangeSign()
{
	if(document.getElementById("screen").value)
	{
	var num=parseFloat((document.getElementById("screen").value).replace(',','.'));
	document.getElementById("screen").value=(num*(-1).toString());
	}
}
function CTan(x) { return (1/ Math.tan(x)); }
function ArcCTan(x) { return (Math.PI / 2 - Math.atan(x)); }

function MatchContent()
{
	document.getElementById("calc").style.background = "blue";
	var cl = document.getElementById("calc");
	cl.offsetWidth;
}
