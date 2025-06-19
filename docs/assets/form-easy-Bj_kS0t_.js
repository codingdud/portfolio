import{j as n}from"./index-B8FIZb6w.js";const o={title:"Building Easy Forms in React",date:"2025-02-01",tags:["react","forms"]};function t(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{children:"Building Easy Forms in React"}),`
`,n.jsx(r.p,{children:"Create user-friendly forms with React and Formik."}),`
`,n.jsx(r.h2,{children:"Setup Formik"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-jsx",children:`import { Formik, Form, Field } from 'formik';\r
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
`,n.jsx(r.h2,{children:"Validation"}),`
`,n.jsx(r.p,{children:"Use Yup for schema validation:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-javascript",children:`import * as Yup from 'yup';\r
\r
const schema = Yup.object({\r
  name: Yup.string().required('Name is required'),\r
});
`})})]})}function a(e={}){const{wrapper:r}=e.components||{};return r?n.jsx(r,{...e,children:n.jsx(t,{...e})}):t(e)}export{a as default,o as frontmatter};
