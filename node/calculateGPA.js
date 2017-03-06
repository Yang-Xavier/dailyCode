

function readFile(){
    var fs =require('fs')
    fs.readFile('grade.txt',function(err,data){
        data&&(data=data.toString());
        data=data.split(/\r?\n/ig);
        split(data)
    })
}

function split(data){
    var avery=[];
    var i=0;
    var term=1;
    var t=0;
    for(var j=0;j<data.length;j++){
        if(data[j].length!=0){
            avery[i]=data[j]
            i++;
        }else {
            i=0;
            avery.length!=0&&(t+=cal(avery,term++))
            avery=[];
        }

    }
    console.log("total:",t/(term-1))
}


function cal(data,term){
    console.log(term)
    var credit=0,GPA=0,ac,a;
    for(var i=0;i<data.length;i++){
        ac=Number(data[i].split("\t")[6]);
        a=Number(data[i].split("\t")[7]);
        if(a==0)continue;
        GPA+=(4-(9-parseInt(a/10)))*ac;
        credit+=ac;
    }
    console.log(GPA/credit,credit)
    return GPA/credit
}

function func(credit,grade){
    return grade/20-1;
}

readFile()