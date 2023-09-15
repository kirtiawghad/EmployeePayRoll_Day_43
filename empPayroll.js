class EmployeePayRoll{
    
    get name() 
    { 
        return this.name; 
    }
   
    set name(name) { 
   let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2, }$')
    if (nameRegex.test (name)) 
    this.name = name;
   
   else throw 'Name Incorrect';
   
   }    
}