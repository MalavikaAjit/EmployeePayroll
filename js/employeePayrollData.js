class EmployeePayrollData 
{

//getter and setter method

get id() 
{
    return this._id;
}
  set id(id) 
{
    this._id = id;
}

get name() 
{
      return this._name;
}
set name(name)

{
      let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
       
      if (nameRegex.test(name)) 
        this._name = name;
      else throw "Name is incorrect";
} 
get profillePic()
{
  return this._profilePic;
}
set profillePic(profillePic)
{
  this._profilePic = profillePic;
}
get geneder()
{
  return this._gender;
}
set gender(gender)
{
  this._gender = gender;
}
get department()
{
  return this._department;
}
set department(department)
{
this._department = department;
}
get salary()
{
  return this._salary;
}
set salary(salary)
{
  this._salary = salary;
}
get note() 
{
    return this._note;
}
set note(note) 
{
    this._note = note;
}

  get startDate() 
{
    return this._startDate;
}

  set startDate(startDate) 
{
    this._startDate = startDate;
}


   //method
  toString()
  {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        
        const empDate = !this._startDate ? "undefined" : this._startDate.toLocaleDateString("en-US", options);
              
        return "id=" + this._id + ", name=" + this._name + " gender= " +this._gender+ " profilePic= "+this.profilePic + " department= "+this._department + " salary= "+ this._salary+ " Note= "+this._note +  " startDate =" + empDate;
  }
}