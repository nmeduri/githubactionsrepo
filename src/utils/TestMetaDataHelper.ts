import { test } from "@playwright/test";

export interface TestMetadata {
  engineer: string;
  module: string;
  jira?: string;
  priority?: "Low" | "Medium" | "High" | "Critical";
  testType?: "UI" | "API" | "E2E" | "Regression" | "Smoke";
}

export class TestMetaDataHelper {
  static addMetadata(metadata: TestMetadata): void {
    test.info().annotations.push({
      type: "Engineer",
      description: metadata.engineer,
    });

    test.info().annotations.push({
      type: "Module",
      description: metadata.module,
    });

    if (metadata.jira) {
      test.info().annotations.push({
        type: "Jira",
        description: metadata.jira,
      });
    }

    if (metadata.priority) {
      test.info().annotations.push({
        type: "Priority",
        description: metadata.priority,
      });
    }

    if (metadata.testType) {
      test.info().annotations.push({
        type: "Test Type",
        description: metadata.testType,
      });
    }
  }
}
