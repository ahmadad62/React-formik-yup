# Code Description:
## How to use Formik and Yep to handel forms in react:

This code is a React functional component that creates a form for a user to sign up for an account. It uses the `'useFormik'` hook from the formik library and the `Yup` library for form validation.

 The `useFormik` hook takes an object with several properties as its argument, including:
- initialValues: an object containing the initial values for the form inputs
- `validationSchema`: an object that defines the validation rules for the form inputs using Yup. In this case, it defines that the firstName and lastName inputs must be less than 15 and 20 characters respectively and are required, and the email input must be a valid email and required.
- `onSubmit`: a callback function that is called when the form is submitted. In this case, it simply logs the values of the form inputs to the console.
The component then renders a form with three inputs for first name, last name and email, and a submit button. Each input has `onChange`, `onBlur` handlers that are passed down by useFormik to update the form state and handle validation.
It also uses ternary operator to check if formik.touched and formik.errors for each input fields and if true it will display the error message next to the input field.
When the form is submitted, it will call the onSubmit function and log the formik.values to the console.

You can find more information and examples on how to use the useFormik hook and the Yup library in the official Formik and `Yup` documentation:

Formik documentation
Yup documentation




- https://www.youtube.com/watch?v=vJtyp1YmOpc
