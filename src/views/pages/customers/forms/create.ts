import { Form } from "@/components/master-form/types/form";

export const createCustomer: Form = {
  submitButtonText: "Save Customer",
  editButtonText: "Edit Customer",
  submitButtonClass: "right-align-submit",
  groups: [
    {
      title: "General Information",
      fields: [
        {
          title: "Full name",
          label: "Full name",
          name: "fullName",
          type: "text",
          isRequired: true,
          description: "Enter customer full name",
          validationMessage: "Please enter customer full name",
          span: 12,
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
          span: 6,
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
          title: "Organization",
          label: "Organization",
          name: "organizationId",
          type: "select",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Select customer Organization",
          validationMessage: "Please select Organization",
          span: 6,
          value: "",
        },
        {
          title: "Association",
          label: "Association",
          name: "associationId",
          type: "select",
          options: [],
          numericValue: true,
          isRequired: false,
          description: "Select customer association",
          validationMessage: "Please select association",
          span: 6,
          value: "",
        },
        {
          title: "Region",
          label: "Region",
          name: "regionId",
          type: "select",
          options: [],
          numericValue: true,
          isRequired: false,
          description: "Select customer region",
          validationMessage: "Please select region",
          span: 12,
          value: "",
        },
      ],
    },
  ],
};

export const createCustomerDetails: Form = {
  submitButtonText: "Save Description",
  editButtonText: "Edit Description",
  submitButtonClass: "right-align-submit",
  groups: [
    {
      title: "More Details",
      fields: [
        {
          title: "Sex",
          label: "Sex",
          name: "sex",
          type: "select",
          options: [
            {
              label: "Male",
              value: "MALE",
            },
            {
              label: "Female",
              value: "FEMALE",
            },
          ],
          isRequired: true,
          description: "Enter sex",
          validationMessage: "Please enter sex",
          span: 6,
          value: "",
        },
        {
          title: "Marital Status",
          label: "Marital Status",
          name: "maritalStatus",
          type: "select",
          options: [
            {
              label: "Single",
              value: "SINGLE",
            },
            {
              label: "Married",
              value: "MARRIED",
            },
            {
              label: "Devorsed",
              value: "DEVORSED",
            },
            {
              label: "Widow",
              value: "WIDOW",
            },
          ],
          isRequired: true,
          description: "Enter Marital Status",
          validationMessage: "Please enter Marital Status",
          span: 6,
          value: "",
        },

        {
          title: "Location in Latitude",
          label: "Location in Latitude",
          name: "latitude",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Select customer latitude",
          validationMessage: "Please select latitude",
          span: 6,
          value: "",
        },
        {
          title: "Location in Longitude",
          label: "Location in Longitude",
          name: "longitude",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Select customer longitude",
          validationMessage: "Please select longitude",
          span: 6,
          value: "",
        },
        {
          title: "Village",
          label: "Village",
          name: "village",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Enter customer village",
          validationMessage: "Enter select village",
          span: 6,
          value: "",
        },
        {
          title: "Ward",
          label: "Ward",
          name: "ward",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Enter customer ward",
          validationMessage: "Enter select ward",
          span: 6,
          value: "",
        },
        {
          title: "District",
          label: "District",
          name: "district",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Enter customer district",
          validationMessage: "Enter select district",
          span: 6,
          value: "",
        },
        {
          title: "Region",
          label: "Region",
          name: "region",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Enter customer region",
          validationMessage: "Enter select region",
          span: 6,
          value: "",
        },
        {
          title: "Country",
          label: "Country",
          name: "country",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Enter customer country",
          validationMessage: "Enter select country",
          span: 6,
          value: "",
        },
        {
          title: "Occupation",
          label: "Occupation",
          name: "occupation",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Enter customer occupation",
          validationMessage: "Enter select occupation",
          span: 6,
          value: "",
        },
        {
          title: "Type of ID",
          label: "Type of ID",
          name: "typeOfId",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Enter customer Type of ID",
          validationMessage: "Enter select Type of ID",
          span: 6,
          value: "",
        },
        {
          title: "ID number",
          label: "ID number",
          name: "idNumber",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Enter customer ID number",
          validationMessage: "Enter select ID number",
          span: 6,
          value: "",
        },
        {
          title: "Spouse name",
          label: "Spouse name",
          name: "spouseName",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Enter customer Spouse name",
          validationMessage: "Enter select Spouse name",
          span: 6,
          value: "",
        },
        {
          title: "Number of children",
          label: "Number of children",
          name: "numberOfChildren",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Enter customer Number of children",
          validationMessage: "Enter select Number of children",
          span: 6,
          value: "",
        },
        {
          title: "Number of Dependents",
          label: "Number of Dependents",
          name: "numberOfDependents",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Enter customer Number of Dependents",
          validationMessage: "Enter select Number of Dependents",
          span: 6,
          value: "",
        },
        {
          title: "Next of kin",
          label: "Next of kin",
          name: "nextOfKin",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Enter customer Next of kin",
          validationMessage: "Enter select Next of kin",
          span: 6,
          value: "",
        },
        {
          title: "Head Of Household",
          label: "Head Of Household",
          name: "headOfHousehold",
          type: "text",
          options: [],
          isRequired: false,
          numericValue: true,
          description: "Enter customer Head Of Household",
          validationMessage: "Enter select Head Of Household",
          span: 6,
          value: "",
        },
        {
          title: "Extended Family",
          label: "Extended Family",
          name: "extendedFamily",
          type: "select",
          options: [
            { label: "Yes", value: "YES" },
            { label: "No", value: "NO" },
          ],
          isRequired: false,
          numericValue: true,
          description: "Enter customer Extended Family",
          validationMessage: "Enter select Extended Family",
          span: 6,
          value: "",
        },
      ],
    },
  ],
};
