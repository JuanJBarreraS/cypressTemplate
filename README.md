## Cypress Automation

  ##### This template allows you to quickly start an automation project
#

### Editor (Visual Studio Code)


- WorkSpace
  * ##### The first thing to do is open the code-workspace file and click "Open Workspace", this only works on vscode. If you are using any other IDE, you need to implement the equivalent configurations.
  * ##### Also, if you want to use some other tools like linters or formatters, you need to **DELETE** de default configuration and **ADD** your own.

  * ##### In Dev Tools section you can find the extensions that i recommend to use.

### Usage

- Dependencies 
    ##### Installs the latest version of cypress and another required packages
    * #####  `yarn run install:fresh`
    ---
- Running GUI mode
    * ##### `yarn run cy:open`
    ---
-  Running CLI mode
    * ##### `yarn run cy:run`
    ---

### Dev Tools

  - Linter
    * ##### I use [standardJS](https://standardjs.com/) for linting js code.
      * ##### `yarn run standard`
      * ##### `yarn run standard:fix`
      ##### Also, inside the workspace configuration I put a rule in the save action to fix the current file using the vscode extension [standardJS](https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard)
    ---
  - Code Formatters
    * ##### For JS the vscode extension [standardJS](https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard) includes a formatter and in the workspace configuration I override the current global vscode config.
      ##### Also, I recommend to disable other formatters like prettier or whatever you use.
    * ##### For Gherkin I use the vscode extension [Cucumber (Gherkin) Full Language Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
