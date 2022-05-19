class Student{
    static no_of_student=0;
    constructor(name,age,phone_number,board_marks){
  
     this.name=name,
  
     this.age=age,
  
     this.phone_number=phone_number,
  
     this.board_marks=board_marks
     Student.student_count();
  
    };
   static student_count(){
        return Student.no_of_student++;
    }
eligible_for_placements(required_marks){
    
    return (min_age) => {
        if(this.age >= min_age && this.board_marks >= required_marks){
           console.log(`${this.name} is eligible for placement`);
        }
        else{
            console.log(`${this.name} is not eligible`);
        }
    }
}
  eligible(){
  
             if(this.board_marks >= 40) 
                console.log(`${this.name} is eligible for registration`);    
              else 
                console.log(`${this.name} is not eligible for registration`);
            }
  }
  const mohan=new Student('mohan',20,32457609,45);
  mohan.eligible();

  const ajay=new Student('ajay',25,987987564,39);
  ajay.eligible();

  const prabhat=new Student('prabhat',26,987987564,75);
 prabhat.eligible();

  const yogi=new Student('yogi',24,987987564,40);
  yogi.eligible();

  const rahul=new Student('rahul',27,987987564,20);
  rahul.eligible();

 console.log(Student.student_count());

mohan.eligible_for_placements(45)(20); 
ajay.eligible_for_placements(45)(20);
prabhat.eligible_for_placements(45)(20);
yogi.eligible_for_placements(45)(20);
rahul.eligible_for_placements(45)(20);
