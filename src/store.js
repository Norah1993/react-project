state = {
  firstname: '',
  lastname: '',
  telnum: '',
  email: '',
  agree: false,
  contactType: 'Tel.',
  message: '',
  touched: {
    firstname: false,
    lastname: false,
    telnum: false,
    email: false,
  },
};

handleInputChange = event => {
  // console.log(event.target.type);
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value,
  });
};

handleBlur = field => evt => {
  console.log(field);
  this.setState({
    touched: { ...this.state.touched, [field]: true },
  });
};



validate(firstname, lastname, telnum, email) {
    const errors = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
    };

    if (this.state.touched.firstname && firstname.length < 3)
      errors.firstname = 'First Name should be >= 3 characters';
    else if (this.state.touched.firstname && firstname.length > 10)
      errors.firstname = 'First Name should be <= 10 characters';

    if (this.state.touched.lastname && lastname.length < 3)
      errors.lastname = 'Last Name should be >= 3 characters';
    else if (this.state.touched.lastname && lastname.length > 10)
      errors.lastname = 'Last Name should be <= 10 characters';

    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum))
      errors.telnum = 'Tel. Number should contain only numbers';

    if (
      this.state.touched.email &&
      email.split('').filter(x => x === '@').length !== 1
    )
      errors.email = 'Email should contain a @';

    return errors;
  }


  const errors = this.validate(
    this.state.firstname,
    this.state.lastname,
    this.state.telnum,
    this.state.email
  );