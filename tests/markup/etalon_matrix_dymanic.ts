import { registerMarkupTests } from "./helper";
import { StylesManager } from "survey-core";

registerMarkupTests(
  [
    {
      name: "Test matrixdynamic question (default) markup",
      json: {
        "elements": [
          {
            "type": "matrixdynamic",
            "name": "question1",
            "columns": [
              {
                "name": "Column 1"
              },
              {
                "name": "Column 2"
              },
              {
                "name": "Column 3"
              }
            ],
            "choices": [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ]
      },
      before: () => StylesManager.applyTheme("default"),
      after: () => StylesManager.applyTheme("default"),
      snapshot: "matrixdynamic-default"
    }
  ]
);

