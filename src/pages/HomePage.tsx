import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header"
import { useActions } from "../hooks/actions";
import { object, string } from "yup";
import Input from "../components/Input";

const LoginValidation = object().shape({
  login: string().min(4, "At least 4 characters").required("Login is required"),
  password: string().max(15, "Too many symbols").min(8, "At least 8 characters").required("Valid password required"),
});

const authorization = {
  login: 'iGwT',
  password: 'kanalServis2022'
}

function HomePage() {

  const navigate = useNavigate()
  const { authorize } = useActions()
  authorize(false)
  const [submissionError, setSubmissionError] = useState(false)

  return (
    <div className="flex flex-col gap-40 items-center mx-auto h-screen w-screen">
      <Header />
      <div className="bg-white rounded-md border-8 border-[#27569C] h-[500px] w-[600px]">
        <div className="flex h-full">
          <Formik
            initialValues={{ login: '', password: '' }}
            validationSchema={LoginValidation}
            onSubmit={(values, actions) => {
              if (JSON.stringify(values) === JSON.stringify(authorization)) {
                navigate('/cards')
                authorize(true)
                setSubmissionError(false)
              } else setSubmissionError(true)
              actions.setSubmitting(false);
              actions.resetForm()
            }}
          >
            {({
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="flex gap-10 flex-col w-full items-center justify-center">
                <div className="flex justify-center items-center ">
                  <p className="text-3xl text-[#27569C] font-bold">
                    Authorization
                  </p>
                </div>
                <Input name="login" label="Login" type="text" />
                <Input name="password" label="Password" type="password" />
                <div className="flex flex-col gap-2 items-center">
                <button
                  type="submit"
                  className={`${submissionError ? "border-red-500" : ""} rounded-md border-black text-3xl border-4 hover:bg-[#27569C] hover:text-white  px-6 py-1 font-bold `}
                  disabled={isSubmitting}>
                  Submit
                </button>
                {submissionError &&
                  <span className="p-0 m-0 text-red-500">Wrong credentials</span>
                }
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
