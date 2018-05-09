$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/navgirah/workspace/CucumberMaven/src/main/java/Feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1061576319,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login",
  "description": "",
  "id": "login-feature;login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@E2ETest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Userenter URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Logs in",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on the Deals and new deals",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "fill the details and save it",
  "rows": [
    {
      "cells": [
        "Title",
        "Company",
        "PrimaryCon",
        "Amount"
      ],
      "line": 10
    },
    {
      "cells": [
        "TestCucumber",
        "HCL",
        "HYD",
        "13000"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Cilck on the Deals\u003eProducts\u003eEnter the below data and create the product",
  "rows": [
    {
      "cells": [
        "Name",
        "Cost",
        "Retail_value",
        "Wholesale_price",
        "SKU",
        "Amount",
        "Desc"
      ],
      "line": 14
    },
    {
      "cells": [
        "Test",
        "450",
        "950",
        "1050",
        "test1",
        "1",
        "Test"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefinition.userenter_URL()"
});
formatter.result({
  "duration": 9793832740,
  "status": "passed"
});
formatter.match({
  "location": "TestDefinition.logs_in()"
});
formatter.write("Credentials have been written");
formatter.result({
  "duration": 10053906134,
  "status": "passed"
});
formatter.match({
  "location": "TestDefinition.click_on_the_Deals_and_new_deals()"
});
formatter.result({
  "duration": 3689999423,
  "status": "passed"
});
formatter.match({
  "location": "TestDefinition.fill_the_details_and_save_it(DataTable)"
});
formatter.result({
  "duration": 1226975760,
  "status": "passed"
});
formatter.match({
  "location": "TestDefinition.cilck_on_the_Deals_Products_Enter_the_below_data_and_create_the_product(DataTable)"
});
formatter.result({
  "duration": 52441433570,
  "status": "passed"
});
formatter.after({
  "duration": 132153,
  "status": "passed"
});
});