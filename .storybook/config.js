import { configure } from '@kadira/storybook';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/docs/github-gist.css';

const req = require.context('../src/components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
