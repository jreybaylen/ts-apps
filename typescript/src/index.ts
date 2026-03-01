class Student {
  private fullName: string
  
  constructor(
    readonly firstName: string,
    readonly middleName: string,
    readonly lastName: string
  ) {
    this.fullName = `${ firstName } ${ middleName } ${ lastName }`
  }

  public logFullName() {
    console.log(`Full Name: `, this.fullName)
  }
}

const student = new Student(
  "John Rey",
  "Mañapao",
  "Baylen"
)

student.logFullName()
