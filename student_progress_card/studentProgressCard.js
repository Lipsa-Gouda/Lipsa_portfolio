var userData = 
{
   // 1st
    readStudentData()
    {
    //  var userData = {};/*userData store inside this*/
     this.name = document.querySelector("#sname").value;
     userData.age = document.querySelector("#sage").value;
     userData.gender = document.querySelector("input[name=gender]:checked").value;
     userData.class = document.querySelector("#studentclass").value;
     userData.marks = [];
      for(var i =1;i<=5;i++)
      {
        var id ='#m'+i;/*icrease m value m1 ,m2..*/
        var value =parseInt(document.querySelector(id).value);
        userData.marks.push(value);
       }
    //  console.log(userData);
       userData.getTotalAndAvg();
       userData. getGrade ();
      
   },
  //  2nd
  getGrade ()
    {
     if(userData.avg >= 40)
      {
      userData.grade = 'passed';
      }else 
      {
       userData.grade = 'surprise';
      }
      userData.displayStudentDetails();
   },
    displayStudentDetails()
   {
     resetFields();
    // for  hiding displayblock  id in html
     document.querySelector("#displayblock").style.display ='block';
     document.querySelector("#s_name").innerText = userData.name;    
     document.querySelector("#s_age").innerText = userData.age;
     document.querySelector("#s_gender").innerText = userData.gender;
     document.querySelector("#s_class").innerText = userData.class;
     document.querySelector("#s_avg").innerText = userData.avg;
     document.querySelector("s_grade").innerText = userData.grade;
      if(this.avg >= 40)
      {
        document.querySelector("#s_grade").setAttribute("class",'passed');
      }
        else{
          document.querySelector("#s_grade").setAttribute("class",'surprise');

        }
      
    }

};
  userData.getTotalAndAvg = ()=>
  {
    userData.total = 0;
    for(i = 0;i<userData.marks.length;i++)
   {
     userData.total+=userData.marks[i];
   }
     userData.avg = userData.total/userData.marks.length;
     userData.getGrade ();
  }
 var generatePrgressCard = () =>
 {
   userData.readStudentData();
 }
var resetFields = () => {
  document.querySelector("#sname").value = '';
  document.querySelector("#sage").value = '';
}