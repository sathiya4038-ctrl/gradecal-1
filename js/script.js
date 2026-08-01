
        
      function grade() {
        let name= document.getElementById("name").value;
        
        let tam = Number(document.getElementById("tamil").value);
        let Eng = Number(document.getElementById("English").value);
         let mat = Number(document.getElementById("maths").value);
          let sci = Number(document.getElementById("science").value);
           let soci= Number(document.getElementById("social").value);
        let res = tam + Eng +mat+sci+soci;
        let avg = res / 5;
        let GRADE;
        if(avg > 90) {
          GRADE="A";
        }
        else if (avg > 75) {
            GRADE="B";
        }   
        else if (avg > 60) {
            GRADE="C";
        }
        else if (avg > 40) {
            GRADE="D";
        }
        else {
             GRADE="FAIL";
        }
         document.getElementById("show").style.display="block";
        document.getElementById("show").innerHTML = "NAME : " + name  + "<br> Result : " + res + "<br> Avarage :" + avg + "<br> Grade : " + GRADE;


      }
    