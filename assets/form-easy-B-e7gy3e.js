import{u as i,j as n}from"./index-4M4gmBWN.js";const s={title:"Building Easy Forms in React",date:"2025-02-01",tags:["react","forms"]};function t(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Building Easy Forms in React"}),`
`,n.jsx(e.p,{children:"Create user-friendly forms with React and Formik."}),`
`,n.jsx(e.h2,{children:"Setup Formik"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Formik, Form, Field } from 'formik';\r
\r
function SimpleForm() {\r
  return (\r
    <Formik initialValues={{ name: '' }} onSubmit={handleSubmit}>\r
      <Form>\r
        <Field name="name" type="text" />\r
        <button type="submit">Submit</button>\r
      </Form>\r
    </Formik>\r
  );\r
}
`})}),`
`,n.jsx(e.h2,{children:"Validation"}),`
`,n.jsx(e.p,{children:"Use Yup for schema validation:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import * as Yup from 'yup';\r
\r
const schema = Yup.object({\r
  name: Yup.string().required('Name is required'),\r
});
`})})]})}function a(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{a as default,s as frontmatter};
