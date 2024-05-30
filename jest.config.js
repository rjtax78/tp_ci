module.exports = {
  testResultsProcessor: "jest-junit",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./",
        outputName: "jest-test-results.xml",
      },
    ],
  ],
};
