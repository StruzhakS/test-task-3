Test assignment for the JavaScript developer position at Backendless

Using React, React Router, and Webpack write a simple client-side app that works like a primitive CMS (content management system).
The app, upon its start, downloads a JSON file from a well-known path. The JSON file contains a description of tabs that must be rendered in the app.

The description of a tab in the JSON file consists of the following:
id
title
the sequential order of the tab among other tabs
the path to a JS file that has a React component that will be rendered in the tab's content.

See the example below:

![Tabs JSON](https://github.com/StruzhakS/test-task-3/blob/main/Screenshot_26.jpg)


![dummyTable.js](https://github.com/StruzhakS/test-task-3/blob/main/Screenshot_27.jpg)



General requirements:
1. When switching between the tabs, the current tab's id must be added to the URL of the app. For example, 'localhost/dummyTable' or 'localhost/dummyChart'
2. The first tab must open by default.
3. If, at the time when the app is loaded, the URL already contains a tab id, that tab must open by default.
4. The file for the tab content (identified with the "path" property) should be loaded only when it is needed (the lazy loading approach). For example, all files required for the "Dummy Table" should be loaded only when the "Dummy Table" tab is selected. You should be able to see and confirm that in the Network section of the browser's dev tools.
5. When you complete the task, it is necessary to commit your project to GitHub pages or any other alternative and share the link with us through Djinni. If we notice that any portion of your solution was borrowed or copied from another, your candidacy for the job will be immediately disqualified.