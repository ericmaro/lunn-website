import { Form } from "@/components/master-form/types/form";

export const createUser: Form = {
  submitButtonText: "Save User",
  editButtonText: "Edit User",
  submitButtonClass: "right-align-submit",
  groups: [
    {
      title: "Personal Information",
      fields: [
        {
          title: "First Name",
          label: "First name",
          name: "firstName",
          type: "text",
          isRequired: true,
          description: "Enter your first name",
          validationMessage: "Please enter your First name",
          span: 4,
          value: "",
        },
        {
          title: "Middle Name",
          label: "Middle name",
          name: "middleName",
          type: "text",
          isRequired: false,
          description: "Enter your middle name",
          validationMessage: "Please enter your Middle name",
          span: 4,
          value: "",
        },
        {
          title: "Last Name",
          label: "Last name",
          name: "lastName",
          type: "text",
          isRequired: true,
          description: "Enter your last name",
          validationMessage: "Please enter your last name",
          span: 4,
          value: "",
        },
        {
          title: "Email",
          label: "Email",
          name: "email",
          type: "text",
          isRequired: false,
          description: "Enter valid email",
          validationMessage: "Please enter valid email",
          span: 12,
          value: "",
        },
        {
          title: "Phone number",
          label: "Phone number",
          name: "phone",
          type: "text",
          isRequired: false,
          description: "Enter phone number",
          validationMessage: "Please fill phone number",
          span: 6,
          value: "",
        },

        {
          title: "Role",
          label: "Role",
          name: "roleId",
          type: "select",
          options: [],
          isRequired: false,
          description: "Select user role",
          validationMessage: "Please select a role",
          span: 6,
          value: "",
        },

        {
          title: "Organization",
          label: "Organization",
          name: "organizationId",
          type: "select",
          options: [],
          isRequired: false,
          description: "Select user Organization",
          validationMessage: "Please select Organization",
          span: 6,
          value: "",
        },

        {
          title: "Password",
          label: "Password",
          name: "password",
          type: "password",
          isRequired: true,
          description: "Enter Password",
          validationMessage: "Please fill password",
          span: 6,
          value: "",
        },
      ],
    },
  ],
};
