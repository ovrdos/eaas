#!/usr/bin/env node

const { program } = require("commander");
const packageJson = require("./package.json");

// Define CLI details
program
  .name("eaas")
  .description("A Unix utility to emulate dependency environments locally by reading Docker and YAML files from a repository.")
  .version(packageJson.version, "-v, --version", "Display the version of eaas")

// Define options
program
  .option("-r, --repo <repository-url>", "Repository url to the upper environment for the new environment")
  .option("-o, --output <directory>", "Directory location for the new environment")
  .option("-b, --base-image <image>", "Name of base image to use as main operating system for the new environment")
  .option("-d, --defaults <file>", "File location of default values")
  .option("-i, --intro", "Do not display intro banner");

// Parse user input
program.parse(process.argv);

// Ignore extra arguments
const options = program.opts();

if (options.intro) {
  console.log("");
} else {
  console.log("\nWelcome to EAAS - Emulate As A Service! 🚀\n");
}

if (Object.keys(options).length === 0) {
  program.help();
}

