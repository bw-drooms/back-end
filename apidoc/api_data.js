define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "C__Users_User_Documents_Lambda_build_weeks_back_end_apidoc_main_js",
    "groupTitle": "C__Users_User_Documents_Lambda_build_weeks_back_end_apidoc_main_js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/api/companies/:company_id",
    "title": "",
    "name": "DeleteCompanies",
    "group": "Companies",
    "version": "0.0.0",
    "filename": "./api/company/company-router.js",
    "groupTitle": "Companies"
  },
  {
    "type": "get",
    "url": "/api/companies",
    "title": "",
    "name": "GetCompanies",
    "group": "Companies",
    "version": "0.0.0",
    "filename": "./api/company/company-router.js",
    "groupTitle": "Companies"
  },
  {
    "type": "get",
    "url": "/api/companies/:company_id",
    "title": "",
    "name": "GetCompaniesJobs",
    "group": "Companies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>company's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/company/company-router.js",
    "groupTitle": "Companies"
  },
  {
    "type": "post",
    "url": "/api/companies",
    "title": "",
    "name": "PostCompanies",
    "group": "Companies",
    "version": "0.0.0",
    "filename": "./api/company/company-router.js",
    "groupTitle": "Companies"
  },
  {
    "type": "put",
    "url": "/api/companies/:company_id",
    "title": "",
    "name": "PutCompanies",
    "group": "Companies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>company's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/company/company-router.js",
    "groupTitle": "Companies"
  },
  {
    "type": "delete",
    "url": "/api/jobseekers/:jobseeker_id",
    "title": "",
    "name": "DeleteJobseekers",
    "group": "Jobseekers",
    "version": "0.0.0",
    "filename": "./api/jobseeker/jobseeker-router.js",
    "groupTitle": "Jobseekers"
  },
  {
    "type": "get",
    "url": "/api/jobseekers",
    "title": "",
    "name": "GetJobseekers",
    "group": "Jobseekers",
    "version": "0.0.0",
    "filename": "./api/jobseeker/jobseeker-router.js",
    "groupTitle": "Jobseekers"
  },
  {
    "type": "post",
    "url": "/api/jobseekers",
    "title": "",
    "name": "PostJobseekers",
    "group": "Jobseekers",
    "version": "0.0.0",
    "filename": "./api/jobseeker/jobseeker-router.js",
    "groupTitle": "Jobseekers"
  },
  {
    "type": "put",
    "url": "/api/jobseekers/:jobseeker_id",
    "title": "",
    "name": "PutJobseekers",
    "group": "Jobseekers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>jobseeker's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/jobseeker/jobseeker-router.js",
    "groupTitle": "Jobseekers"
  }
] });
